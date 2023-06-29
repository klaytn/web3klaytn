package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.Assertions;
import org.web3j.protocol.klaytn.core.method.response.DebugStartContractWarmUpResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.web3j.protocol.http.HttpService;
@DisplayName("Debug RPC Test")
public class DebugStartContractWarmUpTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_startContractWarmUp")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xfD1d63a152f7A7Ef14bd157C1c73c5bC3239EA5D";

        DebugStartContractWarmUpResponse response = w3.debugStartContractWarmUp(address).send();

        if(response == null) {
            assertNull(response.getResult());
        } else {
            assertNotNull(response.getError());
        }
    }
}
