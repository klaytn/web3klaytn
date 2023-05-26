package org.web3j.protocol.klaytn.core.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetProofResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.Arrays;

public class EthGetProofExample {
    private Web3j sdk = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    void ethGetProofExample() throws IOException {
        String blockNumber = "latest";
        EthGetProofResponse response = sdk.eth.getProof("0xe5cB067E90D5Cd1F8052B83562Ae670bA4A211a8",
                Arrays.asList("0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
                blockNumber).send();
        response.getResult();
    }
}
