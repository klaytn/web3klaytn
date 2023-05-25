package org.web3j.protocol.klaytn.core.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetPeerCountByTypeResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class NetPeerCountByTypeExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetPeerCountByTypeResponse response = sdk.net.peerCountByType().send();
        response.getResult();
    }
}
