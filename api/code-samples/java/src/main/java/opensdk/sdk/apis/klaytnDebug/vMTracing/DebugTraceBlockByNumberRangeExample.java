package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByNumberRangeResponse;
import opensdk.sdk.models.TracingOptions;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBlockByNumberRangeExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugTraceBlockByNumberRangeExample() throws IOException {
        int startBlockNum = 21;
        int endBlockNum = 30;
        TracingOptions tracingOptions = new TracingOptions();
        DebugTraceBlockByNumberRangeResponse response = sdk.debug.traceBlockByNumberRange(startBlockNum, endBlockNum, tracingOptions).send();
        response.getResult();
    }
}
