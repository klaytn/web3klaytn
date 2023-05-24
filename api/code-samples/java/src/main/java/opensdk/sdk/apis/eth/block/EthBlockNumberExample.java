package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthBlockNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthBlockNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethBlockNumberExample() throws IOException {
        EthBlockNumberResponse br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
