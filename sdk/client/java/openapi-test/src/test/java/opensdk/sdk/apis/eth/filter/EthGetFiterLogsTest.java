package opensdk.sdk.apis.eth.filter;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetFilterLogsResponse;
import opensdk.sdk.utils.EthUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetFiterLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getFilterLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String id = EthUtils.getEthFilterId().getResult();
        EthGetFilterLogsResponse response = sdk.eth.getFilterLogs(id).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
