package org.web3j.protocol.klaytn.core.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayLowerBoundGasPriceResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayLowerBoundGasPriceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayLowerBoundGasPriceExample() throws IOException {
        KlayLowerBoundGasPriceResponse response = sdk.klay.lowerBoundGasPrice().send();
        response.getResult();
    }
}
