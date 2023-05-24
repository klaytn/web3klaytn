package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByHashResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBlockByHashExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByHashExample() throws IOException {
        String blockHash = "0xed110b330152df2022d40fa3c38987643034aa56fc96079fb6c67b66a6ed4f19";

        DebugTraceBlockByHashResponse response = sdk.debug.traceBlockByHash(blockHash, null).send();
        response.getResult();
    }
}
