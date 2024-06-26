package opensdk.sdk.apis.subbridge;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.klaytn.core.method.response.SubbridgeParentOperatorResponse;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class SubbridgeParentOperatorTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC main_bridge")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        SubbridgeParentOperatorResponse response = w3.subbridgeParentOperator().send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
    }
}
