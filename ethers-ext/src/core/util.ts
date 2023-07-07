import _ from "lodash";
import * as rlp from "@ethersproject/rlp";
import * as bytes from "@ethersproject/bytes";
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { FixedNumber, ethers } from "ethers";
import { computeAddress } from "ethers/lib/utils";

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
  isSameAddress( a:string, b:string ): boolean {
    let A = ethers.utils.getAddress(a);
    let B = ethers.utils.getAddress(b);
    return A == B; 
  },
  isSamePrivKey( a:string, b:string ): boolean {
    let A = computeAddress(a);
    let B = computeAddress(b);
    return this.isSameAddress(A, B); 
  },
  stripZeros(value: any): string {
    return bytes.hexlify(bytes.stripZeros(value));
  },
  zeroPad(value:string, length:number): string {
    return ethers.utils.hexZeroPad( value, length);
  }
};

// Klaytn Type Enumeration
export enum Klaytn {
  // Basic
  TxTypeValueTransfer = 0x08,
  TxTypeValueTransferMemo = 0x10, 
  TxTypeAccountUpdate = 0x20, 
  TxTypeSmartContractDeploy = 0x28, 
  TxTypeSmartContractExecution = 0x30, 
  TxTypeCancel = 0x38, 

  // Fee Delegation
  TxTypeFeeDelegatedValueTransfer = 0x09,
  TxTypeFeeDelegatedValueTransferMemo = 0x11, 
  TxTypeFeeDelegatedAccountUpdate = 0x21, 
  TxTypeFeeDelegatedSmartContractDeploy = 0x29, 
  TxTypeFeeDelegatedSmartContractExecution = 0x31, 
  TxTypeFeeDelegatedCancel = 0x39,

  // Partial Fee Delegation 
  TxTypeFeeDelegatedValueTransferWithRatio = 0x0a,
  TxTypeFeeDelegatedValueTransferMemoWithRatio = 0x12,
  TxTypeFeeDelegatedAccountUpdateWithRatio = 0x22, 
  TxTypeFeeDelegatedSmartContractDeployWithRatio = 0x2a,
  TxTypeFeeDelegatedSmartContractExecutionWithRatio = 0x32,
  TxTypeFeeDelegatedCancelWithRatio = 0x3a,

  // Account Key Type
  AccountKeyLegacy = 0x01,
  AccountKeyPublic = 0x02,
  AccountKeyFail = 0x03, 
  AccountKeyWeightedMultiSig = 0x04, 
  AccountKeyRoleBased = 0x05
};


// For Klay unit
// https://docs.klaytn.foundation/content/klaytn/design/klaytn-native-coin-klay
// https://docs.ethers.org/v5/api/utils/display-logic/#display-logic--units
// https://github.com/ethers-io/ethers.js/blob/main/src.ts/utils/units.ts 
const names = [
  "peb",
  "kpeb",
  "Mpeb",
  "Gpeb",
  "ston",
  "uKLAY",
  "mKLAY",
  "KLAY",
  "kKLAY",
  "MKLAY",
  "GKLAY",
  "TKLAY"
];

const KlayUnit = [
  { unit: 'peb', pebFactor: 0 },
  { unit: 'kpeb', pebFactor: 3 },
  { unit: 'Mpeb', pebFactor: 6 },
  { unit: 'Gpeb', pebFactor: 9 },
  { unit: 'ston', pebFactor: 9 },
  { unit: 'uKLAY', pebFactor: 12 },
  { unit: 'mKLAY', pebFactor: 15 },
  { unit: 'KLAY', pebFactor: 18 },
  { unit: 'kKLAY', pebFactor: 21 },
  { unit: 'MKLAY', pebFactor: 24 },
  { unit: 'GKLAY', pebFactor: 27 },
  { unit: 'TKLAY', pebFactor: 30 },
];

function getFactor(unit: string): number {
  for ( let i=0; i < KlayUnit.length ; i++ ) {
    if ( KlayUnit[i].unit === unit) {
      return KlayUnit[i].pebFactor;
    }
  }
  assertArgument(false, "invalid unit", "unit", unit);
  return 0;
}

type Numeric = number | bigint;

/**
*  Converts %%value%% into a //decimal string//, assuming %%unit%% decimal
*  places. The %%unit%% may be the number of decimal places or the name of
*  a unit (e.g. ``"gpeb"`` for 9 decimal places).
*
*/
export function formatKlaytnUnits(value: BigNumberish, unit?: string | Numeric): string {
  let decimals = 18;
  if (typeof(unit) === "string") {
      const index = names.indexOf(unit);
      assertArgument(index >= 0, "invalid unit", "unit", unit);
      decimals = getFactor(unit);
  } else if (unit != null) {
      decimals = getNumber(unit, "unit");
  }

  // @ts-ignore
  return FixedNumber.fromValue( BigNumber.from(value), decimals, { decimals, width: 512 }).toString();
}

/**
*  Converts the //decimal string// %%value%% to a BigInt, assuming
*  %%unit%% decimal places. The %%unit%% may the number of decimal places
*  or the name of a unit (e.g. ``"gpeb"`` for 9 decimal places).
*/
export function parseKlaytnUnits(value: string, unit?: string | Numeric): bigint {
  assertArgument(typeof(value) === "string", "value must be a string", "value", value);

  let decimals = 18;
  if (typeof(unit) === "string") {
      const index = names.indexOf(unit);
      assertArgument(index >= 0, "invalid unit", "unit", unit);
      decimals = getFactor( unit );
  } else if (unit != null) {
      decimals = getNumber(unit, "unit");
  }

  // @ts-ignore
  return FixedNumber.fromString(value, { decimals, width: 512 }).value;
}

/**
*  Converts %%value%% into a //decimal string// using 18 decimal places.
*/
export function formatKLAY(peb: BigNumberish): string {
  return formatKlaytnUnits(peb, 18);
}

/**
*  Converts the //decimal string// %%ether%% to a BigInt, using 18
*  decimal places.
*/
export function parseKLAY(klay: string): bigint {
  return parseKlaytnUnits(klay, 18);
}

function assertArgument( check: boolean, message: string, code: string, info: any) {
  if ( check == false )
    throw new Error( "message: " + message + ", code: " + code + ", info: " + info );
}

// IEEE 754 support 53-bits of mantissa
const maxValue = 0x1fffffffffffff;

/**
 *  Gets a //number// from %%value%%. If it is an invalid value for
 *  a //number//, then an ArgumentError will be thrown for %%name%%.
 */
export function getNumber(value: BigNumberish, name?: string): any {
  switch (typeof(value)) {
      case "bigint":
          assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
          return Number(value);
      case "number":
          assertArgument(Number.isInteger(value), "underflow", name || "value", value);
          assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
          return value;
      case "string":
          try {
              if (value === "") { throw new Error("empty string"); }
              return getNumber(BigInt(value), name);
          } catch(e: any) {
              assertArgument(false, `invalid numeric string: ${ e.message }`, name || "value", value);
          }
  }
  assertArgument(false, "invalid numeric value", name || "value", value);
}

