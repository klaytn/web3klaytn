import _ from "lodash";
import * as rlp from "@ethersproject/rlp";
import * as bytes from "@ethersproject/bytes";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";

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
  isSameHex( a:string, b:string ): boolean {
    if ( this.isHex(a) && this.isHex(b) ) {
      let A = String(a).toLocaleUpperCase();
      let B = String(b).toLocaleUpperCase();
      return A.localeCompare( B.toString() ) == 0; 
    } else {
      return false; 
    }
  },
  stripZeros(value: any): string {
    return bytes.hexlify(bytes.stripZeros(value));
  },
  zeroPad(value:string, length:number): string {
    let ret = value; 
    let n=value.length;
    let i=0 ; 
    
    while ( n + i < length ) {
      ret = '0' + ret; 
      i++; 
    }
    
    return ret;
  }
};
