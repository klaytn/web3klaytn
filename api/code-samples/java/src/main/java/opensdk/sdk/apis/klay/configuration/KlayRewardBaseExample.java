package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayRewardbaseResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayRewardBaseExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayRewardBaseExample() throws IOException {
        KlayRewardbaseResponse response = sdk.klay.rewardbase().send();
        response.getResult();
    }
    
}
