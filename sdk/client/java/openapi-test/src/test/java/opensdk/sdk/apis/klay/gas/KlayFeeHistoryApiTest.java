package opensdk.sdk.apis.klay.gas;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.FeeHistory200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayFeeHistoryApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //given
        String blockCount = "0x10";
        String blockTag = "latest";
        List<Double> rewardPercentiles = List.of(0.1, 0.2, 0.3);
        // when
        FeeHistory200Response response = sdk.klay.feeHistory(blockCount, blockTag, rewardPercentiles).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
