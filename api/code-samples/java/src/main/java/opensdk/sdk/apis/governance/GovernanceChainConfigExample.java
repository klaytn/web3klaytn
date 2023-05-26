package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceChainConfigResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceChainConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceChainConfigExample() throws IOException {
        GovernanceChainConfigResponse response = sdk.governance.chainConfig().send();
        response.getResult();
    }
}
