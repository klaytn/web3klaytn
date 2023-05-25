package org.web3j.protocol.klaytn.core.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetRawTransactionByBlockNumberAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetRawTransactionByBlockNumberAndIndexExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetRawTransactionByBlockNumberAndIndexExample() throws IOException {
        EthGetRawTransactionByBlockNumberAndIndexResponse er = sdk.eth.getRawTransactionByBlockNumberAndIndex(
            118593751,
            "0x0")
        .send();
        er.getResult();
    }
}
