package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugPrintBlockResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugPrintBlockExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugPrintBlockExample() throws IOException {
        String blockNumber = "0x80";

        DebugPrintBlockResponse response = sdk.debug.printBlock(blockNumber).send();
        response.getResult();
    }
}
