package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalListAccountsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalListAccountsTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_listAccounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        PersonalListAccountsResponse response = w3.personalListAccounts()
                .send();
        assertNotNull(response);
        assertNull(response.getError());
        assertNotNull(response.getResult());
        if (response.getResult() instanceof ArrayList) {
            if (!((ArrayList) response.getResult()).isEmpty()) {
                assertTrue(((ArrayList) response.getResult()).get(0) instanceof String);
                assertTrue(((String) ((ArrayList) response.getResult()).get(0)).matches("^0x[0-9a-fA-F]+$"));
            }
        }
    }
}
