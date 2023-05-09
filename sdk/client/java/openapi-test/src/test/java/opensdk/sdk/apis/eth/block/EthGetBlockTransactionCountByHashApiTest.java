package opensdk.sdk.apis.eth.block;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockTransactionCountByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetBlockTransactionCountByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getBlockTransactionCountByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockTransactionCountByHashResponse br = sdk.eth.getBlockTransactionCountByHash(
            "0x0c11803ab36110db993e7520908b9ba9336cca2f2dcc9b6130c481a3ccdc2621")
        .send();
        assertNotNull(br);
        assertNull(br.getError());
    }
}
