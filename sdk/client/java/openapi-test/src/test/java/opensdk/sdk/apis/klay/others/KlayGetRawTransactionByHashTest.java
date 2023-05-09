package opensdk.sdk.apis.klay.others;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetRawTransactionByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetRawTransactionByHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getRawTransactionByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String transactionHash = "0x29b6cd965c7d9a53a6f068da259dce1d3810ba79fff8eebac5d4da14754e67e6";

        KlayGetRawTransactionByHashResponse response = sdk.klay
                .getRawTransactionByHash(transactionHash)
                .send();

        assertNotNull(response);
        assertNull(response.getError());
    }

}
