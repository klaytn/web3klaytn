package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVmoduleResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugVModuleExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVModuleExample() throws IOException {
        String module = "p2p=4";

        DebugVmoduleResponse response = sdk.debug.vmodule(module).send();
        response.getResult();
    }
}
