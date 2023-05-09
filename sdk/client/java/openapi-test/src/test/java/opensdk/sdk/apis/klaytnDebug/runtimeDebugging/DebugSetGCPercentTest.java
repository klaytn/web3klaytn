package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetGCPercentResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugSetGCPercentTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_setGCPercent")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int percent = 100;

        DebugSetGCPercentResponse response = sdk.debug.setGCPercent(percent).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
