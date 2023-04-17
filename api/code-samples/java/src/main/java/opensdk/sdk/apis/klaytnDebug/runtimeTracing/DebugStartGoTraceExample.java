package opensdk.sdk.apis.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartGoTraceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStartGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartGoTraceExample() throws IOException {
        String file = "go.trace";

        DebugStartGoTraceResponse response = sdk.debug.startGoTrace(file).send();
        response.getResult();
    }
}
