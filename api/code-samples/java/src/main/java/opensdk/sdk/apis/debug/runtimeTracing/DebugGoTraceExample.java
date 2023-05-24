package opensdk.sdk.apis.debug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGoTraceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGoTraceExample() throws IOException {
        String file = "go.trace";
        int seconds = 5;

        DebugGoTraceResponse response = sdk.debug.goTrace(file, seconds).send();
        response.getResult();
    }
}
