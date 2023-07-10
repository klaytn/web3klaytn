package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayUpperBoundGasPriceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


public class KlayUpperBoundGasPriceTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_upperBoundGasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayUpperBoundGasPriceResponse response = w3.klayUpperBoundGasPrice().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof String);
    }
}
