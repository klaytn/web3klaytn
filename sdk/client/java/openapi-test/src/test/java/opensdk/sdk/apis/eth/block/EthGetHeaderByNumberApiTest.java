package opensdk.sdk.apis.eth.block;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetHeaderByNumberResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetHeaderByNumberApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getHeaderByNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetHeaderByNumberResponse br = sdk.eth.getHeaderByNumber(
            "0x1b4")
        .send();
        assertNotNull(br);
        assertNull(br.getError());
    }
}
