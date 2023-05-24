package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerThrottleListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminGetSpamThrottlerThrottleListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerThrottleListExample() throws IOException {
        AdminGetSpamThrottlerThrottleListResponse response = sdk.admin.getSpamThrottlerThrottleList().send();
        response.getResult();
    }
}
