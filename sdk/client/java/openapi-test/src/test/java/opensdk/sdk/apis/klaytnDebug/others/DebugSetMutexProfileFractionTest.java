package opensdk.sdk.apis.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetMutexProfileFractionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugSetMutexProfileFractionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_setMutexProfileFraction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int rate = 2;

        DebugSetMutexProfileFractionResponse response = sdk.debug.setMutexProfileFraction(rate).send();
        response.getResult();
    }
}
