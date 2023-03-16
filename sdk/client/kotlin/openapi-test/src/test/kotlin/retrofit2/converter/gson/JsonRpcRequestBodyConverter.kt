package retrofit2.converter.gson

import caver.sdk.infrastructure.RequestBodyParams
import caver.sdk.models.JsonRpcRequest
import com.google.gson.Gson
import com.google.gson.TypeAdapter
import okhttp3.MediaType.Companion.toMediaType
import retrofit2.Converter
import okio.Buffer
import java.io.OutputStreamWriter
import java.nio.charset.Charset
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import java.util.concurrent.atomic.AtomicLong

class JsonRpcRequestBodyConverter(
    private val gson: Gson,
    private val adapter: TypeAdapter<JsonRpcRequest>,
): Converter<RequestBodyParams, RequestBody> {
    private val UTF_8 = Charset.forName("UTF-8")
    private val MEDIA_TYPE = "application/json; charset=UTF-8".toMediaType()
    private val atomicId = AtomicLong()

    private fun getId(): Long {
        val id = atomicId.getAndIncrement()
        return if(id == Long.MAX_VALUE) {
            atomicId.set(1)
            atomicId.getAndIncrement()
        } else {
            id
        }
    }
    override fun convert(value: RequestBodyParams): RequestBody {

        var params : MutableList<Any> = mutableListOf()
        if(value.params != null) {
            for (param in value.params!!) {
                if(param != null) {
                    params.add(param)
                }
            }
        }
        val body = JsonRpcRequest(method = value.method, id = getId(), params = params)

        val buffer = Buffer()
        val writer = OutputStreamWriter(buffer.outputStream(), UTF_8)
        val jsonWriter = gson.newJsonWriter(writer)
        adapter.write(jsonWriter, body)
        jsonWriter.close()
        return buffer.readByteString().toRequestBody(MEDIA_TYPE)
    }
}
