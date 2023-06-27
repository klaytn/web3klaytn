package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayAccountsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayAccountsApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_accounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayAccountsResponse response = w3.klayAccounts().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        //only check not null ?
        if(!response.getResult().isEmpty())
            assertTrue(response.getResult().get(0).matches("^0x[a-fA-F0-9]+"));
        }
}

