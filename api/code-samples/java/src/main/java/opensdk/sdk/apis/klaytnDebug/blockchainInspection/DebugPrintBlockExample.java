package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugPrintBlockResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugPrintBlockExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugPrintBlockExample() throws IOException {
        DebugPrintBlockResponse response = sdk.debug.printBlock(65120).send();
        response.getResult();
    }
}
