package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionReceiptResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetTransactionReceiptExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetTransactionReceiptExample() throws IOException {
        KlayGetTransactionReceiptResponse response = sdk.klay.getTransactionReceipt(
                "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"
        ).send();
        response.getResult();
    }
}
