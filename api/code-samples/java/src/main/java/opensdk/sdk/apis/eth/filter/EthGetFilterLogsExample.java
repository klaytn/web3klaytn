package org.web3j.protocol.klaytn.core.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthGetFilterLogsResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetFilterLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void ethGetFilterLogsExample() throws IOException {
        String id = "0x7e406dd358f4e13b78bab67d5715fdf1";
        EthGetFilterLogsResponse response = sdk.eth.getFilterLogs(id).send();
        response.getResult();
    }
}
