package retrofit2.converter.gson

import caver.sdk.infrastructure.RequestBodyParams
import caver.sdk.models.JsonRpcRequest
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import okhttp3.RequestBody
import okhttp3.ResponseBody
import retrofit2.Converter
import retrofit2.Retrofit
import java.lang.reflect.Type

class JsonRpcConverterFactory : Converter.Factory {
    private val gson: Gson

    private constructor(gson: Gson) {
        this.gson = gson
    }

    override fun responseBodyConverter(
        type: Type?, annotations: Array<Annotation?>?, retrofit: Retrofit?
    ): Converter<ResponseBody, *> {
        val adapter = gson.getAdapter(TypeToken.get(type))
        return GsonResponseBodyConverter(gson, adapter)
    }

    override fun requestBodyConverter(
        type: Type?,
        parameterAnnotations: Array<Annotation?>?,
        methodAnnotations: Array<Annotation?>?,
        retrofit: Retrofit?
    ): Converter<*, RequestBody> {
        return if (type != null && type.typeName.equals(RequestBodyParams::class.java.name)) {
            val adapter = gson.getAdapter(TypeToken.get(JsonRpcRequest::class.java))
            JsonRpcRequestBodyConverter(gson, adapter)
        } else {
            val adapter = gson.getAdapter(TypeToken.get(type))
            GsonRequestBodyConverter(gson, adapter)
        }
    }

    companion object {
        fun create(): JsonRpcConverterFactory {
            return JsonRpcConverterFactory(Gson())
        }
    }
}
