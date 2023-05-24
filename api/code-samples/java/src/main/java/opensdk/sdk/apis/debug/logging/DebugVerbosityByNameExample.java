package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVerbosityByNameResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugVerbosityByNameExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityByNameExample() throws IOException {
        String name = "API";
        int level = 3;

        DebugVerbosityByNameResponse response = sdk.debug.verbosityByName(name, level).send();
        response.getResult();
    }
}
