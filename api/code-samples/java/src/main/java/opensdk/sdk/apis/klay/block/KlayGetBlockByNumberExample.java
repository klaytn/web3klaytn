package org.web3j.protocol.klaytn.core.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetBlockByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetBlockByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockByNumberExample() throws IOException {
        KlayGetBlockByNumberResponse gr = sdk.klay.getBlockByNumber(
            "0x1b4",
            true)
        .send();
        gr.getResult();
    }
}
