package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminDatadirResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminDataDirExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminDataDirExample() throws IOException {
        AdminDatadirResponse response = sdk.admin.datadir().send();
        response.getResult();
    }
}
