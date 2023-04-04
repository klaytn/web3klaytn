package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCouncilResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetCouncilApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getCouncil")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCouncilResponse gr = sdk.klay.getCouncil(
            "0x1b4")
        .send();
        gr.getResult();
    }
}
