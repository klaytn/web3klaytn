package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminExportChainResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminExportChainExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminExportChainExample() throws IOException {
        String file = "/tmp/chain3.txt";
        AdminExportChainResponse response = sdk.admin.exportChain(file).send();
        response.getResult();
    }
}
