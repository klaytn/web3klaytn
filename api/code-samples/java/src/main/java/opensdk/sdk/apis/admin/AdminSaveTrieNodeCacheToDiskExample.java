package org.web3j.protocol.klaytn.core.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminSaveTrieNodeCacheToDiskResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminSaveTrieNodeCacheToDiskExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void adminSaveTrieNodeCacheToDiskExample() throws IOException {
        AdminSaveTrieNodeCacheToDiskResponse response = sdk.admin.saveTrieNodeCacheToDisk().send();
        response.getResult();
    }
}
