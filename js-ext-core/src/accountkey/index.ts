export * from "./factory";
export * from "./accountkey";

import {
  AccountKeyNil,
  AccountKeyLegacy,
  AccountKeyPublic,
  AccountKeyFail,
  AccountKeyWeightedMultiSig,
  AccountKeyRoleBased,
} from "./accountkey";
import { AccountKeyFactory } from "./factory";
AccountKeyFactory.add(AccountKeyNil);
AccountKeyFactory.add(AccountKeyLegacy);
AccountKeyFactory.add(AccountKeyPublic);
AccountKeyFactory.add(AccountKeyFail);
AccountKeyFactory.add(AccountKeyWeightedMultiSig);
AccountKeyFactory.add(AccountKeyRoleBased);