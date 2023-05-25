package org.web3j.protocol.klaytn.core.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayUpperBoundGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayUpperBoundGasPriceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayUpperBoundGasPriceExample() throws IOException {
        KlayUpperBoundGasPriceResponse response = sdk.klay.upperBoundGasPrice().send();
        response.getResult();
    }
}
