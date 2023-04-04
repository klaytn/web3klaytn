package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayNewBlockFilterResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayNewBlockFilterExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayNewBlockFilterExample() throws IOException {
        KlayNewBlockFilterResponse response = sdk.klay.newBlockFilter().send();
        response.getResult();
    }
}
