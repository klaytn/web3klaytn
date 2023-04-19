package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVerbosityResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugVerbosityExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityExample() throws IOException {
        int level = 3;

        DebugVerbosityResponse response = sdk.debug.verbosity(level).send();
        response.getResult();
    }
}
