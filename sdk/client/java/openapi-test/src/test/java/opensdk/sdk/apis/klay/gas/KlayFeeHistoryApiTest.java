package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.FeeHistory200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.List;

@DisplayName("Klay RPC Test")
public class KlayFeeHistoryApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        FeeHistory200Response fr = sdk.klay.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();
        fr.getResult();
    }
}
