package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetCommitteeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetCommitteeApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getCommittee")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetCommitteeResponse response = sdk.klay.getCommittee(
            "0x1b4")
        .send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
