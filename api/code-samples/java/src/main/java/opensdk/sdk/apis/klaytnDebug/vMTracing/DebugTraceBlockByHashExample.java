package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBlockByHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByHashExample() throws IOException {
        String blockHash = "0xda9b1f9e8f14ab909a23309fc5c0bf1691eb51efc8cd61074f0d0f2e007373e0";

        DebugTraceBlockByHashResponse response = sdk.debug.traceBlockByHash(blockHash).send();
        response.getResult();
    }
}
