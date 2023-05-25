package org.web3j.protocol.klaytn.core.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.FilterOptions;
import org.web3j.protocol.klaytn.core.method.response.KlayGetLogsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetLogsExample() throws IOException {
        FilterOptions options = new FilterOptions();
        options.setFromBlock("latest");
        options.setToBlock("latest");
        options.setAddress("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        KlayGetLogsResponse response = sdk.klay.getLogs(options).send();
        response.getResult();
    }

}
