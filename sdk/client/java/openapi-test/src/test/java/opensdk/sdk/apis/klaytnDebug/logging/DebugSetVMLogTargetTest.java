package opensdk.sdk.apis.klaytnDebug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetVMLogTargetResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

public class DebugSetVMLogTargetTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_setVMLogTarget")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int target = 3;

        DebugSetVMLogTargetResponse response = w3.debugSetVMLogTarget(target).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
