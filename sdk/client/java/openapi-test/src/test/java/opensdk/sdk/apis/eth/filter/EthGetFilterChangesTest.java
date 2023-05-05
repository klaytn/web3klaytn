package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.models.EthGetFilterChangesResponse;
import opensdk.sdk.utils.EthUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;


@DisplayName("Eth RPC Test")
public class EthGetFilterChangesTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getFilterChange")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String quantity =  EthUtils.getEthFilterId().getResult();
        EthGetFilterChangesResponse response = sdk.eth.getFilterChanges(quantity).send();
        assertNotNull(response.getResult());
    }
}
