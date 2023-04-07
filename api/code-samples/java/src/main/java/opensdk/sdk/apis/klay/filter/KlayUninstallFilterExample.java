package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayUninstallFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayUninstallFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayUninstallFilterExample() throws IOException {
        String filter = "0xd32fd16b6906e67f6e2b65dcf48fc272";
        KlayUninstallFilterResponse response = sdk.klay.uninstallFilter(filter).send();
        response.getResult();
    }
}
