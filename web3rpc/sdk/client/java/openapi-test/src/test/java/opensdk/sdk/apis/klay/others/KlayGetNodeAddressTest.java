package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayNodeAddressResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Klay RPC Test")
public class KlayGetNodeAddressTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_getNodeAddress")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNodeAddressResponse response = w3.klayNodeAddress().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult().toString().matches("^0x[a-fA-F0-9]+"));
    }
}
