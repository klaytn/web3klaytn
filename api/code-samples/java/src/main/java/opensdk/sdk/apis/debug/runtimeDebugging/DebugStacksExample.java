package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStacksResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStacksExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStacksExample() throws IOException {
        DebugStacksResponse response = sdk.debug.stacks().send();
        response.getResult();
    }
}
