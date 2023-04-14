package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetFilterChangesResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetFilterChangesExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetFilterChangeExample() throws IOException {
        KlayGetFilterChangesResponse response = sdk.klay.getFilterChanges("0x1aa7b9746d4192e90fb0acd89c514375").send();
        response.getResult();
    }
}
