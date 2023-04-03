package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayBlockNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayBlockNumberApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayBlockNumberResponse br = sdk.klay.blockNumber().send();
        br.getResult();
    }
}
