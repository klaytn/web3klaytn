package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthSyncingResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class EthSyncingTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_syncing")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthSyncingResponse response = sdk.eth.syncing().send();
        assertNotNull(response.getResult());
    }

}
