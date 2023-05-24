package org.web3j.protocol.klaytn.core.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.TxpoolStatusResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class TxpoolStatusExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolStatusExample() throws IOException {
        TxpoolStatusResponse response = sdk.txpool.status().send();
        response.getResult();
    }
}
