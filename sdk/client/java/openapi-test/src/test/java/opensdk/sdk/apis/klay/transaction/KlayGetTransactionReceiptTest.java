package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionReceiptResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayGetTransactionReceiptTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getTransactionByReceipt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionReceiptResponse response = sdk.klay.getTransactionReceipt(
                "0xaca5d9a1ed8b86b1ef61431b2bedfc99a66eaefc3a7e1cffdf9ff53653956a67"
        ).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
