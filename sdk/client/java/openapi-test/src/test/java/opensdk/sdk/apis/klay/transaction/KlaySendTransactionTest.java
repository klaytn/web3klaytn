package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.apis.helper.Helper;
import opensdk.sdk.models.*;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
import org.web3j.crypto.transaction.type.Transaction1559;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlaySendTransactionTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_sendTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {

        KlaySendTransactionResponse transactionResponse = Helper.unlockAccount().thenApplyAsync(response -> {
            try {
                String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
                KlaytnTransactionTypes type = new KlaytnTransactionTypes();
                type.setFrom(address);
                type.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
                type.setValue("0x0");
                type.setGas("0x9999");
                return sdk.klay.sendTransaction(type).send();
            } catch (IOException  e) {
                throw new RuntimeException(e);
            }
        }).get();
        transactionResponse.getResult();

    }
}
