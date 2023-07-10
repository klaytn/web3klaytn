package opensdk.sdk.apis.debug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugSetGCPercentResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugSetGCPercentTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_setGCPercent")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int percent = 100;

        DebugSetGCPercentResponse response = w3.debugSetGCPercent(percent).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
    }
}
