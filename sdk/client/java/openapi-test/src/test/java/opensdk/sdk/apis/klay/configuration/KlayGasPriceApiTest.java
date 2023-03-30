package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GasPrice200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGasPriceApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_gasPrice")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // when
        GasPrice200Response response = sdk.klay.gasPrice().send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
