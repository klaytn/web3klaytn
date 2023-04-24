package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthUninstallFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class EthUninstallFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_uninstallFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String  filterId = "0xb";
        EthUninstallFilterResponse response = sdk.eth.uninstallFilter(filterId).send();
        assertNotNull(response.getResult());
    }
}
