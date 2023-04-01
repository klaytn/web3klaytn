package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.KlayChainIDResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayChainIdApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_chainID")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayChainIDResponse cr = sdk.klay.chainID().send();
        cr.getResult();
    }
}
