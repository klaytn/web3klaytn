package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVerbosityByIDResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugVerbosityByIDTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_verbosityById")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int id = 1;
        int level = 3;

        DebugVerbosityByIDResponse response = sdk.debug.verbosityByID(id, level).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
