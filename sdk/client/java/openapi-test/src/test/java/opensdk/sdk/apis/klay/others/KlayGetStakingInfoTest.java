package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetStakingInfoResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayGetStakingInfoTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getStakingInfo")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blogTag = "latest";

        KlayGetStakingInfoResponse response = sdk.klay
                .getStakingInfo(blogTag)
                .send();
        assertNotNull(response.getResult());
    }

}
