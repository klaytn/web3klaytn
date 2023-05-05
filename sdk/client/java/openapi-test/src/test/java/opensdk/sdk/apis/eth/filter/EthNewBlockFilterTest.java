package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewBlockFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Eth RPC Test")
public class EthNewBlockFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_newBlockFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthNewBlockFilterResponse response = sdk.eth.newBlockFilter().send();
        assertNotNull(response.getResult());
    }
}
