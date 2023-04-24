package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthGetTransactionByHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getTransactionByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b";
        EthGetTransactionByHashResponse response = sdk.eth.getTransactionByHash(blockHash).send();
        assertNull(response.getResult());
    }
}
