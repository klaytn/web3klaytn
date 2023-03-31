package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.ClientVersion200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayClientVersionApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_clientVersion")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        ClientVersion200Response cr = sdk.klay.clientVersion().send();
        cr.getResult();
    }
}
