package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerCandidateListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminGetSpamThrottlerCandidateListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerCandidateListExample() throws IOException {
        AdminGetSpamThrottlerCandidateListResponse response = sdk.admin.getSpamThrottlerCandidateList().send();
        response.getResult();
    }
}
