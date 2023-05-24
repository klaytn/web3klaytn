package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayIsSenderTxHashIndexingEnabledResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayIsSenderTxHashIndexingEnabledExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayIsSenderTxHashIndexingEnabledExample() throws IOException {
        KlayIsSenderTxHashIndexingEnabledResponse response = sdk.klay.isSenderTxHashIndexingEnabled().send();
        response.getResult();
    }
}
