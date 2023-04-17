package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugDumpStateTrieResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugDumpStateTrieTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_dumpStateTrie")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugDumpStateTrieResponse response = sdk.debug.dumpStateTrie("0x80").send();
        response.getResult();
    }
}
