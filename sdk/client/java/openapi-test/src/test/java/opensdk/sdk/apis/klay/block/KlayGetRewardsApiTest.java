package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRewardsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetRewardsApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getRewards")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetRewardsResponse gr = sdk.klay.getRewards(
            "0x1000")
        .send();
        gr.getResult();
    }
}
