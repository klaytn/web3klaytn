package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStopWSResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStopWSExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStopWSExample() throws IOException {
        AdminStopWSResponse response = sdk.admin.stopWS().send();
        response.getResult();
    }
}
