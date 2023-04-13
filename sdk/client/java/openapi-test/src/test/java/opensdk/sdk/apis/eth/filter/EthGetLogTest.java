package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetLogsResponse;
import opensdk.sdk.models.FilterOptions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
@DisplayName("Eth RPC Test")
public class EthGetLogTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        FilterOptions options = new FilterOptions();
        EthGetLogsResponse response = sdk.eth.getLogs(options).send();
        response.getResult();
    }

}
