package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugFreeOSMemoryResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugFreeOSMemoryExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugFreeOSMemoryExample() throws IOException {
        DebugFreeOSMemoryResponse response = sdk.debug.freeOSMemory().send();
        response.getResult();
    }
}
