package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetHeaderByNumberResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetHeaderByNumberExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetHeaderByNumberExample() throws IOException {
        EthGetHeaderByNumberResponse br = sdk.eth.getHeaderByNumber(
            "0x1b4")
        .send();
        br.getResult();
    }
}
