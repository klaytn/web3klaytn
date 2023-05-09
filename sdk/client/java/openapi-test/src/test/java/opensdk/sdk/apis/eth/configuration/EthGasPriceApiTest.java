package opensdk.sdk.apis.eth.configuration;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGasPriceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGasPriceApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_gasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGasPriceResponse br = sdk.eth.gasPrice().send();
        assertNotNull(br);
        assertNull(br.getError());
    }
}
