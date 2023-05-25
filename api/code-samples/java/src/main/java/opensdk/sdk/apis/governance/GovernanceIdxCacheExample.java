package org.web3j.protocol.klaytn.core.governance;


import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceIdxCacheResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceIdxCacheExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceIdxCacheExample() throws IOException {
        GovernanceIdxCacheResponse response = sdk.governance.idxCache().send();
        response.getResult();
    }
}
