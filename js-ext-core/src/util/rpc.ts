import { BigNumber } from "@ethersproject/bignumber";
import { hexValue, hexlify } from "@ethersproject/bytes";
import { accessListify } from "@ethersproject/transactions";
import _ from "lodash";

const numericFields = ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"];
const bytestrFields = ["from", "to", "data", "input"];

// Normalize Tx object to suitable for JSON-RPCs such as eth_call and eth_estimateGas.
export function getRpcTxObject(tx: any): any {
  const formatted: any = {};

  _.each(numericFields, (key) => {
    if (!_.has(tx, key)) { return; }

    const value = hexValue(BigNumber.from(tx[key]));
    if (key == "gasLimit") {
      formatted["gas"] = value;
    } else {
      formatted[key] = value;
    }
  });

  _.each(bytestrFields, (key) => {
    if (!_.has(tx, key)) { return; }

    const value = hexlify(tx[key]);
    formatted[key] = value;
  });

  if (tx.accessList) {
    formatted["accessList"] = accessListify(tx.accessList);
  }

  return formatted;
}