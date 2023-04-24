package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalReplaceRawKeyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalReplaceRawKeyExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalReplaceRawKeyExample() throws IOException {
        String key = "5b49a622d8360b719ed45b75f3db77c04d32224800c8ea113bd03bb1d35562cd";
        String oldPassphrase = "mypassword";
        String newPassphrase = "mynewpassword";

        PersonalReplaceRawKeyResponse response = sdk.personal.replaceRawKey(key, oldPassphrase, newPassphrase)
                .send();
        response.getResult();
    }
}
