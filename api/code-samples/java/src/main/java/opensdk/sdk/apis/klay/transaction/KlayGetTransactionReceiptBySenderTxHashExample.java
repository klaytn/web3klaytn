package org.web3j.protocol.klaytn.core.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionReceiptBySenderTxHashResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetTransactionReceiptBySenderTxHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetTransactionReceiptBySenderTxHashExample() throws IOException {
        KlayGetTransactionReceiptBySenderTxHashResponse response = sdk.klay.getTransactionReceiptBySenderTxHash(
                "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58"
        ).send();
        response.getResult();
    }
}
