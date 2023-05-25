package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetUncleCountByBlockNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetUncleCountByBlockNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleCountByBlockNumberExample() throws IOException {
        String blockTag = "0xe8";
        EthGetUncleCountByBlockNumberResponse response = sdk.eth.getUncleCountByBlockNumber(blockTag).send();
        response.getResult();
    }
}
