package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernancePendingChangesResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernancePendingChangesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governancePendingChangesExample() throws IOException {
        GovernancePendingChangesResponse response = sdk.governance.pendingChanges().send();
        response.getResult();
    }
}
