package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetCodeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetCodeApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getCode")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetCodeResponse br = sdk.eth.getCode(
            "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
            "0x2")
        .send();
        br.getResult();
    }
}
