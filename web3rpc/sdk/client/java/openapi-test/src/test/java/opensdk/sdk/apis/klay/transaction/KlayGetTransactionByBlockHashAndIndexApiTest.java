package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionByBlockHashAndIndexApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_getTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionByBlockHashAndIndexResponse response = w3.klayGetTransactionByBlockHashAndIndex(
                "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
                        "0x0"
        ).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
