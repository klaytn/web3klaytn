package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetStorageAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetStorageAtApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getStorageAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetStorageAtResponse response = w3.klayGetStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            "0x0",
            "latest")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof String);
        assertTrue(((String) response.getResult()).matches("^0x[a-fA-F0-9]+"));
    }
}
