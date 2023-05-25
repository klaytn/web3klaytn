package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminNodeInfoResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminNodeInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminNodeInfoExample() throws IOException {
        AdminNodeInfoResponse response = sdk.admin.nodeInfo().send();
        response.getResult();
    }
}
