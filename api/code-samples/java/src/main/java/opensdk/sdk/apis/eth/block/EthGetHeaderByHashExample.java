package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetHeaderByHashResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetHeaderByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetHeaderByHashExample() throws IOException {
        EthGetHeaderByHashResponse br = sdk.eth.getHeaderByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659")
        .send();
        br.getResult();
    }
}
