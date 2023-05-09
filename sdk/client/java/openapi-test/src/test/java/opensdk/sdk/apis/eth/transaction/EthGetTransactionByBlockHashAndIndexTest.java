package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthGetTransactionByBlockHashAndIndexTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68";
        String transactionIndexPos = "0x0";
        EthGetTransactionByBlockHashAndIndexResponse response = sdk.eth.getTransactionByBlockHashAndIndex(blockHash, transactionIndexPos).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
