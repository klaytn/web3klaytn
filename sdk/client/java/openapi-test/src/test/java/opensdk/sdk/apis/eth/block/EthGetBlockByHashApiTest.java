package opensdk.sdk.apis.eth.block;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class EthGetBlockByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockByHashResponse br = sdk.eth.getBlockByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659",
            true)
        .send();
        assertNotNull(br);
        assertNull(br.getError());
    }
}
