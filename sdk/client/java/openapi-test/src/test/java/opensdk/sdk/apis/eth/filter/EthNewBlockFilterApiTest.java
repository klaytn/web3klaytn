package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewBlockFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthNewBlockFilterApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    @Test
    @DisplayName("RPC eth_newBlockFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthNewBlockFilterResponse br = sdk.eth.newBlockFilter().send();
        br.getResult();
    }
}
