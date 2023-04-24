package opensdk.sdk.apis.eth.acount;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionCountResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class EthGetTransactionCountTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getTransactionCount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        String blockNumberOrHashOrTag = "latest";
        EthGetTransactionCountResponse response = sdk.eth.getTransactionCount(address,blockNumberOrHashOrTag).send();
        assertNotNull(response.getResult());
    }
}
