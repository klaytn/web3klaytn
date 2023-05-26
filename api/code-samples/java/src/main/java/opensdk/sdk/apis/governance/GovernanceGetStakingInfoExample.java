package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceGetStakingInfoResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceGetStakingInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceGetStakingInfoExample() throws IOException {
        String blockNum = "latest";

        GovernanceGetStakingInfoResponse response = sdk.governance.getStakingInfo(blockNum).send();
        response.getResult();
    }
}
