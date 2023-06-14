package web3rpc.client

import io.swagger.v3.oas.models.Operation
import io.swagger.v3.oas.models.servers.Server
import org.openapitools.codegen.CodegenOperation
import org.openapitools.codegen.languages.KotlinClientCodegen
import org.openapitools.codegen.model.ModelsMap

class KlaytnKotlinClientCodegen : KotlinClientCodegen {
    companion object {
        val clientName = "web3rpc-kotlin"
    }

    constructor() : super() {
    }

    override fun getName(): String {
        return clientName
    }

    override fun getUseInlineModelResolver(): Boolean {
        return true
    }

    override fun fromOperation(
        path: String,
        httpMethod: String,
        operation: Operation,
        servers: List<Server>?
    ): CodegenOperation {
        val op = super.fromOperation(path, httpMethod, operation, servers)
        val removedImports: MutableSet<String> = HashSet()
        for (name in op.imports) {
            if (name.contains("ParameterOneOf")
                || name.contains("OneOfLessThanNumberCommaStringGreaterThan")
                || name.contains(
                    "OneOfLessThanDoubleCommaStringGreaterThan"
                )
            ) {
                removedImports.add(name)
            }
        }
        for (name in removedImports) {
            op.imports.remove(name)
        }
        return op
    }

    override fun postProcessAllModels(objs: Map<String, ModelsMap>): Map<String, ModelsMap> {
        val result = super.postProcessAllModels(objs)
        val removedModel: MutableSet<String> = HashSet()
        for (entry in result.values) {
            for (mo in entry.models) {
                for (name in mo.model.imports) {
                    if (name.endsWith("ParameterOneOf")) {
                        removedModel.add(mo.model.name)
                    }
                }
            }
        }
        for (name in removedModel) {
            result.remove(name)
        }
        return result
    }

}
