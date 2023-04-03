package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionByBlockHashAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionByBlockHashAndIndexApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionByBlockHashAndIndexResponse response = sdk.klay.getTransactionByBlockHashAndIndex(
                "0x451cafae98d61b7458b5cef54402830941432278184453e3ca490eb687317e68",
                        "0x0"
        ).send();
        assertNull(response.getResult());
    }
}
