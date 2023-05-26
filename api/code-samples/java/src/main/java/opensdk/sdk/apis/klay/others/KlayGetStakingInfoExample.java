package org.web3j.protocol.klaytn.core.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetStakingInfoResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetStakingInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetStakingInfoExample() throws IOException {
        String blockTag = "latest";

        KlayGetStakingInfoResponse response = sdk.klay
                .getStakingInfo(blockTag)
                .send();
        response.getResult();
    }
}
