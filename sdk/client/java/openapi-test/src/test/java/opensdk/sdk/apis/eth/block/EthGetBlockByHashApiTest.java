package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class EthGetBlockByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC eth_getBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBlockByHashResponse br = sdk.klay.getBlockByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659",
            true)
        .send();
        br.getResult();
    }
}
