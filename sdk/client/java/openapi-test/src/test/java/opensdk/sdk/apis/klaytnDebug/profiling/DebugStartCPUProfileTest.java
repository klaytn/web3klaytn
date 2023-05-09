package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartCPUProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugStartCPUProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startCPUProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "cpu.profile";

        DebugStartCPUProfileResponse response = sdk.debug.startCPUProfile(file).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
