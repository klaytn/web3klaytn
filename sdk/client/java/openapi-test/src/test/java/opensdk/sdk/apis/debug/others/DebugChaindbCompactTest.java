package opensdk.sdk.apis.debug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugChaindbCompactResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugChaindbCompactTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_chaindbCompact")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugChaindbCompactResponse response = sdk.debug.chaindbCompact().send();
        response.getResult();
    }
}
