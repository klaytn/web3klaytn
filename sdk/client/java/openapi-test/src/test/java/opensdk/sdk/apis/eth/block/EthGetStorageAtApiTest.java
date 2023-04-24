package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetStorageAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetStorageAtApiTest {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC eth_getStorageAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthGetStorageAtResponse br = sdk.eth.getStorageAt(
            "0x295a70b2de5e3953354a6a8344e616ed314d7251",
            "0x0",
            "latest")
        .send();
        br.getResult();
    }
}
