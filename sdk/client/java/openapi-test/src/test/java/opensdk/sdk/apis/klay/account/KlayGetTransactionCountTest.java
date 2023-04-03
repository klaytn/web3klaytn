package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionCountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionCountTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getTransactionCount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionCountResponse response = sdk.klay.getTransactionCount(
                "0xc94770007dda54cF92009BFF0dE90c06F603a09f","latest"
        ).send();
        assertNotNull(response.getResult());
    }

}
