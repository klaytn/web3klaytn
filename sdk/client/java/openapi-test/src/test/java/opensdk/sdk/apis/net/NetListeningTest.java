package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetListeningResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class NetListeningTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC net_listening")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetListeningResponse response = sdk.net.listening().send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
