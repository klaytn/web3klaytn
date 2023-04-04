package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRewardsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetRewardsExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetRewardsExample() throws IOException {
        KlayGetRewardsResponse gr = sdk.klay.getRewards(
            "0x1000")
        .send();
        gr.getResult();
    }
}
