package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthNewFilterReq;
import opensdk.sdk.models.EthNewFilterResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;


@DisplayName("Eth RPC Test")
public class EthNewFilterTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    @Test
    @DisplayName("RPC eth_newFilter")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthNewFilterReq req = new EthNewFilterReq();
        EthNewFilterResponse response = sdk.eth.newFilter().send();
        response.getResult();
    }
}
