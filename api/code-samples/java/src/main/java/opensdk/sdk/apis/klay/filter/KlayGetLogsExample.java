package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.FilterOptions;
import opensdk.sdk.models.KlayGetLogsResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetLogsExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetLogsExample() throws IOException {
        FilterOptions options = new FilterOptions();
        options.setFromBlock("latest");
        options.setToBlock("latest");
        options.setAddress("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        KlayGetLogsResponse response = sdk.klay.getLogs(options).send();
        response.getResult();
    }

}
