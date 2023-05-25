package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayClientVersionResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayClientVersionExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayClientVersionExample() throws IOException {
        KlayClientVersionResponse cr = sdk.klay.clientVersion().send();
        cr.getResult();
    }
}
