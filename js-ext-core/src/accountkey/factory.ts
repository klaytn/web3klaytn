import { FieldSet, FieldSetFactory, Fields } from "../field";
import { AccountKeyType } from "../util";

// A typed AccountKey for Klatyn is a FieldSet.
// https://docs.klaytn.foundation/content/klaytn/design/accounts
export abstract class AccountKey extends FieldSet {
  // RLP encoding for constructing AccountUpdate transactions.
  abstract toRLP(): string;
}

class _AccountKeyFactory extends FieldSetFactory<AccountKey> {
  constructor() {
    const requiredFields = ["type"];
    super(requiredFields);
  }

  public fromObject(fields: Fields): AccountKey {
    // In AccountKeyWeightedMultiSig, alias weightedPublicKeys -> keys for compatibility.
    // 'weightedPublicKeys' is used in caver and klaytn node.
    // 'keys' is used in this SDK.
    if (fields.type == AccountKeyType.WeightedMultiSig && fields.weightedPublicKeys) {
      fields.keys = fields.weightedPublicKeys;
    }
    return super.fromObject(fields);
  }
}
export const AccountKeyFactory = new _AccountKeyFactory();

export interface ParsedAccountKeyNil { type: AccountKeyType.Nil; }
export interface ParsedAccountKeyLegacy { type: AccountKeyType.Legacy; }
export interface ParsedAccountKeyPublic { type: AccountKeyType.Public; key: string; }
export interface ParsedAccountKeyFail { type: AccountKeyType.Fail; }
export interface ParsedAccountKeyWeightedMultiSig {
  type: AccountKeyType.WeightedMultiSig;
  threshold: number;
  keys: { weight: number, key: string }[];
}
export type ParsedAccountKeyEmbeddable =
  | ParsedAccountKeyNil
  | ParsedAccountKeyLegacy
  | ParsedAccountKeyPublic
  | ParsedAccountKeyFail
  | ParsedAccountKeyWeightedMultiSig;
export interface ParsedAccountKeyRoleBased {
  type: AccountKeyType.RoleBased;
  keys: ParsedAccountKeyEmbeddable[];
}
export type ParsedAccountKey =
  | ParsedAccountKeyEmbeddable
  | ParsedAccountKeyRoleBased;

export function parseAccountKey(rlp: string): ParsedAccountKey {
  return { type: 0 };
}