package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthSignTransactionResponse;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")

public class EthSignTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_signTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
        PersonalUtils.unlockAccount();
        String nonce = EthUtils.getNonce().getResult().replace("0x","");
        Transaction tx = new Transaction(address,new BigInteger(nonce, 16),null,new BigInteger("9999",16)
                ,"0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",new BigInteger("1",16),null,null
                ,new BigInteger("5d21dba00",16),new BigInteger("5d21dba00",16));
        EthSignTransactionResponse transactionResponse = w3.ethSignTransaction(tx).send();
        assertNotNull(transactionResponse);
        assertNull(transactionResponse.getError());

        assertNotNull(transactionResponse.getResult());
        assertNotNull(transactionResponse.getResult().getRaw());
        assertTrue(transactionResponse.getResult().getRaw().matches("^0x[0-9a-fA-F]+$"));
    }
}
