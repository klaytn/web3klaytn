package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.apis.helper.Helper;
import opensdk.sdk.models.EthGetFilterLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

public class EthGetFiterLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_getFilterLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        EthGetFilterLogsResponse res = Helper.getEthFilterId().thenApply(ethNewFilterResponse -> {
            String id = ethNewFilterResponse.getResult();
            try {
                EthGetFilterLogsResponse response = sdk.eth.getFilterLogs(id).send();
                return response;
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).get();
        res.getResult();
    }
}
