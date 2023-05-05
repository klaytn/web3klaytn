package opensdk.sdk.apis.txpool;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.TxpoolContentResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;


@DisplayName("Txpool RPC Test")
public class TxpoolContentTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);

    @Test
    @DisplayName("RPC txpool_content")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        TxpoolContentResponse response = sdk.txpool.content().send();
        response.getResult();
    }
}
