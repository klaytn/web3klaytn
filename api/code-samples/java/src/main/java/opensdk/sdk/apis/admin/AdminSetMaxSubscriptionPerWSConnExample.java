package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminSetMaxSubscriptionPerWSConnResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminSetMaxSubscriptionPerWSConnExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSetMaxSubscriptionPerWSConnExample() throws IOException {
        int limit = 5;

        AdminSetMaxSubscriptionPerWSConnResponse response = sdk.admin.setMaxSubscriptionPerWSConn(limit).send();
        response.getResult();
    }
}
