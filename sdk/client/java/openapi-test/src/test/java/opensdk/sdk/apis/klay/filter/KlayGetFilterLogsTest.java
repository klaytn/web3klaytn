package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetFilterLogsResponse;
import opensdk.sdk.utils.EthUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")

public class KlayGetFilterLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getFilterLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String quantity = EthUtils.getEthFilterId().getResult();
        KlayGetFilterLogsResponse response = sdk.klay.getFilterLogs(quantity).send();
        response.getResult();
    }
}
