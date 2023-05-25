package org.web3j.protocol.klaytn.core.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.TxpoolContentResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class TxpoolContentExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolContentExample() throws IOException {
        TxpoolContentResponse response = sdk.txpool.content().send();
        response.getResult();
    }
}
