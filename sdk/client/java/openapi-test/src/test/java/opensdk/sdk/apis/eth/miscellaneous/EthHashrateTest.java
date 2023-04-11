package opensdk.sdk.apis.eth.miscellaneous;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthHashRateResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthHashrateTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC eth_hashrate")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthHashRateResponse response = sdk.eth.hashRate().send();
        response.getResult();
    }

}
