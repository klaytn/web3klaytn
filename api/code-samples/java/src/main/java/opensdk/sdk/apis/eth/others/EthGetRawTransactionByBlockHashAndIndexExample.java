package org.web3j.protocol.klaytn.core.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetRawTransactionByBlockHashAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetRawTransactionByBlockHashAndIndexExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetRawTransactionByBlockHashAndIndexExample() throws IOException {
        EthGetRawTransactionByBlockHashAndIndexResponse er = sdk.eth.getRawTransactionByBlockHashAndIndex(
            "0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be",
            "0x0")
        .send();
        er.getResult();
    }
}
