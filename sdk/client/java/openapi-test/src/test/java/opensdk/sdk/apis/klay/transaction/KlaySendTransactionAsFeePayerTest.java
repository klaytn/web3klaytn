package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlaySendTransactionResponse;
import opensdk.sdk.models.KlaySignTransactionRespResultTx;
import opensdk.sdk.models.KlaytnTransactionTypes;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlaySendTransactionAsFeePayerTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    @Test
    @DisplayName("RPC klay_sendTransactionAsFeePayer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult();
        KlaytnTransactionTypes tx = new KlaytnTransactionTypes();
        tx.setTypeInt(new BigDecimal(17));
        tx.setFrom(address);
        tx.setTo("0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075");
        tx.setValue("0x1");
        tx.setGas("0x9999");
        tx.setGasPrice("0xba43b7400");
        tx.setInput("0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001");
        tx.setFeePayer(address);
        tx.setNonce(nonce);
        KlaySignTransactionRespResultTx signedTx = EthUtils.getFeePayerSignature(tx);
        KlaySendTransactionResponse transactionResponse = sdk.klay.sendTransactionAsFeePayer(signedTx).send();
        assertNotNull(transactionResponse.getResult());
    }
}
