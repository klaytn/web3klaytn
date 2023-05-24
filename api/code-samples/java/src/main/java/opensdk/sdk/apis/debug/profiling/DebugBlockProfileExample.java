package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugBlockProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugBlockProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugBlockProfileExample() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugBlockProfileResponse response = sdk.debug.blockProfile(file, seconds).send();
        response.getResult();
    }
}
