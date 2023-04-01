package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EthBlockNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Eth RPC Test")
class EthBlockNumberApiApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC eth_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlockNumberResponse br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
