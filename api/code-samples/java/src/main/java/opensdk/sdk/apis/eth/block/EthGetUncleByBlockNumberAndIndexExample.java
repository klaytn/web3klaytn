package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetUncleByBlockNumberAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetUncleByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetUncleByBlockNumberAndIndexExample() throws IOException {
        String blockTag = "0xe8";
        String uncleIndex = "0x1";
        EthGetUncleByBlockNumberAndIndexResponse response = sdk.eth.getUncleByBlockNumberAndIndex(blockTag, uncleIndex).send();
        response.getResult();
    }
}
