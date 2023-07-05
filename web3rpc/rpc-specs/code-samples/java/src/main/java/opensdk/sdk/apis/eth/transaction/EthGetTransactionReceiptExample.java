package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.EthGetTransactionReceipt;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthGetTransactionReceiptExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethGetTransactionReceiptExample() throws IOException {
        String transactionHash = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67";
        EthGetTransactionReceipt response = w3.ethGetTransactionReceipt(transactionHash).send();
        response.getResult();
    }
}
