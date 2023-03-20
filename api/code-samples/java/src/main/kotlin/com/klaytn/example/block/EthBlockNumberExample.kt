package com.klaytn.example.block

import com.klaytn.example.CommonConstant
import com.klaytn.example.result
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import opensdk.sdk.apis.EthBlockApi
import opensdk.sdk.models.EthBlockNumberRequest
import retrofit2.Retrofit
import retrofit2.converter.gson.JsonRpcConverterFactory

fun main() {
    val logging = HttpLoggingInterceptor()

    logging.level = HttpLoggingInterceptor.Level.BODY

    val httpClient = OkHttpClient.Builder()
        .addInterceptor(logging)
        .build()

    val retrofit = Retrofit.Builder()
        .baseUrl(CommonConstant.baseUrl)
        .addConverterFactory(JsonRpcConverterFactory.create())
        .client(httpClient)
        .build()
    val ethBlockApi = retrofit.create(EthBlockApi::class.java)

    val request = EthBlockNumberRequest()
    request.method = "eth_blockNumber"
    request.id = 83
    request.jsonrpc = "2.0"
    request.params = emptyList()
    println(request)
    val blockNumber = ethBlockApi
        .ethBlockNumber(request)
        .result();
    println(blockNumber)
}