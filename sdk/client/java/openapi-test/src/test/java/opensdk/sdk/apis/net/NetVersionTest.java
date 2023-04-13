package opensdk.sdk.apis.net;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.NetVersionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Eth RPC Test")

public class NetVersionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC net_version")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        NetVersionResponse response = sdk.net.version().send();
        assertNotNull(response.getResult());
    }
}
