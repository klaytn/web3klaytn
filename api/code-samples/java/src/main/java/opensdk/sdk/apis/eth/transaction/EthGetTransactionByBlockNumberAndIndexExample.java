package org.web3j.protocol.klaytn.core.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetTransactionByBlockNumberAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetTransactionByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionByBlockNumberAndIndexExample() throws IOException {
        String blockNumber = "0x27";
        String transactionIndexPos = "0x0";
        EthGetTransactionByBlockNumberAndIndexResponse response = sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPos).send();
        response.getResult();
    }
}
