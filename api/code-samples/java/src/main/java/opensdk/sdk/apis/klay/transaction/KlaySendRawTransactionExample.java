package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySendRawTransactionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlaySendRawTransactionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void KlaySendRawTransactionExample() throws IOException {
        String singedTransactionData = "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67";

        KlaySendRawTransactionResponse response = sdk.klay.sendRawTransaction(singedTransactionData).send();
        response.getResult();
    }
}
