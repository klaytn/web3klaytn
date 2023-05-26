package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStartSpamThrottlerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStartSpamThrottlerExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartSpamThrottlerExample() throws IOException {
        AdminStartSpamThrottlerResponse response = sdk.admin.startSpamThrottler().send();
        response.getResult();
    }
}
