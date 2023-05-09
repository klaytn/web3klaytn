package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockTransactionCountByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")

public class EthGetBlockTransactionCountByNumberTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getBlockTransactionCountByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockTransactionCountByNumberResponse response = sdk.eth.getBlockTransactionCountByNumber("0xe8").send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
