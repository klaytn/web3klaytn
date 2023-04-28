package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolStatusResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Txpool RPC Test")
public class TxpoolStatusTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC txpool_status")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        TxpoolStatusResponse response = sdk.txpool.status().send();
        response.getResult();
    }
}
