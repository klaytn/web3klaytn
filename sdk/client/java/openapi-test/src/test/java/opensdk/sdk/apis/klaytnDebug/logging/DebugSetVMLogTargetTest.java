package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetVMLogTargetResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetVMLogTargetTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_setVMLogTarget")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int target = 3;

        DebugSetVMLogTargetResponse response = sdk.debug.setVMLogTarget(target).send();
        response.getResult();
    }
}
