package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugMemStatsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugMemStatsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugMemStatsExample() throws IOException {
        DebugMemStatsResponse response = sdk.debug.memStats().send();
        response.getResult();
    }
}
