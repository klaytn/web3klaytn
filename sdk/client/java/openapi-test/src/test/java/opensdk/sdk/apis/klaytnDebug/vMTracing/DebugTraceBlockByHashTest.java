package opensdk.sdk.apis.klaytnDebug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugTraceBlockByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockByHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_traceBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0x31c582be88975640ca619a0361a55018de384dc0eea2426edff55551d6eb1708";

        DebugTraceBlockByHashResponse response = sdk.debug.traceBlockByHash(blockHash).send();
        response.getResult();
    }
}