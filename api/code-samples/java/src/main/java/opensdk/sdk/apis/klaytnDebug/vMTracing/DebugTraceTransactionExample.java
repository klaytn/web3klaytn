package org.web3j.protocol.klaytn.core.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceTransactionResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugTraceTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceTransactionExample() throws IOException {
        String txHash = "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58";

        DebugTraceTransactionResponse response = sdk.debug.traceTransaction(txHash, null).send();
        response.getResult();
    }
}
