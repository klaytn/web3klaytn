package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetUncleCountByBlockHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;


@DisplayName("Eth RPC Test")
public class EthGetUncleCountByBlockHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getUncleCountByBlockHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash ="0xc9dbfbab67e9a0508bcb3f95ae408023668cef431b805592781a821926715b8a";
        EthGetUncleCountByBlockHashResponse response = sdk.eth.getUncleCountByBlockHash(blockHash).send();
        response.getResult();
    }

}
