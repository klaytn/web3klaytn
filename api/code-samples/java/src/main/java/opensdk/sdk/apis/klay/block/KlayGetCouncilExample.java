package org.web3j.protocol.klaytn.core.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCouncilResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetCouncilExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetCouncilExample() throws IOException {
        KlayGetCouncilResponse gr = sdk.klay.getCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
