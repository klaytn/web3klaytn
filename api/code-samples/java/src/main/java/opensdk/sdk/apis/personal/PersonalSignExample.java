package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalSignResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalSignExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalSignExample() throws IOException {
        String message = "0xdead";
        String address = "0xb44b66f0d6ea803175f921018cba7e914fed25b9";
        String passphrase = "helloWorld";

        PersonalSignResponse response = sdk.personal.sign(message, address, passphrase)
                .send();
        response.getResult();
    }
}
