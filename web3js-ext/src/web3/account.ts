import Web3, {Web3Context} from "web3";
import {
	TransactionSigningError,
} from 'web3-errors';
import {
	Bytes,
	HexString,
} from 'web3-types';
import {
	bytesToHex,
	hexToBytes,
	sha3Raw,
} from 'web3-utils';

import { 
	Web3Account,
	Transaction,
	TypedTransaction, 
	sign,
	signTransaction,
	SignTransactionResult, 
	parseAndValidatePrivateKey,
	privateKeyToAddress,
	privateKeyToAccount,
	encrypt,
} from "web3-eth-accounts";
import { isNullish } from 'web3-validator';

import { prepareTransaction } from "./klaytn_tx";

// eslint-disable-next-line import/extensions
import * as ethereumCryptography from 'ethereum-cryptography/secp256k1.js';

const secp256k1 = ethereumCryptography.secp256k1 ?? ethereumCryptography;

export const signTransactionAsFeePayer = async (
	transaction: TypedTransaction,
	privateKey: HexString,
	// To make it compatible with rest of the API, have to keep it async
	// eslint-disable-next-line @typescript-eslint/require-await
): Promise<SignTransactionResult> => {
    // @ts-ignore
	const signedTx = transaction.signAsFeePayer(hexToBytes(privateKey));
	if (isNullish(signedTx.feePayer_v) || isNullish(signedTx.feePayer_r) || isNullish(signedTx.feePayer_s))
		throw new TransactionSigningError('Signer Error');

	const validationErrors = signedTx.validate(true);

	if (validationErrors.length > 0) {
		let errorString = 'Signer Error ';
		for (const validationError of validationErrors) {
			errorString += `${errorString} ${validationError}.`;
		}
		throw new TransactionSigningError(errorString);
	}

    // @ts-ignore
	const rawTx = bytesToHex(signedTx.serializeAsFeePayer());
	const txHash = sha3Raw(rawTx); // using keccak in web3-utils.sha3Raw instead of SHA3 (NIST Standard) as both are different

	return {
		messageHash: bytesToHex(signedTx.getMessageToSignAsFeePayer(true)),
		v: `0x${signedTx.feePayer_v.toString(16)}`,
		r: `0x${signedTx.feePayer_r.toString(16).padStart(64, '0')}`,
		s: `0x${signedTx.feePayer_s.toString(16).padStart(64, '0')}`,
		rawTransaction: rawTx,
		transactionHash: bytesToHex(txHash),
	};
};

/**
 * Get an Account object from the privateKey with context
 * 
 * @param context - web3 context
 * @param privateKey - String or Uint8Array of 32 bytes
 * @param ignoreLength - if true, will not error check length
 * @returns A Web3Account object
 *
 * ```ts
 * let provider = new Web3.providers.HttpProvider("https://public-en-baobab.klaytn.net");
 * let web3 = new KlaytnWeb3(provider);
 * web3.eth.accounts.privateKeyToAccount("0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709");
 * >    {
 * 			address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
 * 			privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
 * 			sign,
 * 			signTransaction,
 * 			encrypt,
 * 	}
 * ```
 */
export const privateKeyToAccountWithContext = (context: Web3Context, privateKey: Bytes, ignoreLength?: boolean): Web3Account => {
	const privateKeyUint8Array = parseAndValidatePrivateKey(privateKey, ignoreLength);

	return {
		address: privateKeyToAddress(privateKeyUint8Array),
		privateKey: bytesToHex(privateKeyUint8Array),
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		// @ts-ignore
		signTransaction: async (otx: Transaction): Promise<SignTransactionResult> => {
			// @ts-ignore
			let tx = await prepareTransaction(otx, context, privateKey);
			let priv = bytesToHex(privateKey);
			return signTransaction(tx, priv);
		},
		sign: (data: Record<string, unknown> | string) =>
			sign(typeof data === 'string' ? data : JSON.stringify(data), privateKeyUint8Array),
		encrypt: async (password: string, options?: Record<string, unknown>) =>
			encrypt(privateKeyUint8Array, password, options),
	};
};

/**
 *
 * Generates and returns a Web3Account object that includes the private and public key
 * For creation of private key, it uses an audited package ethereum-cryptography/secp256k1
 * that is cryptographically secure random number with certain characteristics.
 * Read more: https://www.npmjs.com/package/ethereum-cryptography#secp256k1-curve
 *
 * @returns A Web3Account object
 * ```ts
 * web3.eth.accounts.create();
 * {
 * address: '0xbD504f977021b5E5DdccD8741A368b147B3B38bB',
 * privateKey: '0x964ced1c69ad27a311c432fdc0d8211e987595f7eb34ab405a5f16bdc9563ec5',
 * signTransaction: [Function: signTransaction],
 * sign: [Function: sign],
 * encrypt: [AsyncFunction: encrypt]
 * }
 * ```
 */
export const createWithContext = (context: Web3Context): Web3Account => {
	const privateKey = secp256k1.utils.randomPrivateKey();

	return privateKeyToAccountWithContext(context, `${bytesToHex(privateKey)}`);
};