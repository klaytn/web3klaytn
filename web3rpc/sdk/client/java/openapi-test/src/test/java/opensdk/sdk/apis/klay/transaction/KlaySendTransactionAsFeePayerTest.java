package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySendTransactionAsFeePayerResponse;
import org.web3j.protocol.klaytn.core.method.response.KlaytnTransactionTypes;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.KlayUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DisplayName("Klay RPC Test")
public class KlaySendTransactionAsFeePayerTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC klay_sendTransactionAsFeePayer")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String address = CommonUtils.address;
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult();
        KlaytnTransactionTypes tx = new KlaytnTransactionTypes();
        tx.setTypeInt(17);
        tx.setFrom(address);
        tx.setTo("0x44711E89b0c23845b5B2ed9D3716BA42b8a3e075");
        tx.setValue("0x1");
        tx.setGas("0x9999");
        tx.setGasPrice("0xba43b7400");
        tx.setInput("0xb3f98adc0000000000000000000000000000000000000000000000000000000000000001");
        tx.setFeePayer(address);
        tx.setNonce(nonce);

        Object signedTx = KlayUtils.getFeePayerSignature(tx);
        KlaySendTransactionAsFeePayerResponse transactionResponse = w3.klaySendTransactionAsFeePayer(signedTx).send();

        assertNotNull(transactionResponse);
        assertNull(transactionResponse.getError());
        assertTrue(transactionResponse.getResult() instanceof String);
        assertTrue(((String) transactionResponse.getResult()).matches("^0x[a-fA-F0-9]+"));
    }
}
