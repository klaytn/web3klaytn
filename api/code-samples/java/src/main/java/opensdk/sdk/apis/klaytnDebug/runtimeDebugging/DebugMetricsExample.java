package opensdk.sdk.apis.klaytnDebug.runtimeDebugging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugMetricsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugMetricsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugMetricsExample() throws IOException {
        boolean raw = true;

        DebugMetricsResponse response = sdk.debug.metrics(raw).send();
        response.getResult();
    }
}
