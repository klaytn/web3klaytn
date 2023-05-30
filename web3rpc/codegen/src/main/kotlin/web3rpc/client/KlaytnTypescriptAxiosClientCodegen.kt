package web3rpc.client

import org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen

class KlaytnTypescriptAxiosClientCodegen : TypeScriptAxiosClientCodegen {
    companion object {
        val clientName = "web3rpc-typescript-axios"
    }

    constructor() : super() {
    }

    override fun getName(): String {
        return clientName
    }
}
