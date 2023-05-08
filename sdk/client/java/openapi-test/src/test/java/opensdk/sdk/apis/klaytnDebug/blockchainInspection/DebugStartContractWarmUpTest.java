package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartContractWarmUpResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugStartContractWarmUpTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_startContractWarmUp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D";

        DebugStartContractWarmUpResponse response = sdk.debug.startContractWarmUp(address).send();
        response.getResult();
    }
}
