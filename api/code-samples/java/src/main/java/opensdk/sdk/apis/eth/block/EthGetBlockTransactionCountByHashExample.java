package org.web3j.protocol.klaytn.core.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetBlockTransactionCountByHashResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetBlockTransactionCountByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBlockTransactionCountByHashExample() throws IOException {
        EthGetBlockTransactionCountByHashResponse br = sdk.eth.getBlockTransactionCountByHash(
            "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621")
        .send();
        br.getResult();
    }
}
