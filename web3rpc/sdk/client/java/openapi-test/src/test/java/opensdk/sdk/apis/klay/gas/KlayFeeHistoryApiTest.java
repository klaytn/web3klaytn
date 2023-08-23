package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayFeeHistoryResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayFeeHistoryApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC klay_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayFeeHistoryResponse response = w3.klayFeeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertNotNull(response.getResult().getOldestBlock());
        assertTrue(response.getResult().getOldestBlock().matches("^0x[a-f0-9]+"));
    }
}
