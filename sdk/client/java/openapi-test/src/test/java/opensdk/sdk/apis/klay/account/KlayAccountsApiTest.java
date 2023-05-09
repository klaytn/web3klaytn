package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayAccountsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayAccountsApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayAccountsResponse response = sdk.klay.accounts().send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
