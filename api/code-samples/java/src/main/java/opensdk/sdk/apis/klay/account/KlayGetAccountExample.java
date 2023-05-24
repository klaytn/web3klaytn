package org.web3j.protocol.klaytn.core.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetAccountExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetAccountExample() throws IOException {
        KlayGetAccountResponse ar = sdk.klay.getAccount(
            "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec",
            "latest")
        .send();
        ar.getResult();
    }
}
