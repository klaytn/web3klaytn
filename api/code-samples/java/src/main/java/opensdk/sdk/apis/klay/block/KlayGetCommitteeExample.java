package org.web3j.protocol.klaytn.core.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCommitteeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetCommitteeExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetCommitteeExample() throws IOException {
        KlayGetCommitteeResponse gr = sdk.klay.getCommittee(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
