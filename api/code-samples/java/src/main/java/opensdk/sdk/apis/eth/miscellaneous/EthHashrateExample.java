package org.web3j.protocol.klaytn.core.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthHashrateResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthHashrateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethHashrateExample() throws IOException {
        EthHashrateResponse response = sdk.eth.hashrate().send();
        response.getResult();
    }
    
}
