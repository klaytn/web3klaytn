package org.web3j.protocol.klaytn.core.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthMaxPriorityFeePerGasResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthMaxPriorityFeePerGasExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethMaxPriorityFeePerGasExample() throws IOException {
        EthMaxPriorityFeePerGasResponse response = sdk.eth.maxPriorityFeePerGas().send();
        response.getResult();
    }
}
