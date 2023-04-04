package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNewPendingTransactionFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayNewPendingTransactionFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_newPendingTransactionFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNewPendingTransactionFilterResponse response = sdk.klay.newPendingTransactionFilter().send();
        assertNotNull(response.getResult());
    }
}
