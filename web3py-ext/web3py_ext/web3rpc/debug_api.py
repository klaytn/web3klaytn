from web3.module import (
    Module
)
from web3.method import (
    Method,
    default_root_munger,
)
from typing import (
    Callable,
    Awaitable,
    Any,
)
from web3.geth import GethAdmin, GethPersonal, GethTxPool
from web3.net import Net

class DebugApi(Module):
    namespace = "debug"
    
    
    _backtrace_at: Method[Callable[..., Any]] = Method(
        namespace + "_backtraceAt", mungers=[default_root_munger]
    )

    def backtrace_at(self, *args) -> Any:
        return self._backtrace_at(*args)
    
    
    _block_profile: Method[Callable[..., Any]] = Method(
        namespace + "_blockProfile", mungers=[default_root_munger]
    )

    def block_profile(self, *args) -> Any:
        return self._block_profile(*args)
    
    
    _chaindb_compact: Method[Callable[..., Any]] = Method(
        namespace + "_chaindbCompact", mungers=[default_root_munger]
    )

    def chaindb_compact(self, *args) -> Any:
        return self._chaindb_compact(*args)
    
    
    _chaindb_property: Method[Callable[..., Any]] = Method(
        namespace + "_chaindbProperty", mungers=[default_root_munger]
    )

    def chaindb_property(self, *args) -> Any:
        return self._chaindb_property(*args)
    
    
    _cpu_profile: Method[Callable[..., Any]] = Method(
        namespace + "_cpuProfile", mungers=[default_root_munger]
    )

    def cpu_profile(self, *args) -> Any:
        return self._cpu_profile(*args)
    
    
    _dump_block: Method[Callable[..., Any]] = Method(
        namespace + "_dumpBlock", mungers=[default_root_munger]
    )

    def dump_block(self, *args) -> Any:
        return self._dump_block(*args)
    
    
    _dump_state_trie: Method[Callable[..., Any]] = Method(
        namespace + "_dumpStateTrie", mungers=[default_root_munger]
    )

    def dump_state_trie(self, *args) -> Any:
        return self._dump_state_trie(*args)
    
    
    _free_os_memory: Method[Callable[..., Any]] = Method(
        namespace + "_freeOsMemory", mungers=[default_root_munger]
    )

    def free_os_memory(self, *args) -> Any:
        return self._free_os_memory(*args)
    
    
    _gc_stats: Method[Callable[..., Any]] = Method(
        namespace + "_gcStats", mungers=[default_root_munger]
    )

    def gc_stats(self, *args) -> Any:
        return self._gc_stats(*args)
    
    
    _get_bad_blocks: Method[Callable[..., Any]] = Method(
        namespace + "_getBadBlocks", mungers=[default_root_munger]
    )

    def get_bad_blocks(self, *args) -> Any:
        return self._get_bad_blocks(*args)
    
    
    _get_block_rlp: Method[Callable[..., Any]] = Method(
        namespace + "_getBlockRlp", mungers=[default_root_munger]
    )

    def get_block_rlp(self, *args) -> Any:
        return self._get_block_rlp(*args)
    
    
    _get_modified_accounts_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_getModifiedAccountsByHash", mungers=[default_root_munger]
    )

    def get_modified_accounts_by_hash(self, *args) -> Any:
        return self._get_modified_accounts_by_hash(*args)
    
    
    _get_modified_accounts_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getModifiedAccountsByNumber", mungers=[default_root_munger]
    )

    def get_modified_accounts_by_number(self, *args) -> Any:
        return self._get_modified_accounts_by_number(*args)
    
    
    _get_modified_storage_nodes_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_getModifiedStorageNodesByNumber", mungers=[default_root_munger]
    )

    def get_modified_storage_nodes_by_number(self, *args) -> Any:
        return self._get_modified_storage_nodes_by_number(*args)
    
    
    _go_trace: Method[Callable[..., Any]] = Method(
        namespace + "_goTrace", mungers=[default_root_munger]
    )

    def go_trace(self, *args) -> Any:
        return self._go_trace(*args)
    
    
    _is_p_prof_running: Method[Callable[..., Any]] = Method(
        namespace + "_isPProfRunning", mungers=[default_root_munger]
    )

    def is_p_prof_running(self, *args) -> Any:
        return self._is_p_prof_running(*args)
    
    
    _mem_stats: Method[Callable[..., Any]] = Method(
        namespace + "_memStats", mungers=[default_root_munger]
    )

    def mem_stats(self, *args) -> Any:
        return self._mem_stats(*args)
    
    
    _metrics: Method[Callable[..., Any]] = Method(
        namespace + "_metrics", mungers=[default_root_munger]
    )

    def metrics(self, *args) -> Any:
        return self._metrics(*args)
    
    
    _mutex_profile: Method[Callable[..., Any]] = Method(
        namespace + "_mutexProfile", mungers=[default_root_munger]
    )

    def mutex_profile(self, *args) -> Any:
        return self._mutex_profile(*args)
    
    
    _preimage: Method[Callable[..., Any]] = Method(
        namespace + "_preimage", mungers=[default_root_munger]
    )

    def preimage(self, *args) -> Any:
        return self._preimage(*args)
    
    
    _print_block: Method[Callable[..., Any]] = Method(
        namespace + "_printBlock", mungers=[default_root_munger]
    )

    def print_block(self, *args) -> Any:
        return self._print_block(*args)
    
    
    _seed_hash: Method[Callable[..., Any]] = Method(
        namespace + "_seedHash", mungers=[default_root_munger]
    )

    def seed_hash(self, *args) -> Any:
        return self._seed_hash(*args)
    
    
    _set_block_profile_rate: Method[Callable[..., Any]] = Method(
        namespace + "_setBlockProfileRate", mungers=[default_root_munger]
    )

    def set_block_profile_rate(self, *args) -> Any:
        return self._set_block_profile_rate(*args)
    
    
    _set_gc_percent: Method[Callable[..., Any]] = Method(
        namespace + "_setGcPercent", mungers=[default_root_munger]
    )

    def set_gc_percent(self, *args) -> Any:
        return self._set_gc_percent(*args)
    
    
    _set_head: Method[Callable[..., Any]] = Method(
        namespace + "_setHead", mungers=[default_root_munger]
    )

    def set_head(self, *args) -> Any:
        return self._set_head(*args)
    
    
    _set_mutex_profile_fraction: Method[Callable[..., Any]] = Method(
        namespace + "_setMutexProfileFraction", mungers=[default_root_munger]
    )

    def set_mutex_profile_fraction(self, *args) -> Any:
        return self._set_mutex_profile_fraction(*args)
    
    
    _set_vm_log_target: Method[Callable[..., Any]] = Method(
        namespace + "_setVmLogTarget", mungers=[default_root_munger]
    )

    def set_vm_log_target(self, *args) -> Any:
        return self._set_vm_log_target(*args)
    
    
    _stacks: Method[Callable[..., Any]] = Method(
        namespace + "_stacks", mungers=[default_root_munger]
    )

    def stacks(self, *args) -> Any:
        return self._stacks(*args)
    
    
    _standard_trace_bad_block_to_file: Method[Callable[..., Any]] = Method(
        namespace + "_standardTraceBadBlockToFile", mungers=[default_root_munger]
    )

    def standard_trace_bad_block_to_file(self, *args) -> Any:
        return self._standard_trace_bad_block_to_file(*args)
    
    
    _standard_trace_block_to_file: Method[Callable[..., Any]] = Method(
        namespace + "_standardTraceBlockToFile", mungers=[default_root_munger]
    )

    def standard_trace_block_to_file(self, *args) -> Any:
        return self._standard_trace_block_to_file(*args)
    
    
    _start_collecting_trie_stats: Method[Callable[..., Any]] = Method(
        namespace + "_startCollectingTrieStats", mungers=[default_root_munger]
    )

    def start_collecting_trie_stats(self, *args) -> Any:
        return self._start_collecting_trie_stats(*args)
    
    
    _start_contract_warm_up: Method[Callable[..., Any]] = Method(
        namespace + "_startContractWarmUp", mungers=[default_root_munger]
    )

    def start_contract_warm_up(self, *args) -> Any:
        return self._start_contract_warm_up(*args)
    
    
    _start_cpu_profile: Method[Callable[..., Any]] = Method(
        namespace + "_startCpuProfile", mungers=[default_root_munger]
    )

    def start_cpu_profile(self, *args) -> Any:
        return self._start_cpu_profile(*args)
    
    
    _start_go_trace: Method[Callable[..., Any]] = Method(
        namespace + "_startGoTrace", mungers=[default_root_munger]
    )

    def start_go_trace(self, *args) -> Any:
        return self._start_go_trace(*args)
    
    
    _start_p_prof: Method[Callable[..., Any]] = Method(
        namespace + "_startPProf", mungers=[default_root_munger]
    )

    def start_p_prof(self, *args) -> Any:
        return self._start_p_prof(*args)
    
    
    _start_warm_up: Method[Callable[..., Any]] = Method(
        namespace + "_startWarmUp", mungers=[default_root_munger]
    )

    def start_warm_up(self, *args) -> Any:
        return self._start_warm_up(*args)
    
    
    _stop_cpu_profile: Method[Callable[..., Any]] = Method(
        namespace + "_stopCpuProfile", mungers=[default_root_munger]
    )

    def stop_cpu_profile(self, *args) -> Any:
        return self._stop_cpu_profile(*args)
    
    
    _stop_go_trace: Method[Callable[..., Any]] = Method(
        namespace + "_stopGoTrace", mungers=[default_root_munger]
    )

    def stop_go_trace(self, *args) -> Any:
        return self._stop_go_trace(*args)
    
    
    _stop_p_prof: Method[Callable[..., Any]] = Method(
        namespace + "_stopPProf", mungers=[default_root_munger]
    )

    def stop_p_prof(self, *args) -> Any:
        return self._stop_p_prof(*args)
    
    
    _stop_warm_up: Method[Callable[..., Any]] = Method(
        namespace + "_stopWarmUp", mungers=[default_root_munger]
    )

    def stop_warm_up(self, *args) -> Any:
        return self._stop_warm_up(*args)
    
    
    _storage_range_at: Method[Callable[..., Any]] = Method(
        namespace + "_storageRangeAt", mungers=[default_root_munger]
    )

    def storage_range_at(self, *args) -> Any:
        return self._storage_range_at(*args)
    
    
    _trace_bad_block: Method[Callable[..., Any]] = Method(
        namespace + "_traceBadBlock", mungers=[default_root_munger]
    )

    def trace_bad_block(self, *args) -> Any:
        return self._trace_bad_block(*args)
    
    
    _trace_block: Method[Callable[..., Any]] = Method(
        namespace + "_traceBlock", mungers=[default_root_munger]
    )

    def trace_block(self, *args) -> Any:
        return self._trace_block(*args)
    
    
    _trace_block_by_hash: Method[Callable[..., Any]] = Method(
        namespace + "_traceBlockByHash", mungers=[default_root_munger]
    )

    def trace_block_by_hash(self, *args) -> Any:
        return self._trace_block_by_hash(*args)
    
    
    _trace_block_by_number: Method[Callable[..., Any]] = Method(
        namespace + "_traceBlockByNumber", mungers=[default_root_munger]
    )

    def trace_block_by_number(self, *args) -> Any:
        return self._trace_block_by_number(*args)
    
    
    _trace_block_by_number_range: Method[Callable[..., Any]] = Method(
        namespace + "_traceBlockByNumberRange", mungers=[default_root_munger]
    )

    def trace_block_by_number_range(self, *args) -> Any:
        return self._trace_block_by_number_range(*args)
    
    
    _trace_block_from_file: Method[Callable[..., Any]] = Method(
        namespace + "_traceBlockFromFile", mungers=[default_root_munger]
    )

    def trace_block_from_file(self, *args) -> Any:
        return self._trace_block_from_file(*args)
    
    
    _trace_call: Method[Callable[..., Any]] = Method(
        namespace + "_traceCall", mungers=[default_root_munger]
    )

    def trace_call(self, *args) -> Any:
        return self._trace_call(*args)
    
    
    _trace_chain: Method[Callable[..., Any]] = Method(
        namespace + "_traceChain", mungers=[default_root_munger]
    )

    def trace_chain(self, *args) -> Any:
        return self._trace_chain(*args)
    
    
    _trace_transaction: Method[Callable[..., Any]] = Method(
        namespace + "_traceTransaction", mungers=[default_root_munger]
    )

    def trace_transaction(self, *args) -> Any:
        return self._trace_transaction(*args)
    
    
    _verbosity: Method[Callable[..., Any]] = Method(
        namespace + "_verbosity", mungers=[default_root_munger]
    )

    def verbosity(self, *args) -> Any:
        return self._verbosity(*args)
    
    
    _verbosity_by_id: Method[Callable[..., Any]] = Method(
        namespace + "_verbosityById", mungers=[default_root_munger]
    )

    def verbosity_by_id(self, *args) -> Any:
        return self._verbosity_by_id(*args)
    
    
    _verbosity_by_name: Method[Callable[..., Any]] = Method(
        namespace + "_verbosityByName", mungers=[default_root_munger]
    )

    def verbosity_by_name(self, *args) -> Any:
        return self._verbosity_by_name(*args)
    
    
    _vmodule: Method[Callable[..., Any]] = Method(
        namespace + "_vmodule", mungers=[default_root_munger]
    )

    def vmodule(self, *args) -> Any:
        return self._vmodule(*args)
    
    
    _write_block_profile: Method[Callable[..., Any]] = Method(
        namespace + "_writeBlockProfile", mungers=[default_root_munger]
    )

    def write_block_profile(self, *args) -> Any:
        return self._write_block_profile(*args)
    
    
    _write_mem_profile: Method[Callable[..., Any]] = Method(
        namespace + "_writeMemProfile", mungers=[default_root_munger]
    )

    def write_mem_profile(self, *args) -> Any:
        return self._write_mem_profile(*args)
    
    
    _write_mutex_profile: Method[Callable[..., Any]] = Method(
        namespace + "_writeMutexProfile", mungers=[default_root_munger]
    )

    def write_mutex_profile(self, *args) -> Any:
        return self._write_mutex_profile(*args)
    

class AsyncDebugApi(Module):
    is_async = True
    namespace = "debug"
    
    
    _backtrace_at: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_backtraceAt", mungers=[default_root_munger]
    )

    async def backtrace_at(self, *args) -> Any:
        return await self._backtrace_at(*args)
    
    
    _block_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_blockProfile", mungers=[default_root_munger]
    )

    async def block_profile(self, *args) -> Any:
        return await self._block_profile(*args)
    
    
    _chaindb_compact: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_chaindbCompact", mungers=[default_root_munger]
    )

    async def chaindb_compact(self, *args) -> Any:
        return await self._chaindb_compact(*args)
    
    
    _chaindb_property: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_chaindbProperty", mungers=[default_root_munger]
    )

    async def chaindb_property(self, *args) -> Any:
        return await self._chaindb_property(*args)
    
    
    _cpu_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_cpuProfile", mungers=[default_root_munger]
    )

    async def cpu_profile(self, *args) -> Any:
        return await self._cpu_profile(*args)
    
    
    _dump_block: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_dumpBlock", mungers=[default_root_munger]
    )

    async def dump_block(self, *args) -> Any:
        return await self._dump_block(*args)
    
    
    _dump_state_trie: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_dumpStateTrie", mungers=[default_root_munger]
    )

    async def dump_state_trie(self, *args) -> Any:
        return await self._dump_state_trie(*args)
    
    
    _free_os_memory: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_freeOsMemory", mungers=[default_root_munger]
    )

    async def free_os_memory(self, *args) -> Any:
        return await self._free_os_memory(*args)
    
    
    _gc_stats: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_gcStats", mungers=[default_root_munger]
    )

    async def gc_stats(self, *args) -> Any:
        return await self._gc_stats(*args)
    
    
    _get_bad_blocks: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getBadBlocks", mungers=[default_root_munger]
    )

    async def get_bad_blocks(self, *args) -> Any:
        return await self._get_bad_blocks(*args)
    
    
    _get_block_rlp: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getBlockRlp", mungers=[default_root_munger]
    )

    async def get_block_rlp(self, *args) -> Any:
        return await self._get_block_rlp(*args)
    
    
    _get_modified_accounts_by_hash: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getModifiedAccountsByHash", mungers=[default_root_munger]
    )

    async def get_modified_accounts_by_hash(self, *args) -> Any:
        return await self._get_modified_accounts_by_hash(*args)
    
    
    _get_modified_accounts_by_number: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getModifiedAccountsByNumber", mungers=[default_root_munger]
    )

    async def get_modified_accounts_by_number(self, *args) -> Any:
        return await self._get_modified_accounts_by_number(*args)
    
    
    _get_modified_storage_nodes_by_number: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_getModifiedStorageNodesByNumber", mungers=[default_root_munger]
    )

    async def get_modified_storage_nodes_by_number(self, *args) -> Any:
        return await self._get_modified_storage_nodes_by_number(*args)
    
    
    _go_trace: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_goTrace", mungers=[default_root_munger]
    )

    async def go_trace(self, *args) -> Any:
        return await self._go_trace(*args)
    
    
    _is_p_prof_running: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_isPProfRunning", mungers=[default_root_munger]
    )

    async def is_p_prof_running(self, *args) -> Any:
        return await self._is_p_prof_running(*args)
    
    
    _mem_stats: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_memStats", mungers=[default_root_munger]
    )

    async def mem_stats(self, *args) -> Any:
        return await self._mem_stats(*args)
    
    
    _metrics: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_metrics", mungers=[default_root_munger]
    )

    async def metrics(self, *args) -> Any:
        return await self._metrics(*args)
    
    
    _mutex_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_mutexProfile", mungers=[default_root_munger]
    )

    async def mutex_profile(self, *args) -> Any:
        return await self._mutex_profile(*args)
    
    
    _preimage: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_preimage", mungers=[default_root_munger]
    )

    async def preimage(self, *args) -> Any:
        return await self._preimage(*args)
    
    
    _print_block: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_printBlock", mungers=[default_root_munger]
    )

    async def print_block(self, *args) -> Any:
        return await self._print_block(*args)
    
    
    _seed_hash: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_seedHash", mungers=[default_root_munger]
    )

    async def seed_hash(self, *args) -> Any:
        return await self._seed_hash(*args)
    
    
    _set_block_profile_rate: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_setBlockProfileRate", mungers=[default_root_munger]
    )

    async def set_block_profile_rate(self, *args) -> Any:
        return await self._set_block_profile_rate(*args)
    
    
    _set_gc_percent: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_setGcPercent", mungers=[default_root_munger]
    )

    async def set_gc_percent(self, *args) -> Any:
        return await self._set_gc_percent(*args)
    
    
    _set_head: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_setHead", mungers=[default_root_munger]
    )

    async def set_head(self, *args) -> Any:
        return await self._set_head(*args)
    
    
    _set_mutex_profile_fraction: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_setMutexProfileFraction", mungers=[default_root_munger]
    )

    async def set_mutex_profile_fraction(self, *args) -> Any:
        return await self._set_mutex_profile_fraction(*args)
    
    
    _set_vm_log_target: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_setVmLogTarget", mungers=[default_root_munger]
    )

    async def set_vm_log_target(self, *args) -> Any:
        return await self._set_vm_log_target(*args)
    
    
    _stacks: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_stacks", mungers=[default_root_munger]
    )

    async def stacks(self, *args) -> Any:
        return await self._stacks(*args)
    
    
    _standard_trace_bad_block_to_file: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_standardTraceBadBlockToFile", mungers=[default_root_munger]
    )

    async def standard_trace_bad_block_to_file(self, *args) -> Any:
        return await self._standard_trace_bad_block_to_file(*args)
    
    
    _standard_trace_block_to_file: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_standardTraceBlockToFile", mungers=[default_root_munger]
    )

    async def standard_trace_block_to_file(self, *args) -> Any:
        return await self._standard_trace_block_to_file(*args)
    
    
    _start_collecting_trie_stats: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startCollectingTrieStats", mungers=[default_root_munger]
    )

    async def start_collecting_trie_stats(self, *args) -> Any:
        return await self._start_collecting_trie_stats(*args)
    
    
    _start_contract_warm_up: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startContractWarmUp", mungers=[default_root_munger]
    )

    async def start_contract_warm_up(self, *args) -> Any:
        return await self._start_contract_warm_up(*args)
    
    
    _start_cpu_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startCpuProfile", mungers=[default_root_munger]
    )

    async def start_cpu_profile(self, *args) -> Any:
        return await self._start_cpu_profile(*args)
    
    
    _start_go_trace: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startGoTrace", mungers=[default_root_munger]
    )

    async def start_go_trace(self, *args) -> Any:
        return await self._start_go_trace(*args)
    
    
    _start_p_prof: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startPProf", mungers=[default_root_munger]
    )

    async def start_p_prof(self, *args) -> Any:
        return await self._start_p_prof(*args)
    
    
    _start_warm_up: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_startWarmUp", mungers=[default_root_munger]
    )

    async def start_warm_up(self, *args) -> Any:
        return await self._start_warm_up(*args)
    
    
    _stop_cpu_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_stopCpuProfile", mungers=[default_root_munger]
    )

    async def stop_cpu_profile(self, *args) -> Any:
        return await self._stop_cpu_profile(*args)
    
    
    _stop_go_trace: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_stopGoTrace", mungers=[default_root_munger]
    )

    async def stop_go_trace(self, *args) -> Any:
        return await self._stop_go_trace(*args)
    
    
    _stop_p_prof: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_stopPProf", mungers=[default_root_munger]
    )

    async def stop_p_prof(self, *args) -> Any:
        return await self._stop_p_prof(*args)
    
    
    _stop_warm_up: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_stopWarmUp", mungers=[default_root_munger]
    )

    async def stop_warm_up(self, *args) -> Any:
        return await self._stop_warm_up(*args)
    
    
    _storage_range_at: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_storageRangeAt", mungers=[default_root_munger]
    )

    async def storage_range_at(self, *args) -> Any:
        return await self._storage_range_at(*args)
    
    
    _trace_bad_block: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBadBlock", mungers=[default_root_munger]
    )

    async def trace_bad_block(self, *args) -> Any:
        return await self._trace_bad_block(*args)
    
    
    _trace_block: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBlock", mungers=[default_root_munger]
    )

    async def trace_block(self, *args) -> Any:
        return await self._trace_block(*args)
    
    
    _trace_block_by_hash: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBlockByHash", mungers=[default_root_munger]
    )

    async def trace_block_by_hash(self, *args) -> Any:
        return await self._trace_block_by_hash(*args)
    
    
    _trace_block_by_number: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBlockByNumber", mungers=[default_root_munger]
    )

    async def trace_block_by_number(self, *args) -> Any:
        return await self._trace_block_by_number(*args)
    
    
    _trace_block_by_number_range: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBlockByNumberRange", mungers=[default_root_munger]
    )

    async def trace_block_by_number_range(self, *args) -> Any:
        return await self._trace_block_by_number_range(*args)
    
    
    _trace_block_from_file: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceBlockFromFile", mungers=[default_root_munger]
    )

    async def trace_block_from_file(self, *args) -> Any:
        return await self._trace_block_from_file(*args)
    
    
    _trace_call: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceCall", mungers=[default_root_munger]
    )

    async def trace_call(self, *args) -> Any:
        return await self._trace_call(*args)
    
    
    _trace_chain: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceChain", mungers=[default_root_munger]
    )

    async def trace_chain(self, *args) -> Any:
        return await self._trace_chain(*args)
    
    
    _trace_transaction: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_traceTransaction", mungers=[default_root_munger]
    )

    async def trace_transaction(self, *args) -> Any:
        return await self._trace_transaction(*args)
    
    
    _verbosity: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_verbosity", mungers=[default_root_munger]
    )

    async def verbosity(self, *args) -> Any:
        return await self._verbosity(*args)
    
    
    _verbosity_by_id: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_verbosityById", mungers=[default_root_munger]
    )

    async def verbosity_by_id(self, *args) -> Any:
        return await self._verbosity_by_id(*args)
    
    
    _verbosity_by_name: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_verbosityByName", mungers=[default_root_munger]
    )

    async def verbosity_by_name(self, *args) -> Any:
        return await self._verbosity_by_name(*args)
    
    
    _vmodule: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_vmodule", mungers=[default_root_munger]
    )

    async def vmodule(self, *args) -> Any:
        return await self._vmodule(*args)
    
    
    _write_block_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_writeBlockProfile", mungers=[default_root_munger]
    )

    async def write_block_profile(self, *args) -> Any:
        return await self._write_block_profile(*args)
    
    
    _write_mem_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_writeMemProfile", mungers=[default_root_munger]
    )

    async def write_mem_profile(self, *args) -> Any:
        return await self._write_mem_profile(*args)
    
    
    _write_mutex_profile: Method[Callable[..., Awaitable[Any]]] = Method(
        namespace + "_writeMutexProfile", mungers=[default_root_munger]
    )

    async def write_mutex_profile(self, *args) -> Any:
        return await self._write_mutex_profile(*args)
    
