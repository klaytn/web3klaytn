package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVerbosityByNameResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugVerbosityByNameTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_verbosityByName")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String name = "API";
        int level = 3;

        DebugVerbosityByNameResponse response = sdk.debug.verbosityByName(name, level).send();
        response.getResult();
    }
}
