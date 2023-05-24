package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBadBlockResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBadBlockExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBadBlockExample() throws IOException {
        String blockHash = "0x1d5ba00e313a81ae6d409d459c153327072665d9ea2f47608369722baf0cfbb6";

        DebugTraceBadBlockResponse response = sdk.debug.traceBadBlock(blockHash, null).send();
        response.getResult();
    }
}
