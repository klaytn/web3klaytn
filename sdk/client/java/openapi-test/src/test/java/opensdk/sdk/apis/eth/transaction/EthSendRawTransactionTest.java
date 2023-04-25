package opensdk.sdk.apis.eth.transaction;


import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.models.EthSendRawTransactionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;


@DisplayName("Eth RPC Test")
public class EthSendRawTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC eth_sendRawTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException{
        String signedMessage = CommonUtils.getRawTransaction();
        EthSendRawTransactionResponse response = sdk.eth.sendRawTransaction(signedMessage).send();
        response.getResult();
    }
}
