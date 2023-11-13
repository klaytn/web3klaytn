import org.openapitools.codegen.CodegenParameter

object KlaytnCodegenUtils {
  // Returns true if a default value is attached via param.defaultValue or vendorExtensions("x-default-*")
  @JvmStatic fun attachDefaultValue(param: CodegenParameter): Boolean {
    if (param.required) {
      return true // Skip if a default value is unnecessary.
    }
    if (param.defaultValue != null && !param.defaultValue.isEmpty()) {
      return true // Skip if a default value exists.
    }

    // Suggest a default value heuristically from the parameter name.
    // Search for optional parameter names using:
    //   cd rpc-specs/namespaces; grep -R -B5 'required: false' * | grep "name: "
    //
    // We're not setting `param.defaultValue` because defaultValue is String type
    // and sometimes the default values are non-strings such as `false` and `{}`.
    // Instead, we're passing the x-default-* vendorExtension to the mustache templates.
    val name = param.paramName
    var defaultSet = false

    // block number parameters
    // example APIs: klay_getCommittee, klay_createAccessList, governance_getRewardsAccumulated
    // example param names: blockNumberOrTag, blockParameter, firstBlock, lastBlock, endBlockNum
    if (name.contains("OrTag") || name.contains("blockParam") || name.contains("Block")) {
      param.vendorExtensions.put("x-default-latest", true)
      defaultSet = true
    }

    // Javascript objects
    // example APIs: debug_traceBlock, debug_traceTransaction, debug_traceCall, eth_call
    // example param names: options, stateOverrideSet
    if (name == "options" || name == "stateOverrideSet") {
      param.vendorExtensions.put("x-default-emptyobj", true)
      defaultSet = true
    }

    return defaultSet
  }
}
