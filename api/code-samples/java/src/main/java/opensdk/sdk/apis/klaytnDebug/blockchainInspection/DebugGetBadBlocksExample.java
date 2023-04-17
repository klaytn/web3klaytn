package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetBadBlocksResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugGetBadBlocksExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGetBadBlocksExample() throws IOException {
        DebugGetBadBlocksResponse response = sdk.debug.getBadBlocks().send();
        response.getResult();
    }
}
