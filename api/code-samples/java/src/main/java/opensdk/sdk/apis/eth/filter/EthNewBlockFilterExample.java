package org.web3j.protocol.klaytn.core.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthNewBlockFilterResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthNewBlockFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethNewBlockFilterExample() throws IOException {
        EthNewBlockFilterResponse response = sdk.eth.newBlockFilter().send();
        response.getResult();
    }
}
