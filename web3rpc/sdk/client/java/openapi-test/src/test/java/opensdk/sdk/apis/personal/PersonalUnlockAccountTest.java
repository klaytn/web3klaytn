package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.PersonalUnlockAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Personal RPC Test")
public class PersonalUnlockAccountTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC personal_unlockAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xb1ab1f758e0d6398c568936400ea94825c4ebdc2";
        String passphrase = "helloWorld";
        int duration = 30;

        PersonalUnlockAccountResponse response = w3.personalUnlockAccount(address, passphrase, duration)
                .send();
        assertNotNull(response);
        assertNull(response.getError());;
        assertTrue(response.getResult() instanceof Boolean);
    }
}
