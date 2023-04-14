package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalNewAccountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalNewAccountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    void personalNewAccountExample() throws IOException {
        PersonalNewAccountResponse response = sdk.personal.newAccount("helloWorld").send();
        response.getResult();
    }
}
