package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetChainConfigResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetChainConfigExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetChainConfigExample() throws IOException {
        Integer blogNumberOrTag = 100;
        KlayGetChainConfigResponse response = sdk.klay.getChainConfig(blogNumberOrTag).send();
        response.getResult();
    }
}
