package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetBlockByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetBlockByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBlockByNumberExample() throws IOException {
        EthGetBlockByNumberResponse er = sdk.eth.getBlockByNumber(
            "0x8f668",
            false)
        .send();
        er.getResult();
    }
}
