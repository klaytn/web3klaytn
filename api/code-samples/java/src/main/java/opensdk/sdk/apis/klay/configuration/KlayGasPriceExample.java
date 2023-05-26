package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGasPriceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGasPriceExample() throws IOException {
        KlayGasPriceResponse gr = sdk.klay.gasPrice().send();
        gr.getResult();
    }
}
