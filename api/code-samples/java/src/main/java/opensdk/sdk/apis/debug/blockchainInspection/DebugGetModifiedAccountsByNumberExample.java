package org.web3j.protocol.klaytn.core.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetModifiedAccountsByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugGetModifiedAccountsByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGetModifiedAccountsByNumberExample() throws IOException {
        int startBlockNum = 171904;
        int endBlockNum = 172160;
        DebugGetModifiedAccountsByNumberResponse response = sdk.debug.getModifiedAccountsByNumber(startBlockNum, endBlockNum).send();
        response.getResult();
    }
}
