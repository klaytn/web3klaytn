package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayAccountCreatedResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayAccountCreatedExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayAccountCreatedExample() throws IOException {
        KlayAccountCreatedResponse ar = sdk.klay.accountCreated(
            "0xa4f42d4d2a3a13874406435500950c9bf2d783db",
            "latest")
        .send();
        ar.getResult();
    }
}
