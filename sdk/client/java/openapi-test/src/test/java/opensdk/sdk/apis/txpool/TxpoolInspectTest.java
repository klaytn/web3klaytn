package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolInspectResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Txpool RPC Test")
public class TxpoolInspectTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC txpool_inspect")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        TxpoolInspectResponse response = sdk.txpool.inspect().send();
        response.getResult();
    }
}
