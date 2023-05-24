package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminStartHTTPResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminStartHTTPExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminStartHTTPExample() throws IOException {
        String adminHost = "127.0.0.1";
        int port = 8551;
        String cors = "";
        String apis = "klay";
        AdminStartHTTPResponse response = sdk.admin.startHTTP(adminHost, port, cors, apis).send();
        response.getResult();
    }
}
