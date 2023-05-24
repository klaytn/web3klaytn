package org.web3j.protocol.klaytn.core.governance;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceItemsAtResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceItemsAtExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void governanceItemsAtExample() throws IOException {
        int blockTag = 0;

        GovernanceItemsAtResponse response = sdk.governance.itemsAt(blockTag).send();
        response.getResult();
    }
}
