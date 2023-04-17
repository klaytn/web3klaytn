package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugCpuProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugCPUProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugCpuProfileExample() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugCpuProfileResponse response = sdk.debug.cpuProfile(file, seconds).send();
        response.getResult();
    }
}
