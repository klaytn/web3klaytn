package org.web3j.protocol.klaytn.core.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.TxpoolInspectResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class TxpoolInspectExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void txpoolInspectExample() throws IOException {
        TxpoolInspectResponse response = sdk.txpool.inspect().send();
        response.getResult();
    }
}
