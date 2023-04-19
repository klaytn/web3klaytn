package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetGCPercentResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetGCPercentExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetGCPercentExample() throws IOException {
        int percent = 100;

        DebugSetGCPercentResponse response = sdk.debug.setGCPercent(percent).send();
        response.getResult();
    }
}
