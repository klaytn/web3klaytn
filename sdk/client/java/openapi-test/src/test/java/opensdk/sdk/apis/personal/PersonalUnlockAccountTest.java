package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalUnlockAccountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Personal RPC Test")
public class PersonalUnlockAccountTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC personal_unlockAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xb1ab1f758e0d6398c568936400ea94825c4ebdc2";
        String passphrase = "helloWorld";
        int duration = 30;

        PersonalUnlockAccountResponse response = sdk.personal.unlockAccount(address, passphrase, duration)
                .send();
        response.getResult();
    }
}
