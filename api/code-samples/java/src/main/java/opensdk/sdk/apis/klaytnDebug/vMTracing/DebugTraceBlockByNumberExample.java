package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByNumberResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBlockByNumberExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByNumberExample() throws IOException {
        int blockNum = 21;

        DebugTraceBlockByNumberResponse response = sdk.debug.traceBlockByNumber(blockNum).send();
        response.getResult();
    }
}
