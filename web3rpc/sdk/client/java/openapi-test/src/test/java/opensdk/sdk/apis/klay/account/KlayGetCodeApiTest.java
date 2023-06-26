package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetCodeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetCodeApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getCode")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCodeResponse response = w3.klayGetCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "latest")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
