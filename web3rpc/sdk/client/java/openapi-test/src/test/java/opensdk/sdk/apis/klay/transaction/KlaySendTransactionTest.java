package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySendTransactionResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaytnTransactionTypes;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DisplayName("Klay RPC Test")
public class KlaySendTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));
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

        KlaySendTransactionResponse transactionResponse = w3.klaySendTransaction(type).send();

        assertNotNull(transactionResponse);
        assertNull(transactionResponse.getError());
        assertTrue(transactionResponse.getResult() instanceof String);
        assertTrue(((String) transactionResponse.getResult()).matches("^0x[a-fA-F0-9]+"));
    }
}
