package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminPeersResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminPeersExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminPeersExample() throws IOException {
        AdminPeersResponse response = sdk.admin.peers().send();
        response.getResult();
    }
}
