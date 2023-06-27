package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayMaxPriorityFeePerGasResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayMaxPriorityFeePerGasTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC klay_maxPriorityFeePerGas")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayMaxPriorityFeePerGasResponse response = w3.klayMaxPriorityFeePerGas().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertTrue(response.getResult() instanceof String);
        assertTrue(response.getResult().toString().matches("^0x[a-f0-9]+"));
    }
}
