package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayClientVersionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayClientVersionApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_clientVersion")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayClientVersionResponse response = w3.klayClientVersion().send();

        assertNotNull(response);
        assertNull(response.getError());

        //only check not null
        assertNotNull(response.getResult());
    }
}
