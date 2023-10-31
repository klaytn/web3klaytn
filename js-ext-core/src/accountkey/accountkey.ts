import { FieldTypeAccountKeyList, FieldTypeCompressedPubKey, FieldTypeUint32, FieldTypeUint8, FieldTypeWeightedPublicKeys } from "../field";
import { AccountKeyType, HexStr, RLP } from "../util";

import { AccountKey } from "./factory";

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeynil
export class AccountKeyNil extends AccountKey {
  static type = AccountKeyType.Nil;
  static typeName = "AccountKeyNil";
  static fieldTypes = {
    "type": FieldTypeUint8,
  };

  toRLP(): string {
    return "0x80";
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
export class AccountKeyLegacy extends AccountKey {
  static type = AccountKeyType.Legacy;
  static typeName = "AccountKeyLegacy";
  static fieldTypes = {
    "type": FieldTypeUint8,
  };

  toRLP(): string {
    return "0x01c0";
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
export class AccountKeyPublic extends AccountKey {
  static type = AccountKeyType.Public;
  static typeName = "AccountKeyPublic";
  static fieldTypes = {
    "type": FieldTypeUint8,
    "key":  FieldTypeCompressedPubKey,
  };

  // 0x02 + encode(CompressedPubKey)
  toRLP(): string {
    const inner = this.getField("key");
    return HexStr.concat("0x02", RLP.encode(inner));
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyfail
export class AccountKeyFail extends AccountKey {
  static type = AccountKeyType.Fail;
  static typeName = "AccountKeyFail";
  static fieldTypes = {
    "type": FieldTypeUint8,
  };

  toRLP(): string {
    return "0x03c0";
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
export class AccountKeyWeightedMultiSig extends AccountKey {
  static type = AccountKeyType.WeightedMultiSig;
  static typeName = "AccountKeyWeightedMultiSig";
  static fieldTypes = {
    "type": FieldTypeUint8,
    "threshold": FieldTypeUint32,
    "keys": FieldTypeWeightedPublicKeys,
  };

  // 0x04 + encode([threshold, [[weight1, compressedPubKey1], [weight2, compressedPubKey2]]])
  toRLP(): string {
    const inner = this.getFields(["threshold", "keys"]);
    return HexStr.concat("0x04", RLP.encode(inner));
  }
}


// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased
export class AccountKeyRoleBased extends AccountKey {
  static type = AccountKeyType.RoleBased;
  static typeName = "AccountKeyRoleBased";
  static fieldTypes = {
    "type": FieldTypeUint8,
    "keys": FieldTypeAccountKeyList,
  };

  // 0x05 + encode([key1, key2, key3])
  // = 0x05 + encode(keys)
  toRLP(): string {
    const inner = this.getField("keys");
    return HexStr.concat("0x05", RLP.encode(inner));
  }
}
