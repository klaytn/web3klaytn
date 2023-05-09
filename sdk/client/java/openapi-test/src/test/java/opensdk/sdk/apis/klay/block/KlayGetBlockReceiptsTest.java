package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockReceiptsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Klay RPC Test")
public class KlayGetBlockReceiptsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getBlockReceipts")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577";

        KlayGetBlockReceiptsResponse response = sdk.klay.getBlockReceipts(blockHash).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
