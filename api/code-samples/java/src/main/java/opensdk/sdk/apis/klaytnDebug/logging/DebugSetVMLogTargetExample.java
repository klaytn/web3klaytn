package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetVMLogTargetResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetVMLogTargetExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetVMLogTargetExample() throws IOException {
        int target = 3;

        DebugSetVMLogTargetResponse response = sdk.debug.setVMLogTarget(target).send();
        response.getResult();
    }
}
