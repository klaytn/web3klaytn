package caver.sdk.apis

import caver.sdk.infrastructure.result
import caver.sdk.models.*
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.maps.shouldNotBeEmpty
import retrofit2.Retrofit
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.converter.gson.JsonRpcConverterFactory
import java.math.BigDecimal

class KlaytnApiGetRewardsTest : BehaviorSpec({
    val logging = HttpLoggingInterceptor()
    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder().addInterceptor(logging).build()

    Given("In Local Klaytn network") {
        val retrofit = Retrofit.Builder().baseUrl("http://localhost:7151")
            .addConverterFactory(JsonRpcConverterFactory.create()).client(httpClient).build()
        When("Call getRewards") {
            val klayApi = retrofit.create(KlayApi::class.java)
            Then("return rewards info") {
                val request = GetRewardsRequest(params = intArrayOf(1))
                println(request)
                val rewards = klayApi.getRewards(request).result()
                rewards?.result?.rewards?.shouldNotBeEmpty()
            }
        }
        When("Call Service API") {
            val apiService = KlayApiService(retrofit)
            Then("Get getRewards by number") {
                val rewards = apiService.getRewards(BigDecimal.valueOf(1))
                rewards?.result?.rewards?.shouldNotBeEmpty()
            }
        }
    }
})
