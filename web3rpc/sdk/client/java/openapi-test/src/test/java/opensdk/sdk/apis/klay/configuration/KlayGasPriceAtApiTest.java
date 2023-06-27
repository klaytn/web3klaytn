package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGasPriceAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGasPriceAtApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_gasPriceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGasPriceAtResponse response = w3.klayGasPriceAt(
            "0x64")
        .send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        // only check response result not null?
        assertTrue(response.getResult() instanceof String);
        assertTrue(response.getResult().toString().matches("^0x[0-9A-Fa-f]+$"));
    }
}
