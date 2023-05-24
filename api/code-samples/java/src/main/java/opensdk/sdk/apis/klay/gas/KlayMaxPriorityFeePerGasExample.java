package org.web3j.protocol.klaytn.core.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayMaxPriorityFeePerGasResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayMaxPriorityFeePerGasExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayMaxPriorityFeePerGasResponse response = sdk.klay.maxPriorityFeePerGas().send();
        response.getResult();
    }
}
