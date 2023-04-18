package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteMutexProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugWriteMutexProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_writeMutextProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "mutex.profile";

        DebugWriteMutexProfileResponse response = sdk.debug.writeMutexProfile(file).send();
        response.getResult();
    }
}
