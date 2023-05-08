package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayCallObject;
import opensdk.sdk.models.KlayEstimateComputationCostResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayEstimateComputationCostApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC klay_estimateComputationCost")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayCallObject callObject = new KlayCallObject();
        callObject.setFrom("0x73718c4980728857f3aa5148e9d1b471efa3a7dd");
        callObject.setTo("0x069942a3ca0dabf495dba872533134205764bc9c");
        callObject.setValue("0x0");
        callObject.setInput("0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039");
        callObject.setGas("0x9999");

        KlayEstimateComputationCostResponse er = sdk.klay.estimateComputationCost(
            callObject,
            "latest")
        .send();
        er.getResult();
    }
}
