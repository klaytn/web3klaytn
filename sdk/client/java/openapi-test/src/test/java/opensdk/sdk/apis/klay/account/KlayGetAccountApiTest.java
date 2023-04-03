package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetAccountApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC klay_getAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetAccountResponse gr = sdk.klay.getAccount(
            "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722",
            "latest")
        .send();
        gr.getResult();
    }
}
