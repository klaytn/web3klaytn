package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetHeaderByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetHeaderByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getHeaderByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetHeaderByHashResponse br = sdk.eth.getHeaderByHash(
            "0x21509a5aa2c03e9c99e3320cc7805c601b370c6a4529b29000fd8e2360d8c659")
        .send();
        br.getResult();
    }
}
