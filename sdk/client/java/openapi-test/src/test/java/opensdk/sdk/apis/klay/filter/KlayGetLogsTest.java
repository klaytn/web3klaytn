package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.FilterOptions;
import opensdk.sdk.models.KlayGetLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;


public class KlayGetLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        FilterOptions options = new FilterOptions();
        KlayGetLogsResponse response = sdk.klay.getLogs(options).send();
        response.getResult();
    }
}
