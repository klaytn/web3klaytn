package caver.sdk.apis

import caver.sdk.infrastructure.result
import caver.sdk.models.*
import io.kotest.assertions.throwables.shouldThrow
import io.kotest.core.spec.style.BehaviorSpec
import io.kotest.matchers.maps.shouldNotBeEmpty
import io.kotest.matchers.shouldBe
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.converter.gson.JsonRpcConverterFactory
import java.math.BigDecimal
import java.math.BigInteger
import java.net.UnknownHostException

class KlaytnApiTest : BehaviorSpec({
    val logging = HttpLoggingInterceptor()
    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder().addInterceptor(logging).build()

    Given("In Local Klaytn network") {
        val retrofit = Retrofit.Builder().baseUrl("http://localhost:7151")
            .addConverterFactory(JsonRpcConverterFactory.create()).client(httpClient).build()

        val klayApi = retrofit.create(KlayApi::class.java)
        When("- ") {
            Then("Big.Int cast Demical") {
                val bigint = "9600000000000000000".toBigInteger()
                println(bigint)
            }
        }
        When("Call getRewards") {
            Then("return rewards info") {
                val request = GetRewardsRequest(params = intArrayOf(1))
                println(request)
                val rewards = klayApi.getRewards(request).result()
                rewards?.result?.rewards?.shouldNotBeEmpty()
            }
        }
        When("Call getRewards") {
            Then("return rewards info") {
                val request = GetRewardsRequest(params = intArrayOf(1, 2, 4))
                val rewards = klayApi.getRewards(request).result()

                rewards?.error?.code?.shouldBe(-32602)
            }
        }
    }
    Given("In Bad Local Klaytn network") {
        val retrofit = Retrofit.Builder().baseUrl("http://localhost2:7151")
            .addConverterFactory(GsonConverterFactory.create()).client(httpClient).build()

        val klayApi = retrofit.create(KlayApi::class.java)
        When("Call API") {
            Then("return null") {
                val exception = shouldThrow<UnknownHostException> {
                    val request = GetRewardsRequest(params = intArrayOf(1))
                    klayApi.getRewards(request).result()
                }
                exception.message shouldBe "localhost2: nodename nor servname provided, or not known"
            }
        }
    }
    Given("In Json Rpc Klaytn network") {
        val retrofit = Retrofit.Builder().baseUrl("http://localhost:7151")
            .addConverterFactory(JsonRpcConverterFactory.create()).client(httpClient).build()
        When("Call Service API") {
            val apiService = KlayApiService(retrofit)
            Then("Get getRewards by number") {
                val rewards = apiService.getRewards(BigDecimal.valueOf(1))
                rewards?.result?.rewards?.shouldNotBeEmpty()
            }
        }
    }
})
