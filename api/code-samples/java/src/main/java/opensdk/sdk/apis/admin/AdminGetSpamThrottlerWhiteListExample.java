package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminGetSpamThrottlerWhiteListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminGetSpamThrottlerWhiteListExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminGetSpamThrottlerWhiteListExample() throws IOException {
        AdminGetSpamThrottlerWhiteListResponse response = sdk.admin.getSpamThrottlerWhiteList().send();
        response.getResult();
    }
}
