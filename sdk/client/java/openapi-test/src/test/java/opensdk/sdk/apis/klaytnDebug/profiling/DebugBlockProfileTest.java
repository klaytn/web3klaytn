package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugBlockProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugBlockProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_blockProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugBlockProfileResponse response = sdk.debug.blockProfile(file, seconds).send();
        response.getResult();
    }
}
