package org.web3j.protocol.klaytn.core.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetRawTransactionByBlockNumberAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetRawTransactionByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetRawTransactionByBlockNumberAndIndexExample() throws IOException {
        String blockTag = "0x27";
        String index = "0x0";

        KlayGetRawTransactionByBlockNumberAndIndexResponse response = sdk.klay
                .getRawTransactionByBlockNumberAndIndex(blockTag, index)
                .send();
        response.getResult();


    }
}
