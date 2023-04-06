package opensdk.sdk.apis.klay.transaction;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayPendingTransactionsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Klay RPC Test")
public class KlayPendingTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_pendingTransactions")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayPendingTransactionsResponse response = sdk.klay.pendingTransactions().send();
        assertNotNull(response.getResult());
    }
}
