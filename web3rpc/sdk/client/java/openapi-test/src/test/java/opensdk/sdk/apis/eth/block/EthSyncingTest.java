package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;

import org.web3j.protocol.klaytn.Web3j;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthSyncing;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthSyncingTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_syncing")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthSyncing response = w3.ethSyncing().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
