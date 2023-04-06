package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRawTransactionByBlockNumberAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayGetRawTransactionByBlockNumberAndIndexTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getRawTransactionByBlockHashAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blogTag = "0x27";
        String index = "0x0";

        KlayGetRawTransactionByBlockNumberAndIndexResponse response = sdk.klay
                .getRawTransactionByBlockNumberAndIndex(blogTag, index)
                .send();
        assertNotNull(response.getResult());
    }
}
