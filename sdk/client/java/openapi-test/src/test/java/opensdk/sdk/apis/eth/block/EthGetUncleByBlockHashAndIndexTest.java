package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Eth RPC Test")
public class EthGetUncleByBlockHashAndIndexTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getUncleByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a";
        String uncleIndex = "0x1";
        EthGetUncleByBlockHashAndIndexResponse response = sdk.eth.getUncleByBlockHashAndIndex(blockHash, uncleIndex).send();
        assertNull(response.getResult());
    }
}
