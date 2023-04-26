package opensdk.sdk.apis.klaytnDebug.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugSetMutexProfileFractionResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class DebugSetMutexProfileFractionExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugSetMutexProfileFractionExample() throws IOException {
        int rate = 2;

        DebugSetMutexProfileFractionResponse response = sdk.debug.setMutexProfileFraction(rate).send();
        response.getResult();
    }
}
