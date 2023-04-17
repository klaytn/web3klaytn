package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopCPUProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStopCPUProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStopCPUProfileExample() throws IOException {
        DebugStopCPUProfileResponse response = sdk.debug.stopCPUProfile().send();
        response.getResult();
    }
}
