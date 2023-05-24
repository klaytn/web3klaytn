package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceMyVotesResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceMyVotesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceMyVotesExample() throws IOException {
        GovernanceMyVotesResponse response = sdk.governance.myVotes().send();
        response.getResult();
    }
}
