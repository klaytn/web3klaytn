package org.web3j.protocol.klaytn.core.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayIsParallelDBWriteResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayIsParallelDBWriteExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void klayIsParallelDBWriteExample() throws IOException {
        KlayIsParallelDBWriteResponse response = sdk.klay.isParallelDBWrite().send();
        response.getResult();
    }
}
