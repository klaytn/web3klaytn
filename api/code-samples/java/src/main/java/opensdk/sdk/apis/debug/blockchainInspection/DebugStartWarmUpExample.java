package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartWarmUpResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStartWarmUpExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartWarmUpExample() throws IOException {
        DebugStartWarmUpResponse response = sdk.debug.startWarmUp().send();
        response.getResult();
    }
}
