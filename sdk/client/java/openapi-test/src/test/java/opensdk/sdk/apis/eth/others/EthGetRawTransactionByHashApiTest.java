package opensdk.sdk.apis.eth.others;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetRawTransactionByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetRawTransactionByHashApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC eth_getRawTransactionByBlockNumberAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetRawTransactionByHashResponse er = sdk.eth.getRawTransactionByHash(
            "0x5bbcde52084defa9d1c7068a811363cc27a25c80d7e495180964673aa5f47687")
        .send();
        assertNotNull(er);
        assertNull(er.getError());
    }
}
