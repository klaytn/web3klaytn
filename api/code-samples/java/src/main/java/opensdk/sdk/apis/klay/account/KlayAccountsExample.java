package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayAccountsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayAccountsExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayAccountsExample() throws IOException {
        KlayAccountsResponse ar = sdk.klay.accounts().send();
        ar.getResult();
    }
}
