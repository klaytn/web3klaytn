package org.web3j.protocol.klaytn.core.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetBalanceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetBalanceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBalanceExample() throws IOException {
        EthGetBalanceResponse br = sdk.eth.getBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest")
        .send();
        br.getResult();
    }
}
