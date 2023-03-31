package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.BlockNumber200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Eth RPC Test")
class EthBlockNumberApiApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC eth_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        BlockNumber200Response br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
