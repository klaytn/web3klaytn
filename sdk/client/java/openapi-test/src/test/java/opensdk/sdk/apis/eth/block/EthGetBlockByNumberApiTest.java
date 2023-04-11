package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBlockByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class EthGetBlockByNumberApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC eth_getBlockByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetBlockByNumberResponse er = sdk.eth.getBlockByNumber(
            "0x8f668",
            false)
        .send();
        er.getResult();
    }
}
