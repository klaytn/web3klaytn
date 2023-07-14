package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionByBlockHashAndIndexApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_getTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionByBlockHashAndIndexResponse response = w3.klayGetTransactionByBlockHashAndIndex(
                "0x4c4cbf242a80183d2ea2daf047c578d5fc89c0b14c4262606c8b6bb0b36715be",
                        "0x0"
        ).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getBlockHash());
        assertTrue(response.getResult().getBlockHash().matches("^0x[a-fA-F0-9]+"));
    }
}
