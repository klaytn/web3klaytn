package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetBlockTransactionCountByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetBlockTransactionCountByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetBlockTransactionCountByNumberExample() throws IOException {
        EthGetBlockTransactionCountByNumberResponse response = sdk.eth.getBlockTransactionCountByNumber("0xe8").send();
        response.getResult();
    }
}
