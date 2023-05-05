package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGcStatsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugGCStatsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGCStatsExample() throws IOException {
        DebugGcStatsResponse response = sdk.debug.gcStats().send();
        response.getResult();
    }
}
