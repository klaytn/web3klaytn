package opensdk.sdk.apis.klaytnDebug.runtimeTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopGoTraceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStopGoTraceExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStopGoTraceExample() throws IOException {
        DebugStopGoTraceResponse response = sdk.debug.stopGoTrace().send();
        response.getResult();
    }
}
