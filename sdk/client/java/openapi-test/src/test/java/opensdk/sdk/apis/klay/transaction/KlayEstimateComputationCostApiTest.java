package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EstimateComputationCost200Response;
import opensdk.sdk.models.KlayCallReqParamsInner;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayEstimateComputationCostApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_estimateComputationCost")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayCallReqParamsInner klayCallReqParamsInner = new KlayCallReqParamsInner();
        klayCallReqParamsInner.setFrom("0x73718c4980728857f3aa5148e9d1b471efa3a7dd");
        klayCallReqParamsInner.setTo("0x069942a3ca0dabf495dba872533134205764bc9c");
        klayCallReqParamsInner.setValue("0x0");
        klayCallReqParamsInner.setInput("0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039");
        EstimateComputationCost200Response er = sdk.klay.estimateComputationCost(
            klayCallReqParamsInner,
            "latest")
        .send();
        er.getResult();
    }
}
