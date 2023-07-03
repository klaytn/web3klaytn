package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetAccountApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetAccountResponse response = w3.klayGetAccount(
            "0xd5e9ab70cca10f443491939dd896b580f7c72ea3",
            "latest").send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(Integer.class, response.getResult().getAccType().intValue());
    }
}
