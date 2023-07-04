package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetRawTransactionByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Klay RPC Test")
public class KlayGetRawTransactionByBlockHashAndIndexTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getRawTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetRawTransactionByBlockHashAndIndexResponse response = 
                w3.klayGetRawTransactionByBlockHashAndIndex(
                    "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6",
                    "0x20965255")
                .send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        assertTrue(response.getResult().matches("^0x.*$"));
    }
}
