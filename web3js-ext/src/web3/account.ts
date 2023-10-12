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
	encrypt,
} from "web3-eth-accounts";
import { isNullish } from 'web3-validator';

import { prepareTransaction } from "./klaytn_tx";

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
 * Get an Account object from the privateKey
 *
 * @param privateKey - String or Uint8Array of 32 bytes
 * @param ignoreLength - if true, will not error check length
 * @returns A Web3Account object
 *
 * The `Web3Account.signTransaction` is not stateful here. We need network access to get the account `nonce` and `chainId` to sign the transaction.
 * Use {@link Web3.eth.accounts.signTransaction} instead.
 *
 * ```ts
 * privateKeyToAccount("0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709");
 * >    {
 * 			address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
 * 			privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
 * 			sign,
 * 			signTransaction,
 * 			encrypt,
 * 	}
 * ```
 */
export const privateKeyToAccount = (context: Web3Context, privateKey: Bytes, ignoreLength?: boolean): Web3Account => {
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