import { HexStr, RLP } from "../util";

import { FieldType, FieldTypeBytesFixedLen } from "./common";

// WeightedMultiSigKeys is canonicalized like follow.
// e.g.
// [
//   "03",   // threshold
//   [
//     // [ weight, key ] list for multi-sig
//     [
//       "01",
//       "02c734b50ddb229be5e929fc4aa8080ae8240a802d23d3290e5e6156ce029b110e"
//     ],
//     [
//       "01",
//       "0212d45f1cc56fbd6cd8fc877ab63b5092ac77db907a8a42c41dad3e98d7c64dfb"
//     ],
//     [
//       "01",
//       "02ea9a9f85065a00d7b9ffd3a8532a574035984587fd08107d8f4cbad6b786b0cd"
//     ],
//     [
//       "01",
//       "038551bc489d62fa2e6f767ba87fe93a62b679fca8ff3114eb5805e6487b51e8f6"
//     ]
//   ]
// ]
export const FieldTypeWeightedMultiSigKeys = new class implements FieldType {
  canonicalize(value: [ number, [[number, string]] ]): any[] {
    const ret = [], keys = [];

    if (value.length != 2 && value[1].length < 2) {
      throw new Error("Threshold and Keys format is wrong for MultiSig");
    }
    ret.push(HexStr.fromNumber(value[0]));

    for (let i = 0; i < value[1].length; i++) {
      if (value[1][i][0] == undefined || value[1][i][1] == undefined) {
        throw new Error("Weight and Key format is wrong for MultiSig");
      }
      const key = [];
      key.push(HexStr.fromNumber(value[1][i][0]));
      key.push(value[1][i][1]);
      keys.push(key);
    }

    ret.push(keys);
    return ret;
  }

  emptyValue(): string { return "0x"; }
};

// RoleBasedKeys is canonicalized like follow.
// e.g.
// [
//   // RoleTransaction
//   "02a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d",
//
//   // RoleAccountUpdate
//   [
//     "02",
//     [
//       [
//         "01",
//         "03e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d"
//       ],
//       [
//         "01",
//         "0336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06"
//       ]
//     ]
//   ],
//
//   // RoleFeePayer
//   "02a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447"
// ]
//    ->
// [
//   "02a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d",
//   "04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06",
//   "02a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447"
// ]
export const FieldTypeRoleBasedKeys = new class implements FieldType {
  canonicalize(value: [ any, any, any ]): string[] {
    if (value.length != 3) {
      throw new Error("RoleBasedKey format is wrong");
    }

    const ret = [];
    for (let i = 0; i < value.length; i++) {
      if (typeof value[i] === "string") {
        // AccountKeyNil '0x80', AccountKeyPublic '0x02', AccountKeyWeightedMultiSig '0x04'
        if (!(value[i] == "0x80" || value[i].startsWith("0x02") || value[i].startsWith("0x04"))) {
          throw new Error(`'${value[i]}' is wrong string format for role-based key`);
        }
        ret.push(value[i]);
      } else if (Array.isArray(value[i])) {
        ret.push(HexStr.concat("0x04", RLP.encode(FieldTypeWeightedMultiSigKeys.canonicalize(value[i]))));
      } else if (typeof value[i] === "object") {
        if (value[i].type == undefined || HexStr.fromNumber(value[i].type) != "0x02"
                || value[i].key == undefined || String(value[i].key).length != 68) {
          throw new Error(`'${value[i]}' is wrong object format for role-based key`);
        }
        ret.push(HexStr.concat("0x02", RLP.encode(value[i].key)));
      } else {
        throw new Error(`'${value[i]}' is wrong format for role-based key`);
      }
    }
    return ret;
  }

  emptyValue(): string { return "0x"; }
};

export const FieldTypeCompressedPubKey = new FieldTypeBytesFixedLen(33);

