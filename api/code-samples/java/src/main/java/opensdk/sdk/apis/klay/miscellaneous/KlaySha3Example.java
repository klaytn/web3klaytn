package org.web3j.protocol.klaytn.core.klay.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySha3Response;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlaySha3Example {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klaySha3Example() throws IOException {
        String data = "0x11223344";
        KlaySha3Response response = sdk.klay.sha3(data).send();
        response.getResult();
    }
}
