package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetBlockRlpResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugGetBlockRlpExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugGetBlockRlpExample() throws IOException {
        DebugGetBlockRlpResponse response = sdk.debug.getBlockRlp("earliest").send();
        response.getResult();
    }
}
