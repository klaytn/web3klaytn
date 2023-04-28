package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetFilterLogsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetFilterLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetFilterLogsExample() throws IOException {
        String quantity = "0x16";

        KlayGetFilterLogsResponse response = sdk.klay.getFilterLogs(quantity).send();
        response.getResult();
    }
}
