import copy
from typing import Dict, Any, Union
from web3 import Web3
from cytoolz import (
    dissoc,
)
from eth_utils.curried import is_hexstr

TX_TYPE_LEGACY_TRANSACTION = 0x0
TX_TYPE_VALUE_TRANSFER = 0x08
TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER = 0x09
TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO = 0x0a
TX_TYPE_VALUE_TRANSFER_MEMO = 0x10
TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO = 0x11
TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO = 0x12
TX_TYPE_ACCOUNT_UPDATE = 0x20
TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE = 0x21
TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO = 0x22
TX_TYPE_SMART_CONTRACT_DEPLOY = 0x28
TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY = 0x29
TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO = 0x2a
TX_TYPE_SMART_CONTRACT_EXECUTION = 0x30
TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION = 0x31
TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO = 0x32
TX_TYPE_CANCEL = 0x38
TX_TYPE_FEE_DELEGATED_CANCEL = 0x39
TX_TYPE_FEE_DELEGATED_CANCEL_WITH_RATIO = 0x3a
TX_TYPE_CHAIN_DATA_ANCHORING = 0x48
TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING = 0x49
TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING_WITH_RATIO = 0x4a
TX_TYPE_ETHEREUM_ACCESS_LIST = 0x01
TX_TYPE_ETHEREUM_DYNAMIC_FEE = 0x02

KLAYTN_TYPED_TRANSACTION_GROUP = [
    TX_TYPE_VALUE_TRANSFER,
    TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER,
    TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO,
    TX_TYPE_VALUE_TRANSFER_MEMO,
    TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO,
    TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO,
    TX_TYPE_ACCOUNT_UPDATE,
    TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE,
    TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO,
    TX_TYPE_SMART_CONTRACT_DEPLOY,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO,
    TX_TYPE_SMART_CONTRACT_EXECUTION,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION,
    TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO,
    TX_TYPE_CANCEL,
    TX_TYPE_FEE_DELEGATED_CANCEL,
    TX_TYPE_FEE_DELEGATED_CANCEL_WITH_RATIO,
    TX_TYPE_CHAIN_DATA_ANCHORING,
    TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING,
    TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING_WITH_RATIO
]

TX_TYPE_HEX_TO_STRING ={
    0x00: 'TxTypeLegacyTransaction',
    0x08: 'TxTypeValueTransfer',
    0x09: 'TxTypeFeeDelegatedValueTransfer',
    0x0a: 'TxTypeFeeDelegatedValueTransferWithRatio',
    0x10: 'TxTypeValueTransferMemo',
    0x11: 'TxTypeFeeDelegatedValueTransferMemo',
    0x12: 'TxTypeFeeDelegatedValueTransferMemoWithRatio',
    0x20: 'TxTypeAccountUpdate',
    0x21: 'TxTypeFeeDelegatedAccountUpdate',
    0x22: 'TxTypeFeeDelegatedAccountUpdateWithRatio',
    0x28: 'TxTypeSmartContractDeploy',
    0x29: 'TxTypeFeeDelegatedSmartContractDeploy',
    0x2a: 'TxTypeFeeDelegatedSmartContractDeployWithRatio',
    0x30: 'TxTypeSmartContractExecution',
    0x31: 'TxTypeFeeDelegatedSmartContractExecution',
    0x32: 'TxTypeFeeDelegatedSmartContractExecutionWithRatio',
    0x38: 'TxTypeCancel',
    0x39: 'TxTypeFeeDelegatedCancel',
    0x3a: 'TxTypeFeeDelegatedCancelWithRatio',
    0x48: 'TxTypeChainDataAnchoring',
    0x49: 'TxTypeFeeDelegatedChainDataAnchoring',
    0x4a: 'TxTypeFeeDelegatedChainDataAnchoringWithRatio',
    0x01: 'TxTypeEthereumAccessList',
    0x02: 'TxTypeEthereumDynamicFee',
}

TX_TYPE_STRING_TO_HEX = {
    'TxTypeValueTransfer':'0x08',
    'TxTypeFeeDelegatedValueTransfer':'0x09',
    'TxTypeFeeDelegatedValueTransferWithRatio':'0x0a',
    'TxTypeValueTransferMemo':'0x10',
    'TxTypeFeeDelegatedValueTransferMemo':'0x11',
    'TxTypeFeeDelegatedValueTransferMemoWithRatio':'0x12',
    'TxTypeAccountUpdate':'0x20',
    'TxTypeFeeDelegatedAccountUpdate':'0x21',
    'TxTypeFeeDelegatedAccountUpdateWithRatio':'0x22',
    'TxTypeSmartContractDeploy':'0x28',
    'TxTypeFeeDelegatedSmartContractDeploy':'0x29',
    'TxTypeFeeDelegatedSmartContractDeployWithRatio':'0x2a',
    'TxTypeSmartContractExecution':'0x30',
    'TxTypeFeeDelegatedSmartContractExecution':'0x31',
    'TxTypeFeeDelegatedSmartContractExecutionWithRatio':'0x32',
    'TxTypeCancel':'0x38',
    'TxTypeFeeDelegatedCancel':'0x39',
    'TxTypeFeeDelegatedCancelWithRatio':'0x3a',
    'TxTypeChainDataAnchoring':'0x48',
    'TxTypeFeeDelegatedChainDataAnchoring':'0x49',
    'TxTypeFeeDelegatedChainDataAnchoringWithRatio':'0x4a',
    'TxTypeEthereumAccessList':'0x1',
    'TxTypeEthereumDynamicFee':'0x2',
}

ALLOWED_TRANSACTION_KEYS = {
    "nonce",
    "gasPrice",
    "gas",
    "to",
    "value",
    "data",
    'from',
    # set chainId to None if you want a transaction that can be replayed across networks
    "chainId",
}


def empty_tx(tx_type:Union[int, str]):
    if is_hexstr(tx_type):
        tx_type_int = int(tx_type, 16)
    else:
        tx_type_int = tx_type
    
    base_tx = {
        'from':None,
        'gas':None,
        'gasPrice':None,
        'nonce':None,
        'chainId':None,
    }
    base_tx = copy.deepcopy(base_tx=TX_TYPE_LEGACY_TRANSACTION)
    if tx_type_int == TX_TYPE_LEGACY_TRANSACTION:
        base_tx['value'] = None
    elif tx_type_int == TX_TYPE_VALUE_TRANSFER:
        base_tx['type'] = TX_TYPE_VALUE_TRANSFER
        base_tx['value'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER
        base_tx['value'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_VALUE_TRANSFER_MEMO:
        base_tx['type'] = TX_TYPE_VALUE_TRANSFER_MEMO
        base_tx['value'] = None
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO
        base_tx['value'] = None
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_VALUE_TRANSFER_MEMO_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_ACCOUNT_UPDATE:
        base_tx['type'] = TX_TYPE_ACCOUNT_UPDATE
        base_tx['key'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE
        base_tx['key'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_ACCOUNT_UPDATE_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_SMART_CONTRACT_DEPLOY:
        base_tx['type'] = TX_TYPE_SMART_CONTRACT_DEPLOY
        base_tx['to'] = None
        base_tx['value'] = 0
        base_tx['input'] = None
        base_tx['humanReadable'] = False
        base_tx['codeFormat'] = 0
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY
        base_tx['to'] = None
        base_tx['value'] = 0
        base_tx['input'] = None
        base_tx['humanReadable'] = False
        base_tx['codeFormat'] = 0
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_DEPLOY_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_SMART_CONTRACT_EXECUTION:
        base_tx['type'] = TX_TYPE_SMART_CONTRACT_EXECUTION
        base_tx['to'] = None
        base_tx['value'] = 0
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION
        base_tx['to'] = None
        base_tx['value'] = 0
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_SMART_CONTRACT_EXECUTION_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_CANCEL:
        base_tx['type'] = TX_TYPE_CANCEL
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_CANCEL:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_CANCEL
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_CANCEL_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_CHAIN_DATA_ANCHORING:
        base_tx['type'] = TX_TYPE_CHAIN_DATA_ANCHORING
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING:
        base_tx['type'] = TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING
        base_tx['input'] = None
    elif tx_type_int == TX_TYPE_FEE_DELEGATED_CHAIN_DATA_ANCHORING_WITH_RATIO:
        pass
    elif tx_type_int == TX_TYPE_ETHEREUM_ACCESS_LIST:
        pass
    elif tx_type_int == TX_TYPE_ETHEREUM_DYNAMIC_FEE:
        base_tx['type'] = TX_TYPE_ETHEREUM_DYNAMIC_FEE
        base_tx['value'] = None
        return dissoc(base_tx, 'gasPrice')
    else:
        raise TypeError(
            "typed transaction has unknown type: %s" % tx_type
        )
    return base_tx

def fill_transaction(transaction: Dict[str, Any], w3: Web3) -> Dict[str, Any]:
    if isinstance(transaction, dict):
        # make some fields we should fill as None
        filled_transaction = transaction.copy()
        if "nonce" not in filled_transaction:
            filled_transaction['nonce'] = None
        if "chainId" not in filled_transaction:
            filled_transaction['chainId'] = None
        if "gas" not in filled_transaction:
            filled_transaction['gas'] = None

        if "gasPrice" in filled_transaction and (filled_transaction['gasPrice'] is None or filled_transaction['gasPrice'] == 0):
            filled_transaction['gasPrice'] = w3.eth.gas_price
        elif 'accessList' or 'maxFeePerGas' in filled_transaction or ('type' in filled_transaction and filled_transaction['type'] == TX_TYPE_ETHEREUM_DYNAMIC_FEE):
            filled_transaction['maxFeePerGas'] = w3.eth.gas_price
            filled_transaction['maxPriorityFeePerGas'] = 0
        else:
            # default legacy fee strategy : transaction doesn't have gasPrice field
            filled_transaction['gasPrice'] = w3.eth.gas_price
        
        if "from" in filled_transaction and filled_transaction['nonce'] is None and filled_transaction['from'] is not None:
            filled_transaction['nonce'] = w3.eth.get_transaction_count(filled_transaction['from'])
        if filled_transaction['chainId'] is None:
            # Cypress 8217, Baobab 1001
            filled_transaction['chainId'] = w3.eth.chain_id
        # Because estimate_gas API will fail if some fields are None
        if filled_transaction['gas'] is None or filled_transaction['gas'] < estimated_gas * 2:
            estimated_gas = get_estimate_gas(filled_transaction, w3)
            filled_transaction['gas'] = estimated_gas * 2

    return filled_transaction

def get_estimate_gas(transaction, w3):
    refined_transaction = transaction.copy()
    for key in transaction:
        if transaction[key] == None:
            refined_transaction = dissoc(refined_transaction, key)
    return w3.eth.estimate_gas(refined_transaction)