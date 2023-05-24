package org.web3j.protocol.klaytn.core.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthUninstallFilterResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthUninstallFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethUninstallFilterExample() throws IOException {
        String  filterId = "0xb";
        EthUninstallFilterResponse response = sdk.eth.uninstallFilter(filterId).send();
        response.getResult();
    }
}
