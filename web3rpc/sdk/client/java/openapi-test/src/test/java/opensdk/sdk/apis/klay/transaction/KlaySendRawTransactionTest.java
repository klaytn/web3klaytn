package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlaySendRawTransactionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.utils.Convert;
import org.web3j.utils.Numeric;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;


@DisplayName("Klay RPC Test")
public class KlaySendRawTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));
    public static final String address = "0x68c78d152501837f851e6ebc192b69746675c6fa";

    @Test
    @DisplayName("RPC klay_sendRawTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException, ExecutionException, InterruptedException {
        String privateKey = "0x5817e586bd1ea3ddb39906ae232c2846b343b928b02826fe0322ee445e869703";
        String toAddress = "0x22d7ddf270ba6d4b5019bef69438f407083036df";
        String gasPrice = "ba43b7400";
        long gasLimit = 21000;
        String maxPriorityFeePerGas = "5d21dba00";
        BigDecimal value = Convert.toWei(".001", Convert.Unit.ETHER);
        EthGetTransactionCount ethGetTransactionCount = w3.ethGetTransactionCount(address, DefaultBlockParameter.valueOf("pending")).send();
        BigInteger nonce = ethGetTransactionCount.getTransactionCount();
        RawTransaction txObject = RawTransaction.createEtherTransaction(nonce.add(BigInteger.ONE)
            , new BigInteger(gasPrice, 16).add(new BigInteger(maxPriorityFeePerGas, 16))
            , BigInteger.valueOf(gasLimit)
            , toAddress
            , value.toBigInteger());
        Credentials credentials = Credentials.create(privateKey);
        byte[] signMessage = TransactionEncoder.signMessage(txObject, credentials);
        String message = Numeric.toHexString(signMessage);
        
        KlaySendRawTransactionResponse response = w3.klaySendRawTransaction(message).send();

        assertNotNull(response);
        assertNull(response.getError());
    }
}
