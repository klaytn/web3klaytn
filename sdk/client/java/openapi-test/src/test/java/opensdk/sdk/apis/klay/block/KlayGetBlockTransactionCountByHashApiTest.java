package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBlockTransactionCountByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetBlockTransactionCountByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_getBlockTransactionCountByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBlockTransactionCountByHashResponse gr = sdk.klay.getBlockTransactionCountByHash(
            "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577")
        .send();
        gr.getResult();
    }
}
