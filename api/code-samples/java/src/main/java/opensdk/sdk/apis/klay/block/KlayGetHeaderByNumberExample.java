package org.web3j.protocol.klaytn.core.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetHeaderByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetHeaderByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetHeaderByNumberExample() throws IOException {
        KlayGetHeaderByNumberResponse gr = sdk.klay.getHeaderByNumber(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
