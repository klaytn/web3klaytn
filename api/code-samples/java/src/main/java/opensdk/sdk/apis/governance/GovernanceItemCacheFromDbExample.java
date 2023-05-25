package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceItemCacheFromDbResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceItemCacheFromDbExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceItemCacheFromDbExample() throws IOException {
        int blockNum = 0;

        GovernanceItemCacheFromDbResponse response = sdk.governance.itemCacheFromDb(blockNum).send();
        response.getResult();
    }
}
