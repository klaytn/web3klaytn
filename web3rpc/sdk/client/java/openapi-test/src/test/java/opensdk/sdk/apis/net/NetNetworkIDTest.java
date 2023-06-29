package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetNetworkIDResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")

public class NetNetworkIDTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC net_networkID")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetNetworkIDResponse response = w3.netNetworkID().send();
        assertNotNull(response);
        assertNull(response.getError());
        if(response.getResult() instanceof String) {
            assertTrue(((String) response.getResult()).matches("^0x[0-9a-fA-F]+$"));
        } else {
            assertTrue(response.getResult() instanceof Integer);
        }
    }
}
