package opensdk.sdk.apis.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetBlockProfileRateResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetBlockProfileRateExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetBlockProfileRateExample() throws IOException {
        int rate = 3;

        DebugSetBlockProfileRateResponse response = sdk.debug.setBlockProfileRate(rate).send();
        response.getResult();
    }
}
