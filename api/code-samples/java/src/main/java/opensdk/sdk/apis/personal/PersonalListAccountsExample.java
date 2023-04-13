package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalListAccountsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalListAccountsExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalListAccountExample() throws IOException {
        PersonalListAccountsResponse response = sdk.personal.listAccounts()
                .send();
        response.getResult();
    }
}
