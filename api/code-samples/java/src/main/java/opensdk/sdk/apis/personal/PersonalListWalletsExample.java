package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalListWalletsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalListWalletsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalListWalletsExample() throws IOException {
        PersonalListWalletsResponse response = sdk.personal.listWallets()
                .send();
        response.getResult();
    }
}
