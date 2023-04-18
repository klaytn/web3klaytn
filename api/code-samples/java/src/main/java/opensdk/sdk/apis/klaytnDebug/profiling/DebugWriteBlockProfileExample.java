package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteBlockProfileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugWriteBlockProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugWriteBlockProfileExample() throws IOException {
        String file = "block.profile";

        DebugWriteBlockProfileResponse response = sdk.debug.writeBlockProfile(file).send();
        response.getResult();
    }
}
