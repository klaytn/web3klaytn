package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.ListWallets;
import org.web3j.protocol.klaytn.core.method.response.PersonalListWalletsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalListWalletsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_listAccounts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        PersonalListWalletsResponse response = w3.personalListWallets()
                .send();
        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult() instanceof ArrayList<ListWallets>);
        if(response.getResult() instanceof ArrayList<ListWallets>) {
            assertTrue(((ArrayList<ListWallets>) response.getResult()).size() > 0);
        }
    }
}
