package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.NetListening;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class NetListeningTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));
    @Test
    @DisplayName("RPC net_listening")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetListening response = w3.netListening().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
    