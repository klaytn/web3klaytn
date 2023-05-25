package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayProtocolVersionResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayProtocolVersionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayProtocolVersionExample() throws IOException {
        KlayProtocolVersionResponse response = sdk.klay.protocolVersion().send();
        response.getResult();
    }
}
