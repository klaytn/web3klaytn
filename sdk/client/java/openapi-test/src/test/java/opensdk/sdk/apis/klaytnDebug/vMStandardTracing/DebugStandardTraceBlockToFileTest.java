package opensdk.sdk.apis.klaytnDebug.vMStandardTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStandardTraceBlockToFileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStandardTraceBlockToFileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_standardTraceBlockToFile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0xf1b4df5d4457d4771740887eeb46de3fc26ae4cddf93d69b1b237c2366ff12eb";

        DebugStandardTraceBlockToFileResponse response = sdk.debug.standardTraceBlockToFile(blockHash).send();
        response.getResult();
    }
}
