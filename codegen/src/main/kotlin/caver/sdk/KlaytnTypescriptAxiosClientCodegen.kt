package caver.sdk

import org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen

class KlaytnTypescriptAxiosClientCodegen : TypeScriptAxiosClientCodegen {
    companion object {
        val caverName = "caver-typescript-axios"
    }

    constructor() : super() {
    }

    override fun getName(): String {
        return caverName
    }
}
