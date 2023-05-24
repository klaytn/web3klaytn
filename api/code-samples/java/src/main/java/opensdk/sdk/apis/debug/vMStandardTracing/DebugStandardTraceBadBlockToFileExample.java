package opensdk.sdk.apis.debug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStandardTraceBadBlockToFileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStandardTraceBadBlockToFileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStandardTraceBlockToFileExample() throws IOException {
        String blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6";

        DebugStandardTraceBadBlockToFileResponse response = sdk.debug.standardTraceBadBlockToFile(blockHash, null).send();
        response.getResult();
    }
}
