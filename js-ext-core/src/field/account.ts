import _ from "lodash";

import { AccountKeyFactory } from "../accountkey";
import { HexStr, RLP, getCompressedPublicKey, isEmbeddableAccountKeyType } from "../util";

import { FieldType } from "./common";


// Accepted types: A compressed (33-bytes) or uncompressed (65-bytes) public key
//                 in hex string or byte array
// Canonical type: A compressed (33-byte) public key in hex string
export const FieldTypeCompressedPubKey = new class implements FieldType {
  canonicalize(value: any): string {
    return getCompressedPublicKey(value);
  }

  emptyValue(): string { return "0x000000000000000000000000000000000000000000000000000000000000000000"; }
};

export type WeightedPublicKey = [string, string];

// Accepted types: An array of tuples [weight: number|string, publicKey: string]
// Canonical type: An array of hexlified tuples [weight: string, publicKey: string]
// Example canonical value:
// [
//   ["0x01", "0x02c734b50ddb229be5e929fc4aa8080ae8240a802d23d3290e5e6156ce029b110e"],
//   ["0x02", "0x0212d45f1cc56fbd6cd8fc877ab63b5092ac77db907a8a42c41dad3e98d7c64dfb"],
// ]
export const FieldTypeWeightedPublicKeys = new class implements FieldType {
  _assert(value: any, pred: boolean) {
    if (!pred) {
      throw new Error(`Malformed WeightedPublicKeys '${value}'`);
    }
  }

  canonicalize(value: any): WeightedPublicKey[] {
    this._assert(value, _.isArray(value));

    return _.map(value, (tuple: any) => {
      this._assert(value, _.isArray(tuple) && tuple.length == 2);

      const threshold = HexStr.fromNumber(tuple[0]);
      const publicKey = getCompressedPublicKey(tuple[1]);
      return [threshold, publicKey];
    });
  }

  emptyValue(): WeightedPublicKey[] { return []; }
};

// Accepted types: An array of AccountKeys in JS object format
// Canonical type: An array of AccountKeys in RLP format
// Example canonical value:
// [
//   "0x02a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d",
//   "0x04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06",
//   "0x02a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447",
// ]
export const FieldTypeAccountKeyList = new class implements FieldType {
  _assert(value: any, pred: boolean) {
    if (!pred) {
      throw new Error(`Malformed RoleBasedKeys '${value}'`);
    }
  }

  canonicalize(value: any): string[] {
    this._assert(value, _.isArray(value));

    return _.map(value, (elem: any) => {
      const accountKey = AccountKeyFactory.fromObject(elem);

      if (!isEmbeddableAccountKeyType(accountKey.type)) {
        throw new Error(`AccountKeyType ${accountKey.type} cannot be inside an AccountKeyRoleBased`);
      }
      return accountKey.toRLP();
    });
  }

  emptyValue(): string[] { return []; }
};