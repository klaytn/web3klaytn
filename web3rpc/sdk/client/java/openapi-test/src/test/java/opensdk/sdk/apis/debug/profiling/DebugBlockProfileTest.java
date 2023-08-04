package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugBlockProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugBlockProfileTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC debug_blockProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugBlockProfileResponse response = w3.debugBlockProfile(file, seconds).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNull(response.getResult());
    }
}
