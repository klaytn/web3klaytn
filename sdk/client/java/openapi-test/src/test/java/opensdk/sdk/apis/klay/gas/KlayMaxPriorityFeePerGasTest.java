package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayMaxPriorityFeePerGasResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
@DisplayName("Klay RPC Test")
public class KlayMaxPriorityFeePerGasTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC klay_maxPriorityFeePerGas")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayMaxPriorityFeePerGasResponse response = sdk.klay.maxPriorityFeePerGas().send();
        assertNotNull(response.getResult());
    }
}
