package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetStakingInfoResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetStakingInfoExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    void klayGetStakingInfoExample() throws IOException {
        String blogTag = "latest";

        KlayGetStakingInfoResponse response = sdk.klay
                .getStakingInfo(blogTag)
                .send();
        response.getResult();
    }
}
