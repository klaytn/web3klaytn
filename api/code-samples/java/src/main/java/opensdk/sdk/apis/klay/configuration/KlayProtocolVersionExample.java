package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayProtocolVersionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayProtocolVersionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayProtocolVersionExample() throws IOException {
        KlayProtocolVersionResponse response = sdk.klay.protocolVersion().send();
        response.getResult();
    }
}
