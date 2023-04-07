package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetAccountApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetAccountResponse ar = sdk.klay.getAccount(
            "0x1cbd3b2770909d4e10f157cabc84c7264073c9ec",
            "latest")
        .send();
        ar.getResult();
    }
}
