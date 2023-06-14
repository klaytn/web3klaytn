package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetTransactionByBlockNumberAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionByBlockNumberAndIndexTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_getTransactionByBlockNumberAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionByBlockNumberAndIndexResponse response = w3.klayGetTransactionByBlockNumberAndIndex(
                "latest","0x0"
        ).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
