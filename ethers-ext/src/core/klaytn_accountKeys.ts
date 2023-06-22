import { AccountKey } from "./accountKey";
import { FieldTypeUint8, FieldTypeCompressedPubKey, FieldTypeWeightedMultiSigKeys, FieldTypeRoleBasedKeys } from "./field";
import { HexStr, RLP } from "./util";


// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeynil
export const AccountKeyNil = "0x80";

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeylegacy
export class AccountKeyLegacy extends AccountKey {
  static type = 0x01;
  static typeName = "AccountKeyLegacy";
  static fieldTypes = {
    'type': FieldTypeUint8,
  }

  toRLP(): string {
    return "0x01c0";
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeypublic
export class AccountKeyPublic extends AccountKey {
  static type = 0x02;
  static typeName = "AccountKeyPublic";
  static fieldTypes = {
    'type': FieldTypeUint8,
    'key':  FieldTypeCompressedPubKey,
  };

  // 0x02 + encode(CompressedPubKey)
  toRLP(): string {
    const inner = this.getField("key");
    return HexStr.concat("0x02", RLP.encode(inner));
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyfail
export class AccountKeyFail extends AccountKey {
  static type = 0x03;
  static typeName = "AccountKeyFail";
  static fieldTypes = {
    'type': FieldTypeUint8,
  }

  toRLP(): string {
    return "0x03c0";
  }
}

// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
export class AccountKeyWeightedMultiSig extends AccountKey {
  static type = 0x04;
  static typeName = "AccountKeyWeightedMultiSig"; 
  static fieldTypes = {
    'type': FieldTypeUint8,
    'keys': FieldTypeWeightedMultiSigKeys,
  };

  // 0x04 + encode([threshold, [[weight, CompressedPubKey1], [weight2, CompressedPubKey2]]])
  toRLP(): string {
    const inner = this.getField("keys");
    return HexStr.concat("0x04", RLP.encode(inner));
  }
}


// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased
export class AccountKeyRoleBased extends AccountKey {
  static type = 0x05;
  static typeName = "AccountKeyRoleBased";
  static fieldTypes = {
    'type': FieldTypeUint8,
    'keys': FieldTypeRoleBasedKeys,
  };

  // 0x05 + encode([key1, key2, key3])
  toRLP(): string {
    const inner = this.getField("keys");
    return HexStr.concat("0x05", RLP.encode(inner));
  }
}