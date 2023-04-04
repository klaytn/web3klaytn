package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayIsParallelDBWriteResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayIsParallelDBWriteExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void klayIsParallelDBWriteExample() throws IOException {
        KlayIsParallelDBWriteResponse response = sdk.klay.isParallelDBWrite().send();
        response.getResult();
    }
}
