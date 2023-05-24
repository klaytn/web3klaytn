package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStateMigrationStatusResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStateMigrationStatusExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStateMigrationStatusExample() throws IOException {
        AdminStateMigrationStatusResponse response = sdk.admin.stateMigrationStatus().send();
        response.getResult();
    }
}
