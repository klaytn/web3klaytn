package org.web3j.protocol.klaytn.core.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetListeningResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class NetListeningExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void netListeningExample() throws IOException {
        NetListeningResponse response = sdk.net.listening().send();
        response.getResult();
    }
    
}
