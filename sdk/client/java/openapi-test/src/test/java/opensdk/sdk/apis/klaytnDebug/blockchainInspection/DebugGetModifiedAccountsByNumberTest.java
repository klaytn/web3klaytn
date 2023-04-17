package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetModifiedAccountsByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugGetModifiedAccountsByNumberTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_getModifiedAccountsByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int startBlockNum = 171904;
        int endBlockNum = 172160;
        DebugGetModifiedAccountsByNumberResponse response = sdk.debug.getModifiedAccountsByNumber(startBlockNum, endBlockNum).send();
        response.getResult();
    }
}
