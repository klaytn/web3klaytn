package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewPendingTransactionFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Eth RPC Test")
public class EthNewPendingTransactionFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_newPendingTransactionFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthNewPendingTransactionFilterResponse response = sdk.eth.newPendingTransactionFilter().send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
