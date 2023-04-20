package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugBacktraceAtResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugBacktraceAtExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugBacktraceAtExample() throws IOException {
        String location = "server.go:443";

        DebugBacktraceAtResponse response = sdk.debug.backtraceAt(location).send();
        response.getResult();
    }
}
