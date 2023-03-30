package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetBalance200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetBalanceApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getBalance")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //given
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        String blockNumber = "latest";
        // when
        GetBalance200Response response = sdk.klay.getBalance(address, blockNumber).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
