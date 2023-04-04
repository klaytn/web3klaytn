package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetTransactionByHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetTransactionByHashExample() throws IOException {
        KlayGetTransactionByHashResponse response = sdk.klay.getTransactionByHash(
                "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58"
        ).send();
        response.getResult();
    }
}
