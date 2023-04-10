package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetStakingInfoResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetStakingInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetStakingInfoExample() throws IOException {
        String blockTag = "latest";

        KlayGetStakingInfoResponse response = sdk.klay
                .getStakingInfo(blockTag)
                .send();
        response.getResult();
    }
}
