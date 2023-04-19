package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVmoduleResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugVModuleTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_vmodule")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String module = "p2p=4";

        DebugVmoduleResponse response = sdk.debug.vmodule(module).send();
        response.getResult();
    }
}
