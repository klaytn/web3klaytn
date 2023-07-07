package opensdk.sdk.apis.debug.others;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugGetModifiedStorageNodesByNumberResponse;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.http.HttpService;

@DisplayName("Debug RPC Test")
public class DebugGetModifiedStorageNodesByNumberTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Disabled
    @Test
    @DisplayName("RPC debug_storageRangeAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0x73a7d19d14f7dfac5b799e405e22133b2adc57a6";
        Integer startBlockNum = 100;
        Integer endBlockNum = 200;
        DebugGetModifiedStorageNodesByNumberResponse response = w3.debugGetModifiedStorageNodesByNumber(
                address, startBlockNum, endBlockNum).send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
