package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetChainConfigResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetChainConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetChainConfigExample() throws IOException {
        Integer blogNumberOrTag = 100;
        KlayGetChainConfigResponse response = sdk.klay.getChainConfig(blogNumberOrTag).send();
        response.getResult();
    }
}
