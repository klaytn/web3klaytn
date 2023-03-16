package caver.sdk.apis

import caver.sdk.models.GetRewardsRequest
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.maps.shouldNotBeEmpty
import io.kotest.matchers.shouldBe
import io.kotest.matchers.shouldNotBe
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.converter.gson.JsonRpcConverterFactory
import java.math.BigDecimal
import java.net.UnknownHostException

class KlaytnApiGetRewardsTest : BehaviorSpec({
    val logging = HttpLoggingInterceptor()
    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder().addInterceptor(logging).build()

    Given("In Local Klaytn network") {
        val retrofit = Retrofit.Builder().baseUrl("http://localhost:7151")
            .addConverterFactory(JsonRpcConverterFactory.create()).client(httpClient).build()
        When("Call KlayApi.getRewards") {
            val klayApi = retrofit.create(KlayApi::class.java)
            Then("return rewards info") {
                val request = GetRewardsRequest()
                request.params = intArrayOf(1)
                println(request)
                val rewards = klayApi.getRewards(request).result()
                rewards!!.result!!.rewards.shouldNotBe(null)
            }
        }
        When("Call KlayApiService.getRewards") {
            val apiService = KlayApiService(retrofit)
            Then("Get getRewards by number") {
                val rewards = apiService.getRewards(BigDecimal(1)).result()
                rewards.shouldNotBe(null)
                rewards!!.result!!.rewards.shouldNotBe(null)
            }
        }
    }
})
