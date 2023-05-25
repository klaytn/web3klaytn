package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayRewardbaseResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayRewardBaseExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayRewardBaseExample() throws IOException {
        KlayRewardbaseResponse response = sdk.klay.rewardbase().send();
        response.getResult();
    }
    
}
