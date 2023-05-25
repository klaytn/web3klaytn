package org.web3j.protocol.klaytn.core.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetRawTransactionByHashResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetRawTransactionByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethGetRawTransactionByHashExample() throws IOException {
        EthGetRawTransactionByHashResponse er = sdk.eth.getRawTransactionByHash(
            "0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687")
        .send();
        er.getResult();
    }
}
