package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetBlockProfileRateResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugSetBlockProfileRateTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_setBlockProfileRate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int rate = 3;

        DebugSetBlockProfileRateResponse response = sdk.debug.setBlockProfileRate(rate).send();
        response.getResult();
    }
}
