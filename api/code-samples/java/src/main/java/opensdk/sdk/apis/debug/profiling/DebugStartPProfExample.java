package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugStartPProfResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugStartPProfExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugStartPProfExample() throws IOException {
        String address = "localhost";
        int port = 6000;
        DebugStartPProfResponse response = sdk.debug.startPProf(address, port).send();
        response.getResult();
    }
}
