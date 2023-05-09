package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBalanceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetBalanceApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getBalance")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBalanceResponse response = sdk.klay.getBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest").send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
