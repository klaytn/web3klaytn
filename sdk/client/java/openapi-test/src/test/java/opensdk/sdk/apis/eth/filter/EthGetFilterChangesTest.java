package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetFilterChangesResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


public class EthGetFilterChangesTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getFilterChange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetFilterChangesResponse response = sdk.eth.getFilterChanges("0x16").send();
        assertNotNull(response.getResult());
    }
}
