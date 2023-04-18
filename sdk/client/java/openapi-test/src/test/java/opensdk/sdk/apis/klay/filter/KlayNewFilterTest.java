package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.FilterOptions;
import opensdk.sdk.models.KlayNewFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayNewFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_newFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayNewFilterResponse response = sdk.klay.newFilter().send();
        response.getResult();
    }
}
