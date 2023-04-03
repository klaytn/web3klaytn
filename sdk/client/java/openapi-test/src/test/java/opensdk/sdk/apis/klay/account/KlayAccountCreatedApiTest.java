package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayAccountCreatedResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayAccountCreatedApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_accountCreated")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayAccountCreatedResponse ar = sdk.klay.accountCreated(
            "0xa4f42d4d2a3a13874406435500950c9bf2d783db",
            "latest")
        .send();
        ar.getResult();
    }
}
