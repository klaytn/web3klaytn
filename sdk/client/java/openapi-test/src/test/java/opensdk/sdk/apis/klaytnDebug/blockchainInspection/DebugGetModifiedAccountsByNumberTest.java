package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetModifiedAccountsByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugGetModifiedAccountsByNumberTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC debug_getModifiedAccountsByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int startBlockNum = 171904;
        int endBlockNum = 172160;
        DebugGetModifiedAccountsByNumberResponse response = w3.debugGetModifiedAccountsByNumber(startBlockNum, endBlockNum).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
