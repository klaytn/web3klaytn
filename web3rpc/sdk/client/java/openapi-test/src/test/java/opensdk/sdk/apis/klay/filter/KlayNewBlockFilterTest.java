package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNewBlockFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayNewBlockFilterTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_newBlockFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNewBlockFilterResponse response = w3.klayNewBlockFilter().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertTrue(response.getResult() instanceof String);
        assertTrue(response.getResult().toString().matches("^0x[a-f0-9]+"));
    }
}
