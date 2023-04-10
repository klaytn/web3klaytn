package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionByBlockNumberAndIndexResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetTransactionByBlockNumberAndIndexExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionByBlockNumberAndIndexExample() throws IOException {
        String blockNumber = "0x27";
        String transactionIndexPos = "0x0";
        EthGetTransactionByBlockNumberAndIndexResponse response = sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPos).send();
        response.getResult();
    }
}
