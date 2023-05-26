package org.web3j.protocol.klaytn.core.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.klaytn.OpenSDK;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCodeResponse;

import java.io.IOException;

public class KlayGetCodeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetCodeExample() throws IOException {
        KlayGetCodeResponse gr = sdk.klay.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        gr.getResult();
    }
}
