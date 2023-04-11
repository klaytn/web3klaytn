package opensdk.sdk.apis.eth.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthMaxPriorityFeePerGasResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class EthMaxPriorityFeePerGasTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC eth_maxPriorityFeePerGas")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthMaxPriorityFeePerGasResponse response = sdk.eth.maxPriorityFeePerGas().send();
        assertNotNull(response.getResult());
    }
}
