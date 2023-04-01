package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.KlayGetBalanceResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetBalanceApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getBalance")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayGetBalanceResponse gr = sdk.klay.getBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest")
        .send();
        gr.getResult();
    }
}
