package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugVerbosityByIDResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugVerbosityByIDExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugVerbosityByIDExample() throws IOException {
        int id = 1;
        int level = 3;

        DebugVerbosityByIDResponse response = sdk.debug.verbosityByID(id, level).send();
        response.getResult();
    }
}
