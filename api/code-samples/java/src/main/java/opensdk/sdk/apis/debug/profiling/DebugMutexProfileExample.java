package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugMutexProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugMutexProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugMutexProfileExample() throws IOException {
        String file = "mutex.profile";
        int seconds = 5;

        DebugMutexProfileResponse response = sdk.debug.mutexProfile(file, seconds).send();
        response.getResult();
    }
}
