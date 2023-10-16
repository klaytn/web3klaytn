import { EthExecutionAPI, Bytes, Transaction, KeyStore, ETH_DATA_FORMAT } from 'web3-types';
import { format } from 'web3-utils';
import { Web3Context } from 'web3-core';
import { prepareTransactionForSigning } from 'web3-eth';
import {
	create,
	decrypt,
	encrypt,
	hashMessage,
	privateKeyToAccount,
	recover,
	recoverTransaction,
	signTransaction,
	sign,
	Wallet,
} from 'web3-eth-accounts';

import {
	TransactionSigningError,
	UndefinedRawTransactionError,
} from 'web3-errors';
import {
	HexString,
	Address,
} from 'web3-types';
import {
	bytesToHex,
	hexToBytes,
	sha3Raw,
	toChecksumAddress,
} from 'web3-utils';

import { 
	Web3Account,
	TransactionFactory,
	TypedTransaction, 
	SignTransactionResult, 
	parseAndValidatePrivateKey,
	privateKeyToAddress,
} from "web3-eth-accounts";
import { isNullish } from 'web3-validator';

import { prepareTransaction } from "./klaytn_tx";

// TODO: Change the path after web3-core deployed
const { objectFromRLP } = require("../../../../ethers-ext/dist/src");

import { KlaytnTxFactory} from "@klaytn/ethers-ext";

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
 * Recovers the Ethereum address which was used to sign the given RLP encoded transaction.
 *
 * @param rawTransaction - The hex string having RLP encoded transaction
 * @returns The Ethereum address used to sign this transaction
 * ```ts
 * recoverTransaction('0xf869808504e3b29200831e848094f0109fc8df283027b6285cc889f5aa624eac1f55843b9aca008025a0c9cf86333bcb065d140032ecaab5d9281bde80f21b9687b3e94161de42d51895a0727a108a0b8d101465414033c3f705a9c7b826e596766046ee1183dbc8aeaa68');
 * > "0x2c7536E3605D9C16a7a3D7b1898e529396a65c23"
 * ```
 */
export const recoverTransactionWithKlaytnTx = (rawTransaction: HexString): Address => {
	if (isNullish(rawTransaction)) throw new UndefinedRawTransactionError();

	const data = hexToBytes(rawTransaction);
	let tx; 

	if ( KlaytnTxFactory.has(data[0]) ) {
		tx = objectFromRLP(rawTransaction);
		
		if ( !tx.from ) {
			throw new Error('tx.from is not a property.');
		} else if ( typeof tx.from == "string") {
			return toChecksumAddress(tx.from);
		} else {
			throw new Error('tx.from is not a string type.');
		}
	}
	
	tx = TransactionFactory.fromSerializedData(data);
	return toChecksumAddress(tx.getSenderAddress().toString());
};

// We overrided web3/src/accounts.ts:initAccountsForContext
export const initAccountsForContext = (context: Web3Context<EthExecutionAPI>) => {
	const signTransactionWithContext = async (transaction: Transaction, privateKey: Bytes) => {
		const tx = await prepareTransactionForSigning(transaction, context);

		const privateKeyBytes = format({ format: 'bytes' }, privateKey, ETH_DATA_FORMAT);

		return signTransaction(tx, privateKeyBytes);
	};

	const privateKeyToAccountWithContext = (privateKey: Uint8Array | string) => {
		const account = privateKeyToAccount(privateKey);

		return {
			...account,
			signTransaction: async (transaction: Transaction) =>
				signTransactionWithContext(transaction, account.privateKey),
		};
	};

	const decryptWithContext = async (
		keystore: KeyStore | string,
		password: string,
		options?: Record<string, unknown>,
	) => {
		const account = await decrypt(keystore, password, (options?.nonStrict as boolean) ?? true);

		return {
			...account,
			signTransaction: async (transaction: Transaction) =>
				signTransactionWithContext(transaction, account.privateKey),
		};
	};

	const createWithContext = () => {
		const account = create();

		return {
			...account,
			signTransaction: async (transaction: Transaction) =>
				signTransactionWithContext(transaction, account.privateKey),
		};
	};

	const wallet = new Wallet({
		create: createWithContext,
		privateKeyToAccount: privateKeyToAccountWithContext,
		decrypt: decryptWithContext,
	});

	return {
		signTransaction: signTransactionWithContext,
		create: createWithContext,
		privateKeyToAccount: privateKeyToAccountWithContext,
		decrypt: decryptWithContext,
		recoverTransaction,
		hashMessage,
		sign,
		recover,
		encrypt,
		wallet,
	};
};