package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopPProfResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStopPProfExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStopPProfExample() throws IOException {
        DebugStopPProfResponse response = sdk.debug.stopPProf().send();
        response.getResult();
    }
}
