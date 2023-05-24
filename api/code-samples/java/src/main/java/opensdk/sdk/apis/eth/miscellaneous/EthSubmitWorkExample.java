package org.web3j.protocol.klaytn.core.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthSubmitWorkResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthSubmitWorkExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethSubmitWorkExample() throws IOException {
        String nonce = "0x0000000000000001";
        String powHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        String mixDigest = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
        EthSubmitWorkResponse response = sdk.eth.submitWork(nonce, powHash, mixDigest).send();
        response.getResult();
    }
}
