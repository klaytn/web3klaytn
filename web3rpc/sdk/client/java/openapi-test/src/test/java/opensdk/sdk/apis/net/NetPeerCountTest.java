package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.NetPeerCount;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class NetPeerCountTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC net_peerCount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetPeerCount response = w3.netPeerCount().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof String);
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));

    }

}
