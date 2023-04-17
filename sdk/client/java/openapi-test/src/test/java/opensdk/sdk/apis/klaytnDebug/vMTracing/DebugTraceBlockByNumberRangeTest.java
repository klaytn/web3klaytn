package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByNumberRangeResponse;
import opensdk.sdk.models.TracingOptions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockByNumberRangeTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_getModifiedAccountsByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int startBlockNum = 21;
        int endBlockNum = 30;
        TracingOptions tracingOptions = new TracingOptions();
        DebugTraceBlockByNumberRangeResponse response = sdk.debug.traceBlockByNumberRange(startBlockNum, endBlockNum, tracingOptions).send();
        response.getResult();
    }
}
