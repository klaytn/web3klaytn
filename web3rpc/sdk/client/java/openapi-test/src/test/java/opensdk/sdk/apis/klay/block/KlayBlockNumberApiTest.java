package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayBlockNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayBlockNumberApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayBlockNumberResponse response = w3.klayBlockNumber().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult() instanceof String);
        assertTrue(((String) response.getResult()).matches("^0x.*$"));
    }
}
