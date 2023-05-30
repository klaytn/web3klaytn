package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthSendTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_sendTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        PersonalUtils.unlockAccount();
        Transaction tx = new Transaction(
            "0x413ba0e5f6f00664598b5c80042b1308f4ff1408",
            null,
            null,
            BigInteger.valueOf(60000),
            "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
            BigInteger.valueOf(1),
            null,
            null,
            new BigInteger("5d21dba00",16),
            new BigInteger("5d21dba00",16));
        EthSendTransaction transactionResponse = w3.ethSendTransaction(tx).send();
        assertNotNull(transactionResponse);
        assertNull(transactionResponse.getError());
    }
}
