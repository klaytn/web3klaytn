package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminImportChainResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminImportChainExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminImportChainExample() throws IOException {
        String fileName = "/tmp/chain.txt";

        AdminImportChainResponse response = sdk.admin.importChain(fileName).send();
        response.getResult();
    }
}
