package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayIsSenderTxHashIndexingEnabledResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


public class KlayIsSenderTxHashIndexingEnabledTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    @Test
    @DisplayName("RPC klay_isSenderTxHashIndexingEnabled")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayIsSenderTxHashIndexingEnabledResponse response = w3.klayIsSenderTxHashIndexingEnabled().send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertTrue(response.getResult() instanceof Boolean);
    }
}
