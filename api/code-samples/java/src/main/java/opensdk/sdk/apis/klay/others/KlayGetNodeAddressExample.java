package org.web3j.protocol.klaytn.core.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNodeAddressResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetNodeAddressExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetNodeAddressExample() throws IOException {
        KlayNodeAddressResponse response = sdk.klay.nodeAddress().send();
        response.getResult();
    }
}
