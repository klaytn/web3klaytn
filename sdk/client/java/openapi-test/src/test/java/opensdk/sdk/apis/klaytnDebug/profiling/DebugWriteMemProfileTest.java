package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteMemProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugWriteMemProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_writeMemProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "mem.profile";

        DebugWriteMemProfileResponse response = sdk.debug.writeMemProfile(file).send();
        response.getResult();
    }
}
