package caver.sdk

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.Operation
import io.swagger.v3.oas.models.media.ComposedSchema
import io.swagger.v3.oas.models.media.Schema
import io.swagger.v3.oas.models.responses.ApiResponse
import io.swagger.v3.oas.models.servers.Server
import org.openapitools.codegen.CodegenModel
import org.openapitools.codegen.CodegenOperation
import org.openapitools.codegen.CodegenProperty
import org.openapitools.codegen.languages.JavaClientCodegen
import org.openapitools.codegen.model.ModelsMap

class KlaytnJavaClientCodegen : JavaClientCodegen {
    companion object {
        val caverName = "caver-java"
    }

    constructor() : super() {
    }

    override fun getName(): String {
        return caverName
    }

    override fun processOpts() {
        super.processOpts()

        supportingFiles.find { it -> it.templateFile.equals("build.gradle.mustache") }

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
            if (name.contains("OneOfdoublestring") || name.contains("OneOfnumberstring")) {
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
                    if (name.equals("Error")) {
                        removedModel.add(name)
                    }
                }
            }
        }
        for (name in removedModel) {
            result.remove(name)
        }
        return result
    }

    override fun preprocessOpenAPI(openAPI: OpenAPI?) {
        val oldKeys = ArrayList<String>()
        var namespace = String()
        if (openAPI?.tags?.size!! > 0) {
            namespace = openAPI.tags?.get(0)?.name!!
        }
        openAPI.components?.schemas?.toList()?.forEach { (t, u) ->
            if (t.contains("_200")) {
                val newKey = t.replace("_200", "").replaceFirst("", namespace.lowercase()+"_")
                oldKeys.add(t)
                openAPI.components?.schemas?.put(newKey, u)
            }
        }
        openAPI.components?.schemas?.keys?.removeAll(oldKeys.toSet())
        super.preprocessOpenAPI(openAPI)
    }

    override fun addImportsForPropertyType(model: CodegenModel?, property: CodegenProperty?) {
        val removedImports: MutableSet<String> = HashSet()
        model?.imports?.forEach {
            if (it?.contains("Error") == true) {
                removedImports.add(it)
            }
        }
        model?.imports?.removeAll(removedImports)
        super.addImportsForPropertyType(model, property)
    }

    override fun addImport(
        composed: ComposedSchema?,
        childSchema: Schema<*>?,
        model: CodegenModel?,
        modelName: String?
    ) {
        if (composed?.allOf != null && childSchema != null && childSchema.discriminator == null) {
            addImport(model, modelName)
        } else {
            println("Skipped import for allOf composition schema {}$modelName")
        }
    }

    override fun handleMethodResponse(
        operation: Operation?,
        schemas: MutableMap<String, Schema<Any>>?,
        op: CodegenOperation?,
        methodResponse: ApiResponse?,
        schemaMappings: MutableMap<String, String>?
    ) {

        var namespace = String()
        if (openAPI?.tags?.size!! > 0) {
            namespace = openAPI.tags?.get(0)?.name!!
        }
        val schema = methodResponse?.content?.values
        schema?.forEach {
            if (it?.schema?.`$ref`?.contains("_200") == true) {
                val newRef = it.schema?.`$ref`?.replace("_200", "")
                it.schema?.`$ref` = newRef?.
                replaceAfterLast("/", namespace.lowercase()+"_"+newRef.substringAfterLast("/"), "")
            }
        }
        super.handleMethodResponse(operation, schemas, op, methodResponse, schemaMappings)
    }

    override fun postProcessModelProperty(model: CodegenModel?, property: CodegenProperty?) {
        var namespace = String()
        if (openAPI?.tags?.size!! > 0) {
            namespace = openAPI.tags?.get(0)?.name!!
        }
        if (property?.ref?.contains("_200") == true) {
            val newRef = property.ref!!.replace("_200", "")
            property.ref = newRef.
            replaceAfterLast("/", namespace.lowercase()+"_"+newRef.substringAfterLast("/"), "")
        }
        if (property?.dataType?.contains("200") == true) {
            val newDataType = property.dataType!!.replace("200", "")
            property.dataType = newDataType.replaceBefore("", namespace.capitalize())
        }
        if (property?.datatypeWithEnum?.contains("200") == true) {
            val newDatatypeWithEnum = property.datatypeWithEnum!!.replace("200", "")
            property.datatypeWithEnum = newDatatypeWithEnum.replaceBefore("", namespace.capitalize())
        }
        model?.imports?.forEach {
            if (it?.contains("200") == true) {
                model.imports?.remove(it)
            }
        }
        super.postProcessModelProperty(model, property)
    }
}
