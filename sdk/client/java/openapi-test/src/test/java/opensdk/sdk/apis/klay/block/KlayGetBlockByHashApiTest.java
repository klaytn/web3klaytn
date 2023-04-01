package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.KlayGetBlockByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetBlockByHashApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getBlockByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBlockByHashResponse gr = sdk.klay.getBlockByHash(
            "0xb8deae63002d2b6aa33247c8ef545383ee0fd2282ac9b49dbbb74114389ddb5c",
            true)
        .send();
        gr.getResult();
    }
}