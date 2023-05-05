package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySendRawTransactionResponse;
import opensdk.sdk.utils.CommonUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;


@DisplayName("Klay RPC Test")
public class KlaySendRawTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_sendRawTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String message = CommonUtils.getRawTransaction();
        KlaySendRawTransactionResponse response = sdk.klay.sendRawTransaction(message).send();
        response.getResult();
    }
}
