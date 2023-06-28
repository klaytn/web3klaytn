from web3.module import (
    Module
)
from web3.method import (
    Method,
    default_root_munger,
)
from typing import (
    Callable,
    Any,
)

class KlayApi(Module):
    namespace = "klay"
    
    _account_created: Method[Callable[..., Any]] = Method(
        namespace + "_accountCreated", mungers=[default_root_munger]
    )

    def account_created(self, *args) -> Any:
        return self._account_created(*args)
    
    _accounts: Method[Callable[..., Any]] = Method(
        namespace + "_accounts", mungers=[default_root_munger]
    )

    def accounts(self, *args) -> Any:
        return self._accounts(*args)
    
    _block_number: Method[Callable[..., Any]] = Method(
        namespace + "_blockNumber", mungers=[default_root_munger]
    )

    def block_number(self, *args) -> Any:
        return self._block_number(*args)
    
    _call: Method[Callable[..., Any]] = Method(
        namespace + "_call", mungers=[default_root_munger]
    )

    def call(self, *args) -> Any:
        return self._call(*args)
    
    _chain_id: Method[Callable[..., Any]] = Method(
        namespace + "_chainId", mungers=[default_root_munger]
    )

    def chain_id(self, *args) -> Any:
        return self._chain_id(*args)
    
    _client_version: Method[Callable[..., Any]] = Method(
        namespace + "_clientVersion", mungers=[default_root_munger]
    )

    def client_version(self, *args) -> Any:
        return self._client_version(*args)
    
    _create_access_list: Method[Callable[..., Any]] = Method(
        namespace + "_createAccessList", mungers=[default_root_munger]
    )

    def create_access_list(self, *args) -> Any:
        return self._create_access_list(*args)
    
    _decode_account_key: Method[Callable[..., Any]] = Method(
        namespace + "_decodeAccountKey", mungers=[default_root_munger]
    )

    def decode_account_key(self, *args) -> Any:
        return self._decode_account_key(*args)
    
    _encode_account_key: Method[Callable[..., Any]] = Method(
        namespace + "_encodeAccountKey", mungers=[default_root_munger]
    )

    def encode_account_key(self, *args) -> Any:
        return self._encode_account_key(*args)
    
    _estimate_computation_cost: Method[Callable[..., Any]] = Method(
        namespace + "_estimateComputationCost", mungers=[default_root_munger]
    )

    def estimate_computation_cost(self, *args) -> Any:
        return self._estimate_computation_cost(*args)
    
    _estimate_gas: Method[Callable[..., Any]] = Method(
        namespace + "_estimateGas", mungers=[default_root_munger]
    )

    def estimate_gas(self, *args) -> Any:
        return self._estimate_gas(*args)
    
    _fee_history: Method[Callable[..., Any]] = Method(
        namespace + "_feeHistory", mungers=[default_root_munger]
    )

    def fee_history(self, *args) -> Any:
        return self._fee_history(*args)
    
    _gas_price: Method[Callable[..., Any]] = Method(
        namespace + "_gasPrice", mungers=[default_root_munger]
    )

    def gas_price(self, *args) -> Any:
        return self._gas_price(*args)
    
    _gas_price_at: Method[Callable[..., Any]] = Method(
        namespace + "_gasPriceAt", mungers=[default_root_munger]
    )

    def gas_price_at(self, *args) -> Any:
        return self._gas_price_at(*args)
    
    _get_account: Method[Callable[..., Any]] = Method(
        namespace + "_getAccount", mungers=[default_root_munger]
    )

    def get_account(self, *args) -> Any:
        return self._get_account(*args)
    
    _get_account_key: Method[Callable[..., Any]] = Method(
        namespace + "_getAccountKey", mungers=[default_root_munger]
    )

    def get_account_key(self, *args) -> Any:
        return self._get_account_key(*args)
    
    _get_balance: Method[Callable[..., Any]] = Method(
        namespace + "_getBalance", mungers=[default_root_munger]
    )

    def get_balance(self, *args) -> Any:
        return self._get_balance(*args)
    
    _get_block_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockByHash", mungers=[default_root_munger]
    )

    def get_block_by_hash(self, *args) -> Any:
        return self._get_block_by_hash(*args)
    
    _get_block_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockByNumber", mungers=[default_root_munger]
    )

    def get_block_by_number(self, *args) -> Any:
        return self._get_block_by_number(*args)
    
    _get_block_receipts: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockReceipts", mungers=[default_root_munger]
    )

    def get_block_receipts(self, *args) -> Any:
        return self._get_block_receipts(*args)
    
    _get_block_transaction_count_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockTransactionCountByHash", mungers=[default_root_munger]
    )

    def get_block_transaction_count_by_hash(self, *args) -> Any:
        return self._get_block_transaction_count_by_hash(*args)
    
    _get_block_transaction_count_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockTransactionCountByNumber", mungers=[default_root_munger]
    )

    def get_block_transaction_count_by_number(self, *args) -> Any:
        return self._get_block_transaction_count_by_number(*args)
    
    _get_block_with_consensus_info_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockWithConsensusInfoByHash", mungers=[default_root_munger]
    )

    def get_block_with_consensus_info_by_hash(self, *args) -> Any:
        return self._get_block_with_consensus_info_by_hash(*args)
    
    _get_block_with_consensus_info_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockWithConsensusInfoByNumber", mungers=[default_root_munger]
    )

    def get_block_with_consensus_info_by_number(self, *args) -> Any:
        return self._get_block_with_consensus_info_by_number(*args)
    
    _get_block_with_consensus_info_by_number_range: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockWithConsensusInfoByNumberRange", mungers=[default_root_munger]
    )

    def get_block_with_consensus_info_by_number_range(self, *args) -> Any:
        return self._get_block_with_consensus_info_by_number_range(*args)
    
    _get_chain_config: Method[Callable[..., Any]] = Method(
        namespace + "_getChainConfig", mungers=[default_root_munger]
    )

    def get_chain_config(self, *args) -> Any:
        return self._get_chain_config(*args)
    
    _get_code: Method[Callable[..., Any]] = Method(
        namespace + "_getCode", mungers=[default_root_munger]
    )

    def get_code(self, *args) -> Any:
        return self._get_code(*args)
    
    _get_committee: Method[Callable[..., Any]] = Method(
        namespace + "_getCommittee", mungers=[default_root_munger]
    )

    def get_committee(self, *args) -> Any:
        return self._get_committee(*args)
    
    _get_committee_size: Method[Callable[..., Any]] = Method(
        namespace + "_getCommitteeSize", mungers=[default_root_munger]
    )

    def get_committee_size(self, *args) -> Any:
        return self._get_committee_size(*args)
    
    _get_council: Method[Callable[..., Any]] = Method(
        namespace + "_getCouncil", mungers=[default_root_munger]
    )

    def get_council(self, *args) -> Any:
        return self._get_council(*args)
    
    _get_council_size: Method[Callable[..., Any]] = Method(
        namespace + "_getCouncilSize", mungers=[default_root_munger]
    )

    def get_council_size(self, *args) -> Any:
        return self._get_council_size(*args)
    
    _get_decoded_anchoring_transaction_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getDecodedAnchoringTransactionByHash", mungers=[default_root_munger]
    )

    def get_decoded_anchoring_transaction_by_hash(self, *args) -> Any:
        return self._get_decoded_anchoring_transaction_by_hash(*args)
    
    _get_filter_changes: Method[Callable[..., Any]] = Method(
        namespace + "_getFilterChanges", mungers=[default_root_munger]
    )

    def get_filter_changes(self, *args) -> Any:
        return self._get_filter_changes(*args)
    
    _get_filter_logs: Method[Callable[..., Any]] = Method(
        namespace + "_getFilterLogs", mungers=[default_root_munger]
    )

    def get_filter_logs(self, *args) -> Any:
        return self._get_filter_logs(*args)
    
    _get_header_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getHeaderByHash", mungers=[default_root_munger]
    )

    def get_header_by_hash(self, *args) -> Any:
        return self._get_header_by_hash(*args)
    
    _get_header_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getHeaderByNumber", mungers=[default_root_munger]
    )

    def get_header_by_number(self, *args) -> Any:
        return self._get_header_by_number(*args)
    
    _get_logs: Method[Callable[..., Any]] = Method(
        namespace + "_getLogs", mungers=[default_root_munger]
    )

    def get_logs(self, *args) -> Any:
        return self._get_logs(*args)
    
    _get_raw_transaction_by_block_hash_and_index: Method[Callable[..., Any]] = Method(
        namespace + "_getRawTransactionByBlockHashAndIndex", mungers=[default_root_munger]
    )

    def get_raw_transaction_by_block_hash_and_index(self, *args) -> Any:
        return self._get_raw_transaction_by_block_hash_and_index(*args)
    
    _get_raw_transaction_by_block_number_and_index: Method[Callable[..., Any]] = Method(
        namespace + "_getRawTransactionByBlockNumberAndIndex", mungers=[default_root_munger]
    )

    def get_raw_transaction_by_block_number_and_index(self, *args) -> Any:
        return self._get_raw_transaction_by_block_number_and_index(*args)
    
    _get_raw_transaction_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getRawTransactionByHash", mungers=[default_root_munger]
    )

    def get_raw_transaction_by_hash(self, *args) -> Any:
        return self._get_raw_transaction_by_hash(*args)
    
    _get_rewards: Method[Callable[..., Any]] = Method(
        namespace + "_getRewards", mungers=[default_root_munger]
    )

    def get_rewards(self, *args) -> Any:
        return self._get_rewards(*args)
    
    _get_staking_info: Method[Callable[..., Any]] = Method(
        namespace + "_getStakingInfo", mungers=[default_root_munger]
    )

    def get_staking_info(self, *args) -> Any:
        return self._get_staking_info(*args)
    
    _get_storage_at: Method[Callable[..., Any]] = Method(
        namespace + "_getStorageAt", mungers=[default_root_munger]
    )

    def get_storage_at(self, *args) -> Any:
        return self._get_storage_at(*args)
    
    _get_transaction_by_block_hash_and_index: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionByBlockHashAndIndex", mungers=[default_root_munger]
    )

    def get_transaction_by_block_hash_and_index(self, *args) -> Any:
        return self._get_transaction_by_block_hash_and_index(*args)
    
    _get_transaction_by_block_number_and_index: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionByBlockNumberAndIndex", mungers=[default_root_munger]
    )

    def get_transaction_by_block_number_and_index(self, *args) -> Any:
        return self._get_transaction_by_block_number_and_index(*args)
    
    _get_transaction_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionByHash", mungers=[default_root_munger]
    )

    def get_transaction_by_hash(self, *args) -> Any:
        return self._get_transaction_by_hash(*args)
    
    _get_transaction_by_sender_tx_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionBySenderTxHash", mungers=[default_root_munger]
    )

    def get_transaction_by_sender_tx_hash(self, *args) -> Any:
        return self._get_transaction_by_sender_tx_hash(*args)
    
    _get_transaction_count: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionCount", mungers=[default_root_munger]
    )

    def get_transaction_count(self, *args) -> Any:
        return self._get_transaction_count(*args)
    
    _get_transaction_receipt: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionReceipt", mungers=[default_root_munger]
    )

    def get_transaction_receipt(self, *args) -> Any:
        return self._get_transaction_receipt(*args)
    
    _get_transaction_receipt_by_sender_tx_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getTransactionReceiptBySenderTxHash", mungers=[default_root_munger]
    )

    def get_transaction_receipt_by_sender_tx_hash(self, *args) -> Any:
        return self._get_transaction_receipt_by_sender_tx_hash(*args)
    
    _is_contract_account: Method[Callable[..., Any]] = Method(
        namespace + "_isContractAccount", mungers=[default_root_munger]
    )

    def is_contract_account(self, *args) -> Any:
        return self._is_contract_account(*args)
    
    _is_parallel_db_write: Method[Callable[..., Any]] = Method(
        namespace + "_isParallelDbWrite", mungers=[default_root_munger]
    )

    def is_parallel_db_write(self, *args) -> Any:
        return self._is_parallel_db_write(*args)
    
    _is_sender_tx_hash_indexing_enabled: Method[Callable[..., Any]] = Method(
        namespace + "_isSenderTxHashIndexingEnabled", mungers=[default_root_munger]
    )

    def is_sender_tx_hash_indexing_enabled(self, *args) -> Any:
        return self._is_sender_tx_hash_indexing_enabled(*args)
    
    _lower_bound_gas_price: Method[Callable[..., Any]] = Method(
        namespace + "_lowerBoundGasPrice", mungers=[default_root_munger]
    )

    def lower_bound_gas_price(self, *args) -> Any:
        return self._lower_bound_gas_price(*args)
    
    _max_priority_fee_per_gas: Method[Callable[..., Any]] = Method(
        namespace + "_maxPriorityFeePerGas", mungers=[default_root_munger]
    )

    def max_priority_fee_per_gas(self, *args) -> Any:
        return self._max_priority_fee_per_gas(*args)
    
    _new_block_filter: Method[Callable[..., Any]] = Method(
        namespace + "_newBlockFilter", mungers=[default_root_munger]
    )

    def new_block_filter(self, *args) -> Any:
        return self._new_block_filter(*args)
    
    _new_filter: Method[Callable[..., Any]] = Method(
        namespace + "_newFilter", mungers=[default_root_munger]
    )

    def new_filter(self, *args) -> Any:
        return self._new_filter(*args)
    
    _new_pending_transaction_filter: Method[Callable[..., Any]] = Method(
        namespace + "_newPendingTransactionFilter", mungers=[default_root_munger]
    )

    def new_pending_transaction_filter(self, *args) -> Any:
        return self._new_pending_transaction_filter(*args)
    
    _node_address: Method[Callable[..., Any]] = Method(
        namespace + "_nodeAddress", mungers=[default_root_munger]
    )

    def node_address(self, *args) -> Any:
        return self._node_address(*args)
    
    _pending_transactions: Method[Callable[..., Any]] = Method(
        namespace + "_pendingTransactions", mungers=[default_root_munger]
    )

    def pending_transactions(self, *args) -> Any:
        return self._pending_transactions(*args)
    
    _protocol_version: Method[Callable[..., Any]] = Method(
        namespace + "_protocolVersion", mungers=[default_root_munger]
    )

    def protocol_version(self, *args) -> Any:
        return self._protocol_version(*args)
    
    _resend: Method[Callable[..., Any]] = Method(
        namespace + "_resend", mungers=[default_root_munger]
    )

    def resend(self, *args) -> Any:
        return self._resend(*args)
    
    _rewardbase: Method[Callable[..., Any]] = Method(
        namespace + "_rewardbase", mungers=[default_root_munger]
    )

    def rewardbase(self, *args) -> Any:
        return self._rewardbase(*args)
    
    _send_raw_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_sendRawTransaction", mungers=[default_root_munger]
    )

    def send_raw_transaction(self, *args) -> Any:
        return self._send_raw_transaction(*args)
    
    _send_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_sendTransaction", mungers=[default_root_munger]
    )

    def send_transaction(self, *args) -> Any:
        return self._send_transaction(*args)
    
    _send_transaction_as_fee_payer: Method[Callable[..., Any]] = Method(
        namespace + "_sendTransactionAsFeePayer", mungers=[default_root_munger]
    )

    def send_transaction_as_fee_payer(self, *args) -> Any:
        return self._send_transaction_as_fee_payer(*args)
    
    _sha3: Method[Callable[..., Any]] = Method(
        namespace + "_sha3", mungers=[default_root_munger]
    )

    def sha3(self, *args) -> Any:
        return self._sha3(*args)
    
    _sign: Method[Callable[..., Any]] = Method(
        namespace + "_sign", mungers=[default_root_munger]
    )

    def sign(self, *args) -> Any:
        return self._sign(*args)
    
    _sign_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_signTransaction", mungers=[default_root_munger]
    )

    def sign_transaction(self, *args) -> Any:
        return self._sign_transaction(*args)
    
    _sign_transaction_as_fee_payer: Method[Callable[..., Any]] = Method(
        namespace + "_signTransactionAsFeePayer", mungers=[default_root_munger]
    )

    def sign_transaction_as_fee_payer(self, *args) -> Any:
        return self._sign_transaction_as_fee_payer(*args)
    
    _subscribe: Method[Callable[..., Any]] = Method(
        namespace + "_subscribe", mungers=[default_root_munger]
    )

    def subscribe(self, *args) -> Any:
        return self._subscribe(*args)
    
    _syncing: Method[Callable[..., Any]] = Method(
        namespace + "_syncing", mungers=[default_root_munger]
    )

    def syncing(self, *args) -> Any:
        return self._syncing(*args)
    
    _uninstall_filter: Method[Callable[..., Any]] = Method(
        namespace + "_uninstallFilter", mungers=[default_root_munger]
    )

    def uninstall_filter(self, *args) -> Any:
        return self._uninstall_filter(*args)
    
    _unsubscribe: Method[Callable[..., Any]] = Method(
        namespace + "_unsubscribe", mungers=[default_root_munger]
    )

    def unsubscribe(self, *args) -> Any:
        return self._unsubscribe(*args)
    
    _upper_bound_gas_price: Method[Callable[..., Any]] = Method(
        namespace + "_upperBoundGasPrice", mungers=[default_root_munger]
    )

    def upper_bound_gas_price(self, *args) -> Any:
        return self._upper_bound_gas_price(*args)
