package org.web3j.protocol.klaytn.core.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetTransactionByBlockHashAndIndexResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetTransactionByBlockHashAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionByBlockHashAndIndexExample() throws IOException {
        String blockHash = "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68";
        String transactionIndexPos = "0x0";
        EthGetTransactionByBlockHashAndIndexResponse response = sdk.eth.getTransactionByBlockHashAndIndex(blockHash, transactionIndexPos).send();
        response.getResult();

    }
}
