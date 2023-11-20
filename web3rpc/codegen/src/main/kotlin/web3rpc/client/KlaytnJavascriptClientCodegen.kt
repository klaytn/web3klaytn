package web3rpc.client

import io.swagger.v3.oas.models.Operation
import io.swagger.v3.oas.models.servers.Server
import org.openapitools.codegen.CodegenOperation
import org.openapitools.codegen.languages.JavascriptClientCodegen
import org.openapitools.codegen.model.ModelsMap

class KlaytnJavascriptClientCodegen : JavascriptClientCodegen {
    companion object {
        val clientName = "web3rpc-javascript"
    }

    constructor() : super() {
    }

    override fun getName(): String {
        return clientName
    }

    override fun getUseInlineModelResolver(): Boolean {
        return true
    }

    // See https://github.com/swagger-api/swagger-codegen/blob/master/modules/swagger-codegen/src/main/java/io/swagger/codegen/CodegenParameter.java
    // and https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/main/java/org/openapitools/codegen/languages/JavascriptClientCodegen.java
    override fun fromOperation(
        path: String,
        httpMethod: String,
        operation: Operation,
        servers: List<Server>?
    ): CodegenOperation {
        val op = super.fromOperation(path, httpMethod, operation, servers)
        val removedImports: MutableSet<String> = HashSet()
        for (name in op.imports) {
            if (name.contains("OneOfdoublestring") || name.contains("OneOfnumberstring")) {
                removedImports.add(name)
            }
        }
        for (name in removedImports) {
            op.imports.remove(name)
        }
        for (queryParam in op.queryParams) {
            if (!KlaytnCodegenUtils.attachDefaultValue(queryParam)) {
                println("No default for param ${queryParam.paramName} of ${operation.operationId}")
                // Use it for strict checks
                // throw Exception("No default for param ${queryParam.paramName} of ${operation.operationId}")
            }
        }
        return op
    }

    override fun postProcessAllModels(objs: Map<String, ModelsMap>): Map<String, ModelsMap> {
        val result = super.postProcessAllModels(objs)
        val removedModel: MutableSet<String> = HashSet()
        for (entry in result.values) {
            for (mo in entry.models) {
                for (name in mo.model.imports) {
//                    if (name.endsWith("ParameterOneOf")) {
//                        removedModel.add(mo.model.name)
//                    }
                }
            }
        }
        for (name in removedModel) {
            result.remove(name)
        }
        return result
    }

}
