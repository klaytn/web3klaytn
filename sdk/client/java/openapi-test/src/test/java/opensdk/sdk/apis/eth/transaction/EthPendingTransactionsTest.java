package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewPendingTransactionFilterResponse;
import opensdk.sdk.models.EthPendingTransactionsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Eth RPC Test")
public class EthPendingTransactionsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_pendingTransactions")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthPendingTransactionsResponse response = sdk.eth.pendingTransactions().send();
        assertNotNull(response.getResult());

    }

}
