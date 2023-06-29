package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalLockAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalLockAccountTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_lockAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        PersonalLockAccountResponse response = w3.personalLockAccount("0xda04fb00e2cb5745cef7d8c4464378202a1673ef")
                .send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof Boolean);
    }
}
