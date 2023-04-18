package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteMutexProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugWriteMutexProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugWriteMutexProfileExample() throws IOException {
        String file = "mutex.profile";

        DebugWriteMutexProfileResponse response = sdk.debug.writeMutexProfile(file).send();
        response.getResult();
    }
}
