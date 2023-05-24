package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugDumpStateTrieResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugDumpStateTrieExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugDumpStateTrieExample() throws IOException {
        DebugDumpStateTrieResponse response = sdk.debug.dumpStateTrie("0x80").send();
        response.getResult();
    }
}
