// Data type utilities

import { getAddress } from "@ethersproject/address";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import * as bytes from "@ethersproject/bytes";
import { AddressZero } from "@ethersproject/constants";
import * as rlp from "@ethersproject/rlp";

export const RLP = {
  encode: rlp.encode,
  decode: rlp.decode,
};

export const HexStr = {
  toNumber(value: string): number {
    return BigNumber.from(value).toNumber();
  },
  fromNumber(value: BigNumberish): string {
    return BigNumber.from(value).toHexString();
  },
  from(value: any): string {
    return bytes.hexlify(value);
  },
  concat(...items: string[]): string {
    return bytes.hexlify(bytes.concat(items));
  },
  isHex(value: any, length?: number): boolean {
    return bytes.isHexString(value, length);
  },
  stripZeros(value: any): string {
    return bytes.hexlify(bytes.stripZeros(value));
  },
  zeroPad(value: string, length: number): string {
    return bytes.hexZeroPad(value, length);
  },
  withHexPrefix(value: string): string {
    return value.replace(/^(0x)?/, "0x");
  },
  stripHexPrefix(value: string): string {
    return value.replace(/^(0x)?/, "");
  },
  toAddress(value?: string | null): string {
    if (!value || value == "0x") {
      return AddressZero;
    } else {
      return getAddress(value);
    }
  },
  toBoolean(value: string): boolean {
    if (value == "0x") {
      return false;
    } else if (value == "0x01") {
      return true;
    } else {
      throw new Error(`Invalid RLP boolean: '${value}'`);
    }
  },
};

export function getTypePrefix(rlp: string) {
  if (!HexStr.isHex(rlp)) {
    throw new Error("Not an RLP encoded string");
  }

  if (rlp.length < 4) {
    throw new Error("RLP encoded string too short");
  }

  return HexStr.toNumber(rlp.substring(0, 4)); // 0xNN
}
