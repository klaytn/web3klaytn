package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EstimateGas200Response;
import opensdk.sdk.models.KlayCallReqParamsInnerAnyOf;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayEstimateGasApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_estimateGas")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayCallReqParamsInnerAnyOf klayCallReqParamsInnerAnyOf = new KlayCallReqParamsInnerAnyOf();
        klayCallReqParamsInnerAnyOf.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        klayCallReqParamsInnerAnyOf.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        klayCallReqParamsInnerAnyOf.setGas("0x100000");
        klayCallReqParamsInnerAnyOf.setGasPrice("0x5d21dba00");
        klayCallReqParamsInnerAnyOf.setValue("0x0");
        klayCallReqParamsInnerAnyOf.setInput("0x8ada066e");

        EstimateGas200Response er = sdk.klay.estimateGas(
            klayCallReqParamsInnerAnyOf)
        .send();
        er.getResult();
    }
}
