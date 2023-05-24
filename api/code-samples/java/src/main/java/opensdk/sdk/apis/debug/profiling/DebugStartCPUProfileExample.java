package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartCPUProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStartCPUProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartCPUProfileExample() throws IOException {
        String file = "cpu.profile";

        DebugStartCPUProfileResponse response = sdk.debug.startCPUProfile(file).send();
        response.getResult();
    }
}
