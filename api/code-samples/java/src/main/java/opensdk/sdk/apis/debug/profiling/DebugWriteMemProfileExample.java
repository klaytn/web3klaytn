package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteMemProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugWriteMemProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugWriteMemProfileExample() throws IOException {
        String file = "mem.profile";

        DebugWriteMemProfileResponse response = sdk.debug.writeMemProfile(file).send();
        response.getResult();
    }
}
