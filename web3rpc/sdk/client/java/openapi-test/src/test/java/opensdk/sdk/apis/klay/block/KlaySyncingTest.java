package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySyncingResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.SyncingObject;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


public class KlaySyncingTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC klay_syncing")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlaySyncingResponse response = w3.klaySyncing().send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (!(response.getResult() instanceof Boolean)) {
            assertNotNull(((SyncingObject)response.getResult()).getStartingBlock());
            assertTrue(((SyncingObject)response.getResult()).getStartingBlock().matches("^0x.*$"));
        }
    }
}
