import { FieldType, FieldSet, FieldSetFactory } from "./field";

export abstract class AccountKey extends FieldSet {
  // //////////////////////////////////////////////////////////
  // Child classes MUST override below properties and methods

  // RLP encoding to be used in AccountUpdate transactions.
  abstract toRLP(): string;

  // End override
  // //////////////////////////////////////////////////////////
}

const requiredFields = ["type"];
export const AccountKeyFactory = new FieldSetFactory<AccountKey>(
  requiredFields,
);


// Accepted types: TypedAccountKey, string, plain object, serialized bytes
export const FieldTypeAccountKey = new class implements FieldType {
  canonicalize(value: AccountKey | string | any): string {
    if (value instanceof AccountKey) {
      return value.toRLP();
    } else if (typeof(value) == "string") {
      return value;
    } else {
      return AccountKeyFactory.fromObject(value).toRLP();
    }
  }

  emptyValue(): string { return ""; }
};