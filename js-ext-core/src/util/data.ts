// Data type utilities

import { getAddress } from "@ethersproject/address";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import * as bytes from "@ethersproject/bytes";
import * as rlp from "@ethersproject/rlp";
import { computeAddress } from "@ethersproject/transactions";

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
  addressEquals(a: string, b: string): boolean {
    return getAddress(a) == getAddress(b);
  },
  privateKeyEquals(a: string, b: string): boolean {
    return computeAddress(a) == computeAddress(b);
  },
  stripZeros(value: any): string {
    return bytes.hexlify(bytes.stripZeros(value));
  },
  zeroPad(value: string, length: number): string {
    return bytes.hexZeroPad(value, length);
  }
};
