package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartPProfResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStartPProfTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startPProf")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "localhost";
        int port = 6000;
        DebugStartPProfResponse response = sdk.debug.startPProf(address, port).send();
        response.getResult();
    }
}
