package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySendTransactionResponse;
import opensdk.sdk.models.KlaytnTransactionTypes;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlaySendTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_sendTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String address = CommonUtils.address;
        PersonalUtils.unlockAccount();
        KlaytnTransactionTypes type = new KlaytnTransactionTypes();
        type.setFrom(address);
        type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
        type.setValue("0x0");
        type.setGas("0x9999");

        KlaySendTransactionResponse transactionResponse = sdk.klay.sendTransaction(type).send();

        assertNotNull(transactionResponse);
        assertNull(transactionResponse.getError());

    }
}
