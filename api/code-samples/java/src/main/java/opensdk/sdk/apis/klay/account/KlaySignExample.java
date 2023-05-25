package org.web3j.protocol.klaytn.core.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySignResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;


public class KlaySignExample {
    private static final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klaySignExample() throws IOException {
        String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
        String message = "0xdeadbeaf";
        KlaySignResponse response = sdk.klay.sign(address, message).send();
        response.getResult();
    }
}
