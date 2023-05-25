package org.web3j.protocol.klaytn.core.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetBlockTransactionCountByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetBlockTransactionCountByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBlockTransactionCountByNumberExample() throws IOException {
        KlayGetBlockTransactionCountByNumberResponse gr = sdk.klay.getBlockTransactionCountByNumber(
            "0xe8")
        .send();
        gr.getResult();
    }
}
