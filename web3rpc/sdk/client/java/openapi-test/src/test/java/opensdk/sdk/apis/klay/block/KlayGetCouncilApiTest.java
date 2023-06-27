package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCouncilResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetCouncilApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getCouncil")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCouncilResponse response = w3.klayGetCouncil(
            "0x1b4")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
        if(!response.getResult().isEmpty()) {
            for (String addresses : response.getResult()) {
                assertTrue(addresses.matches("^0x[a-fA-F0-9]+"));
            }
        }
    }
}
