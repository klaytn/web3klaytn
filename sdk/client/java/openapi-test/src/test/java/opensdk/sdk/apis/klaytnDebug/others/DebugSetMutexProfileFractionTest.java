package opensdk.sdk.apis.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetMutexProfileFractionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugSetMutexProfileFractionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_setMutexProfileFraction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int rate = 2;

        DebugSetMutexProfileFractionResponse response = sdk.debug.setMutexProfileFraction(rate).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
