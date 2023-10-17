import { assert } from "chai";

import { TxType, isBasicTxType, isFeeDelegationTxType, isKlaytnTxType, isPartialFeeDelegationTxType } from "../src";

describe("TxType", () => {
  it("predicates", () => {
    // Eth types are not Klaytn TxType
    assert.isFalse(isKlaytnTxType(0));
    assert.isFalse(isBasicTxType(0));
    assert.isFalse(isFeeDelegationTxType(1));
    assert.isFalse(isPartialFeeDelegationTxType(2));

    let ty = TxType.ValueTransfer;
    assert.isTrue(isBasicTxType(ty));
    assert.isFalse(isFeeDelegationTxType(ty));
    assert.isFalse(isPartialFeeDelegationTxType(ty));

    ty = TxType.FeeDelegatedSmartContractExecution;
    assert.isFalse(isBasicTxType(ty));
    assert.isTrue(isFeeDelegationTxType(ty));
    assert.isFalse(isPartialFeeDelegationTxType(ty));

    ty = TxType.FeeDelegatedCancelWithRatio;
    assert.isFalse(isBasicTxType(ty));
    assert.isFalse(isFeeDelegationTxType(ty));
    assert.isTrue(isPartialFeeDelegationTxType(ty));
  });
});