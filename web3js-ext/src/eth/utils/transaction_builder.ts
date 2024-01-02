/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
// Taken from https://github.com/web3/web3.js/blob/v4.3.0/packages/web3-eth/src/utils/transaction_builder.ts

import { Web3Context } from "web3-core";
import {
  LocalWalletNotAvailableError,
  InvalidTransactionWithSender,
  InvalidTransactionWithReceiver,
} from "web3-errors";
import { detectTransactionType, NUMBER_DATA_FORMAT } from "web3-eth";
import { privateKeyToAddress } from "web3-eth-accounts";
import {
  EthExecutionAPI,
  Transaction,
  TransactionWithFromLocalWalletIndex,
  TransactionWithToLocalWalletIndex,
  TransactionWithFromAndToLocalWalletIndex,
  FormatType,
  ETH_DATA_FORMAT,
  HexString,
  Address,
  Numbers,
} from "web3-types";
import { format } from "web3-utils";
import { isAddress, isHexStrict, isNullish, isNumber } from "web3-validator";


export const getTransactionFromOrToAttr = (
  attr: "from" | "to",
  web3Context: Web3Context<EthExecutionAPI>,
  transaction?:
    | Transaction
    | TransactionWithFromLocalWalletIndex
    | TransactionWithToLocalWalletIndex
    | TransactionWithFromAndToLocalWalletIndex,
  privateKey?: HexString | Uint8Array,
): Address | undefined => {
  if (transaction !== undefined && attr in transaction && transaction[attr] !== undefined) {
    if (typeof transaction[attr] === "string" && isAddress(transaction[attr] as string)) {
      return transaction[attr] as Address;
    }
    if (!isHexStrict(transaction[attr] as string) && isNumber(transaction[attr] as Numbers)) {
      if (web3Context.wallet) {
        const account = web3Context.wallet.get(
          format({ format: "uint" }, transaction[attr] as Numbers, NUMBER_DATA_FORMAT),
        );

        if (!isNullish(account)) {
          return account.address;
        }

        throw new LocalWalletNotAvailableError();
      }
      throw new LocalWalletNotAvailableError();
    } else {
      throw attr === "from"
        ? new InvalidTransactionWithSender(transaction.from)
        : // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        new InvalidTransactionWithReceiver(transaction.to);
    }
  }
  if (attr === "from") {
    if (!isNullish(privateKey)) { return privateKeyToAddress(privateKey); }
    if (!isNullish(web3Context.defaultAccount)) { return web3Context.defaultAccount; }
  }

  return undefined;
};

export const getTransactionType = (
  transaction: FormatType<Transaction, typeof ETH_DATA_FORMAT>,
  web3Context: Web3Context<EthExecutionAPI>,
) => {
  const inferredType = detectTransactionType(transaction, web3Context);
  if (!isNullish(inferredType)) { return inferredType; }
  if (!isNullish(web3Context.defaultTransactionType)) { return format({ format: "uint" }, web3Context.defaultTransactionType, ETH_DATA_FORMAT); }

  return undefined;
};
