package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayEstimateGasApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_estimateGas")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //given
        KlayCallReqParamsInnerAnyOf klayCallReqParamsInnerAnyOf = new KlayCallReqParamsInnerAnyOf();
        klayCallReqParamsInnerAnyOf.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        klayCallReqParamsInnerAnyOf.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        klayCallReqParamsInnerAnyOf.setGas("0x100000");
        klayCallReqParamsInnerAnyOf.setGasPrice("0x5d21dba00");
        klayCallReqParamsInnerAnyOf.setValue("0x0");
        klayCallReqParamsInnerAnyOf.setInput("0x8ada066e");
        // when
        EstimateGas200Response response = sdk.klay.estimateGas(klayCallReqParamsInnerAnyOf).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
