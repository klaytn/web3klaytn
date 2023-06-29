package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.NetPeerCountByTypeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")

public class NetPeerCountByTypeTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC net_peerCountByType")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetPeerCountByTypeResponse response = w3.netPeerCountByType().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if(response.getResult() instanceof LinkedHashMap<?,?>)
            assertTrue(((LinkedHashMap<?,?>)response.getResult()).get("total") instanceof Integer);
    }

}
