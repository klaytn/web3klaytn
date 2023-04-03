package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayClientVersionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayClientVersionExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayClientVersionExample() throws IOException {
        KlayClientVersionResponse cr = sdk.klay.clientVersion().send();
        cr.getResult();
    }
}
