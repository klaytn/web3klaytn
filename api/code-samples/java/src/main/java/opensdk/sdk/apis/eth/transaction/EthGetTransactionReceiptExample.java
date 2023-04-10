package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionReceiptResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetTransactionReceiptExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionReceiptExample() throws IOException {
        String transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67";
        EthGetTransactionReceiptResponse response = sdk.eth.getTransactionReceipt(transactionHash).send();
        response.getResult();
    }
}
