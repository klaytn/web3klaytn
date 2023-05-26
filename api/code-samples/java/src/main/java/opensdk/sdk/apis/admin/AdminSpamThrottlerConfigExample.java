package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminSpamThrottlerConfigResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminSpamThrottlerConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSpamThrottlerConfigExample() throws IOException {
        AdminSpamThrottlerConfigResponse response = sdk.admin.spamThrottlerConfig().send();
        response.getResult();
    }
}
