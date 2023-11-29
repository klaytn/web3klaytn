import Eth from "web3-eth";
import {
  decodeLog,
  decodeParameter,
  decodeParameters,
  encodeFunctionCall,
  encodeFunctionSignature,
  encodeParameter,
  encodeParameters,
} from "web3-eth-abi";
import {
  encrypt,
  hashMessage,
  recover,
  recoverTransaction,
  sign,
  signTransaction,
  Wallet,
  Web3Account,
} from "web3-eth-accounts";
import { Contract } from "web3-eth-contract";
import { ENS } from "web3-eth-ens";
import { Iban } from "web3-eth-iban";
import { Personal } from "web3-eth-personal";
import { Net } from "web3-net";
import { Bytes, Transaction } from "web3-types";

// Extended web3.eth type.
// Modified from web3/src/types.ts:Web3EthInterface
export interface ExtWeb3EthInterface extends Eth {
	Contract: typeof Contract;
	Iban: typeof Iban;
	net: Net;
	ens: ENS;
	abi: {
		encodeEventSignature: typeof encodeFunctionSignature;
		encodeFunctionCall: typeof encodeFunctionCall;
		encodeFunctionSignature: typeof encodeFunctionSignature;
		encodeParameter: typeof encodeParameter;
		encodeParameters: typeof encodeParameters;
		decodeParameter: typeof decodeParameter;
		decodeParameters: typeof decodeParameters;
		decodeLog: typeof decodeLog;
	};
	accounts: {
		create: () => Web3Account;
		privateKeyToAccount: (privateKey: Uint8Array | string) => Web3Account;
		signTransaction: (
			transaction: Transaction,
			privateKey: Bytes,
		) => ReturnType<typeof signTransaction>;
		recoverTransaction: typeof recoverTransaction;
		hashMessage: typeof hashMessage;
		sign: typeof sign;
		recover: typeof recover;
		encrypt: typeof encrypt;
		decrypt: (
			keystore: string,
			password: string,
			options?: Record<string, unknown>,
		) => Promise<Web3Account>;
		wallet: Wallet;

		// Additional methods
		signTransactionAsFeePayer: (
			transaction: Transaction,
			privateKey: Bytes,
		) => ReturnType<typeof signTransaction>;
	};
	personal: Personal;
}

// Globally extend the Web3Account type
// which are returned by
// - web3.eth.accounts.privateKeyToAccount()
// - web3.eth.accounts.create()
// - web3.eth.accounts.decrypt()
declare module "web3-eth-accounts" {
  interface Web3Account {
    readonly signTransactionAsFeePayer: (tx: Transaction) => Promise<{
      readonly messageHash: string;
      readonly r: string;
      readonly s: string;
      readonly v: string;
      readonly rawTransaction: string;
      readonly transactionHash: string;
    }>;
  }
}