package org.web3j.protocol.klaytn.core.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetFilterLogsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetFilterLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetFilterLogsExample() throws IOException {
        String quantity = "0x16";

        KlayGetFilterLogsResponse response = sdk.klay.getFilterLogs(quantity).send();
        response.getResult();
    }
}
