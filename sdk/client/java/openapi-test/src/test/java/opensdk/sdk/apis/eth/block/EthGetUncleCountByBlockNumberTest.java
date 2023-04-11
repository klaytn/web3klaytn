package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleCountByBlockNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Eth RPC Test")

public class EthGetUncleCountByBlockNumberTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC eth_getUncleCountByBlockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockTag = "0xe8";
        EthGetUncleCountByBlockNumberResponse response = sdk.eth.getUncleCountByBlockNumber(blockTag).send();
        assertNotNull(response.getResult());
    }
}
