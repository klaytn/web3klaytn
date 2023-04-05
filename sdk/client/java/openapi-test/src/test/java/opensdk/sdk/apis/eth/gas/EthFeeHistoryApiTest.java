package opensdk.sdk.apis.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthFeeHistoryResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.List;

@DisplayName("Eth RPC Test")
public class EthFeeHistoryApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC eth_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthFeeHistoryResponse br = sdk.eth.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();
        br.getResult();
    }
}
