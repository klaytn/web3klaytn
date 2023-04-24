package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthBlockNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
class EthBlockNumberApiApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthBlockNumberResponse br = sdk.eth.blockNumber().send();
        br.getResult();
    }
}
