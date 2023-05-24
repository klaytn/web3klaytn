package opensdk.sdk.apis.debug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugWriteBlockProfileResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Debug RPC Test")
public class DebugWriteBlockProfileTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC debug_writeBlockProfile")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String file = "block.profile";

        DebugWriteBlockProfileResponse response = sdk.debug.writeBlockProfile(file).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
