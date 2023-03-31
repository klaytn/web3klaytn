package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetCouncil200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCouncilApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getCouncil")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        GetCouncil200Response gr = sdk.klay.getCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
