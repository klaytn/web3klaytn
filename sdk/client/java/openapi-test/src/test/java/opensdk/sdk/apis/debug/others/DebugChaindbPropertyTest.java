package opensdk.sdk.apis.debug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugChaindbPropertyResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugChaindbPropertyTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_chaindbProperty")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String property = "0xe17d821e9a8a8736b9aea8c2de1f3a4934ac0a2f";

        DebugChaindbPropertyResponse response = sdk.debug.chaindbProperty(property).send();
        response.getResult();
    }
}
