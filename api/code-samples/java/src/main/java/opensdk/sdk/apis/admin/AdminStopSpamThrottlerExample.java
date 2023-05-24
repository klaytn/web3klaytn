package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStopSpamThrottlerResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStopSpamThrottlerExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopSpamThrottlerExample() throws IOException {
        AdminStopSpamThrottlerResponse response = sdk.admin.stopSpamThrottler().send();
        response.getResult();
    }
}
