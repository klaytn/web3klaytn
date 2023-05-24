package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStopWarmUpResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStopWarmUpExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        DebugStopWarmUpResponse response = sdk.debug.stopWarmUp().send();
        response.getResult();
    }
}
