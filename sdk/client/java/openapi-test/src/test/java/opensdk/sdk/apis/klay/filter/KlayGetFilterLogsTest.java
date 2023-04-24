package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.apis.helper.Helper;
import opensdk.sdk.models.KlayGetFilterLogsResponse;
import opensdk.sdk.models.KlayGetLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.request.Filter;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

@DisplayName("Klay RPC Test")

public class KlayGetFilterLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getFilterLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        KlayGetFilterLogsResponse res = Helper.getEthFilterId().thenApply(ethNewFilterResponse -> {
            String quantity = ethNewFilterResponse.getResult();
            try {
                KlayGetFilterLogsResponse response = sdk.klay.getFilterLogs(quantity).send();
                return response;
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }).get();
        res.getResult();
    }
}
