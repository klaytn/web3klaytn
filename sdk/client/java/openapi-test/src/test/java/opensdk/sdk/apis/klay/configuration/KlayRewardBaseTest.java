package opensdk.sdk.apis.klay.configuration;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayRewardbaseResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class KlayRewardBaseTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_rewardbase")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayRewardbaseResponse response = sdk.klay.rewardbase().send();
        assertNotNull(response.getResult());
    }
}
