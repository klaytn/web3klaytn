package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetHeadResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetHeadExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetHeadExample() throws IOException {
        DebugSetHeadResponse response = sdk.debug.setHead("0x100").send();
        response.getResult();
    }
}
