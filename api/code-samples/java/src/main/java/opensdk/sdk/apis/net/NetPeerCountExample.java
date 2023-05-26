package org.web3j.protocol.klaytn.core.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetPeerCountResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class NetPeerCountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void netPeerCountExample() throws IOException {
        NetPeerCountResponse response = sdk.net.peerCount().send();
        response.getResult();

    }
}
