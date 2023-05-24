package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockFromFileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugTraceBlockFromFileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String fileName = "/home/sotatek/block.rlp";

        DebugTraceBlockFromFileResponse response = sdk.debug.traceBlockFromFile(fileName, null).send();
        response.getResult();
    }
}
