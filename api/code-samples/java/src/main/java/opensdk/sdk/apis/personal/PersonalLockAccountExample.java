package opensdk.sdk.apis.personal;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.PersonalLockAccountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class PersonalLockAccountExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void personalLockAccountExample() throws IOException {
        PersonalLockAccountResponse response = sdk.personal.lockAccount("0xda04fb00e2cb5745cef7d8c4464378202a1673ef")
                .send();
        response.getResult();
    }
}
