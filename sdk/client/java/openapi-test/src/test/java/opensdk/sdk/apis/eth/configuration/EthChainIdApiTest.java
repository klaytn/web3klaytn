package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthChainIdResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthChainIdApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_chainId")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthChainIdResponse br = sdk.eth.chainId().send();
        br.getResult();
    }
}
