package opensdk.sdk.apis.debug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetMutexProfileFractionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugSetMutexProfileFractionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_setMutexProfileFraction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int rate = 2;

        DebugSetMutexProfileFractionResponse response = w3.debugSetMutexProfileFraction(rate).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertNull(response.getResult());
    }
}
