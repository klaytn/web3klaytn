package opensdk.sdk.apis.klaytnDebug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStandardTraceBlockToFileResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStandardTraceBlockToFileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStandardTraceBlockToFileExample() throws IOException {
        String blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb";

        DebugStandardTraceBlockToFileResponse response = sdk.debug.standardTraceBlockToFile(blockHash).send();
        response.getResult();
    }
}
