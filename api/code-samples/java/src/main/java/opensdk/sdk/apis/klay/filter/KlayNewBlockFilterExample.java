package org.web3j.protocol.klaytn.core.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNewBlockFilterResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayNewBlockFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayNewBlockFilterExample() throws IOException {
        KlayNewBlockFilterResponse response = sdk.klay.newBlockFilter().send();
        response.getResult();
    }
}
