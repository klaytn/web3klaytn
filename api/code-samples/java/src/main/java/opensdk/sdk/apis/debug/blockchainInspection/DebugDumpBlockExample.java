package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugDumpBlockResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugDumpBlockExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugDumpBlockExample() throws IOException {
        DebugDumpBlockResponse response = sdk.debug.dumpBlock("0x80").send();
        response.getResult();
    }
}
