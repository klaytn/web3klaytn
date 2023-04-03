package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayChainIDResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayChainIdApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC klay_chainID")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayChainIDResponse cr = sdk.klay.chainID().send();
        cr.getResult();
    }
}
