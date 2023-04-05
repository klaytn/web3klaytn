package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetTransactionBySenderTxHashResponse;
import opensdk.sdk.models.KlayGetTransactionReceiptBySenderTxHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class KlayGetTransactionReceiptBySenderTxHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getTransactionReceiptBySenderTxHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetTransactionReceiptBySenderTxHashResponse response = sdk.klay.getTransactionReceiptBySenderTxHash(
                "0x21b2919b89278ca786226f10edbaadced7381dbd73df546a4823547aaebffa58"
        ).send();
        assertNotNull(response.getResult());
    }
}
