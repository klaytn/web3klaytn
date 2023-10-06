import {
	TransactionSigningError,
} from 'web3-errors';
import {
	HexString,
} from 'web3-types';
import {
	bytesToHex,
	hexToBytes,
	sha3Raw,
} from 'web3-utils';

import { TypedTransaction, SignTransactionResult } from "web3-eth-accounts";
import { isNullish } from 'web3-validator';


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