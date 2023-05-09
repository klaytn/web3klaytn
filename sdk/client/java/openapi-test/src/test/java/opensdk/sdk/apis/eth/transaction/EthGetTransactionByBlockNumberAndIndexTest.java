package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionByBlockNumberAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthGetTransactionByBlockNumberAndIndexTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getTransactionByBlockNumberAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockNumber = "0x27";
        String transactionIndexPos = "0x0";
        EthGetTransactionByBlockNumberAndIndexResponse response = sdk.eth.getTransactionByBlockNumberAndIndex(blockNumber, transactionIndexPos).send();
        assertNotNull(response);
        assertNull(response.getError());

    }
}
