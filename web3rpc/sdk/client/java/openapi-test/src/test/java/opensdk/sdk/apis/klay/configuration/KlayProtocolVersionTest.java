package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayProtocolVersionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class KlayProtocolVersionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));
    @Test
    @DisplayName("RPC klay_protocolVersion")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayProtocolVersionResponse response = w3.klayProtocolVersion().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof String);
        assertTrue(((String) response.getResult()).matches("^0x[a-fA-F0-9]+"));
    }
}
