package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetBalanceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetBalanceApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getBalance")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBalanceResponse response = w3.klayGetBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest").send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
