package opensdk.sdk.apis

import CommonConstant
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.shouldNotBe
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import opensdk.sdk.models.EthBlockNumberRequest
import retrofit2.Retrofit
import retrofit2.converter.gson.JsonRpcConverterFactory

class EthBlockApiBlockNumberTest : BehaviorSpec({

    val logging = HttpLoggingInterceptor()

    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder()
        .addInterceptor(logging)
        .build()

    //Given
    Given("In local Klaytn network") {

        val retrofit = Retrofit.Builder()
            .baseUrl(CommonConstant.baseUrl)
            .addConverterFactory(JsonRpcConverterFactory.create())
            .client(httpClient)
            .build()

        When("Call EthBlockApi.ethBlockNumber") {
            val ethBlockApi = retrofit.create(EthBlockApi::class.java)
            val request = EthBlockNumberRequest()
            request.method = "eth_blockNumber"
            request.id = 83
            request.jsonrpc = "2.0"
            request.params = emptyList()
            println(request)

            Then("return block number eth") {
                val blockNumber = ethBlockApi.ethBlockNumber(request).result();
                blockNumber!!.result.shouldNotBe(null)
            }
        }

        When("Call EthBlockApiService.ethBlockNumber") {
            val apiService = EthBlockApiService(retrofit)
            Then("Get block number eth") {
                val blockNumber = apiService.ethBlockNumber().result()
                blockNumber.shouldNotBe(null)
                blockNumber!!.result.shouldNotBe(null)
            }
        }
    }
})