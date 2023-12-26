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
// Taken from web3-eth/src/utils/transaction_builder.ts:getTransactionType
// https://github.com/web3/web3.js/blob/v4.3.0/packages/web3-eth/src/utils/transaction_builder.ts

import { Web3Context } from "web3-core";
import { detectTransactionType } from "web3-eth";
import {
  EthExecutionAPI,
  Transaction,
  FormatType,
  ETH_DATA_FORMAT,
} from "web3-types";
import { format } from "web3-utils";
import { isNullish } from "web3-validator";


export const getTransactionType = (
  transaction: FormatType<Transaction, typeof ETH_DATA_FORMAT>,
  web3Context: Web3Context<EthExecutionAPI>,
) => {
  const inferredType = detectTransactionType(transaction, web3Context);
  if (!isNullish(inferredType)) { return inferredType; }
  if (!isNullish(web3Context.defaultTransactionType)) { return format({ format: "uint" }, web3Context.defaultTransactionType, ETH_DATA_FORMAT); }

  return undefined;
};