package retrofit2.converter.gson

import com.google.gson.Gson
import com.google.gson.TypeAdapter
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import okio.Buffer
import opensdk.sdk.models.JsonRpcRequest
import retrofit2.Converter
import java.io.OutputStreamWriter
import java.nio.charset.Charset
import java.util.concurrent.atomic.AtomicLong

class JsonRpcRequestBodyConverter(
    private val gson: Gson,
    private val adapter: TypeAdapter<JsonRpcRequest>,
) : Converter<RequestBodyParams, RequestBody> {
    private val utf8 = Charset.forName("UTF-8")
    private val mediaType = "application/json; charset=UTF-8".toMediaType()
    private val atomicId = AtomicLong()

    private fun getId(): Long {
        val id = atomicId.getAndIncrement()
        return if (id == Long.MAX_VALUE) {
            atomicId.set(1)
            atomicId.getAndIncrement()
        } else {
            id
        }
    }

    override fun convert(value: RequestBodyParams): RequestBody {

        val params: MutableList<Any> = mutableListOf()
        if (value.params != null) {
            for (param in value.params!!) {
                if (param != null) {
                    params.add(param)
                }
            }
        }
        val body = JsonRpcRequest()
        body.method = value.method
        body.id = getId()
        body.params = params

        val buffer = Buffer()
        val writer = OutputStreamWriter(buffer.outputStream(), utf8)
        val jsonWriter = gson.newJsonWriter(writer)
        adapter.write(jsonWriter, body)
        jsonWriter.close()
        return buffer.readByteString().toRequestBody(mediaType)
    }
}
