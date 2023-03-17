package com.klaytn.example.account

import caver.sdk.apis.EthAccountApi
import caver.sdk.models.EthAccountsRequest
import com.klaytn.example.CommonConstant
import com.klaytn.example.result
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
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

   val ethAccountApi = retrofit.create(EthAccountApi::class.java)
   val request = EthAccountsRequest()
   request.method = "eth_accounts"
   request.id = 1
   request.jsonrpc = "2.0"
   request.params = emptyList()
   println(request)
   val account = ethAccountApi
      .ethAccounts(request)
      .result()
   println(account)
}