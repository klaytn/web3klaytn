package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalImportRawKeyResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalImportRawKeyExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalImportRawKeyExample() throws IOException {
        PersonalImportRawKeyResponse response = sdk.personal
                .importRawKey("45a915e4d060149eb4365960e6a7a45f334393093061116b197e3240065ff2d80x000xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
                        "mypassword")
                .send();
        response.getResult();
    }
}
