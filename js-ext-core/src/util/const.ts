// Klaytn Type Enumeration
export enum TxType {
  // Basic
  ValueTransfer = 0x08,
  ValueTransferMemo = 0x10,
  AccountUpdate = 0x20,
  SmartContractDeploy = 0x28,
  SmartContractExecution = 0x30,
  Cancel = 0x38,

  // Fee Delegation
  FeeDelegatedValueTransfer = 0x09,
  FeeDelegatedValueTransferMemo = 0x11,
  FeeDelegatedAccountUpdate = 0x21,
  FeeDelegatedSmartContractDeploy = 0x29,
  FeeDelegatedSmartContractExecution = 0x31,
  FeeDelegatedCancel = 0x39,

  // Partial Fee Delegation
  FeeDelegatedValueTransferWithRatio = 0x0a,
  FeeDelegatedValueTransferMemoWithRatio = 0x12,
  FeeDelegatedAccountUpdateWithRatio = 0x22,
  FeeDelegatedSmartContractDeployWithRatio = 0x2a,
  FeeDelegatedSmartContractExecutionWithRatio = 0x32,
  FeeDelegatedCancelWithRatio = 0x3a,
}

export function isKlaytnTxType(type: number): boolean {
  return (type in TxType);
}
export function isBasicTxType(type: number): boolean {
  return (type in TxType) && ((type & 0x3) == 0x0);
}
export function isFeeDelegationTxType(type: number): boolean {
  return (type in TxType) && ((type & 0x3) == 0x1);
}
export function isPartialFeeDelegationTxType(type: number): boolean {
  return (type in TxType) && ((type & 0x3) == 0x2);
}
export function isFeePayerSigTxType(type: number): boolean {
  return isFeeDelegationTxType(type) || isPartialFeeDelegationTxType(type);
}

export enum AccountKeyType {
  // Account Key Type
  Nil = 0x00,
  Legacy = 0x01,
  Public = 0x02,
  Fail = 0x03,
  WeightedMultiSig = 0x04,
  RoleBased = 0x05
}

export function isKlaytnAccountKeyType(type: number): boolean {
  return (type in AccountKeyType);
}
// Returns true if it can be embedded in an AccountKeyRoleBased
export function isEmbeddableAccountKeyType(type: number): boolean {
  // any of AccountKeyNil, AccountKeyLegacy, AccountKeyPublic, AccountKeyFail, and AccountKeyWeightedMultiSig.
  return (type in AccountKeyType) && (type != AccountKeyType.RoleBased);
}

export const CodeFormatEVM = 0x00;
