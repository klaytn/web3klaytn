package org.web3j.protocol.klaytn.core.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetTransactionCountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetTransactionCountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionCountExample() throws IOException {
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        String blockNumberOrHashOrTag = "latest";
        EthGetTransactionCountResponse response = sdk.eth.getTransactionCount(address,blockNumberOrHashOrTag).send();
        response.getResult();
    }
}
