package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSendRawTransactionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthSendRawTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void ethSendRawTransactionExample() throws IOException {
        String singedTransactionData = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67";

        EthSendRawTransactionResponse response = sdk.eth.sendRawTransaction(singedTransactionData).send();
        response.getResult();
    }
}
