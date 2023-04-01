package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.KlayGetCommitteeSizeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCouncilSizeApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getCouncilSize")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCommitteeSizeResponse gr = sdk.klay.getCouncilSize(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
