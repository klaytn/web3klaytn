package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNodeAddressResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetNodeAddressExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetNodeAddressExample() throws IOException {
        KlayNodeAddressResponse response = sdk.klay.nodeAddress().send();
        response.getResult();
    }
}
