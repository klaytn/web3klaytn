package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalUnlockAccountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalUnlockAccountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalUnlockAccountExample() throws IOException {
        String address = "0xb1ab1f758e0d6398c568936400ea94825c4ebdc2";
        String passphrase = "helloWorld";
        int duration = 30;

        PersonalUnlockAccountResponse response = sdk.personal.unlockAccount(address, passphrase, duration)
                .send();
        response.getResult();
    }
}
