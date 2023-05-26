package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceVotesResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceVotesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceVotesExample() throws IOException {
        GovernanceVotesResponse response = sdk.governance.votes().send();
        response.getResult();
    }
}
