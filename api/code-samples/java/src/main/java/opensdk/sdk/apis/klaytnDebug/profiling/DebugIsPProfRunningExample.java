package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugIsPProfRunningResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugIsPProfRunningExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugIsPProfRunningExample() throws IOException {
        DebugIsPProfRunningResponse response = sdk.debug.isPProfRunning().send();
        response.getResult();
    }
}
