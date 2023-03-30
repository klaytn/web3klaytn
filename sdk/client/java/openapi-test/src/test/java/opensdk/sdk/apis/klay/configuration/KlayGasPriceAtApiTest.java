package opensdk.sdk.apis.klay.configuration;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GasPriceAt200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGasPriceAtApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_gasPriceAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //given
        String blockNumber = "0x64";
        // when
        GasPriceAt200Response response = sdk.klay.gasPriceAt(blockNumber).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
