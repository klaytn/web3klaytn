package opensdk.sdk.apis.eth.transaction;


import java.math.BigDecimal;
import java.math.BigInteger;
import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.utils.Convert;
import org.web3j.utils.Numeric;

import static org.junit.jupiter.api.Assertions.*;


@DisplayName("Eth RPC Test")
public class EthSendRawTransactionTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));
    public static final String address = "0x1a2dc19e4ca604d8bfd65c42ed5f93e19702d47e";
    @Test
    @DisplayName("RPC eth_sendRawTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException{
        String privateKey = "0xeee2137e3b3ddc1c77d17ad74ab595a55c15ae8fc078557c15328d915e134437";
        String toAddress = "0x22d7ddf270ba6d4b5019bef69438f407083036df";
        String gasPrice = "ba43b7400";
        long gasLimit = 21000;
        String maxPriorityFeePerGas = "5d21dba00";
        BigDecimal value = Convert.toWei(".001", Convert.Unit.ETHER);
        EthGetTransactionCount ethGetTransactionCount = w3.ethGetTransactionCount(address, DefaultBlockParameter.valueOf("pending")).send();
        BigInteger nonce = ethGetTransactionCount.getTransactionCount();
        RawTransaction txObject = RawTransaction.createEtherTransaction(nonce
            , new BigInteger(gasPrice, 16).add(new BigInteger(maxPriorityFeePerGas, 16))
            , BigInteger.valueOf(gasLimit)
            , toAddress
            , value.toBigInteger());
        Credentials credentials = Credentials.create(privateKey);
        byte[] signMessage = TransactionEncoder.signMessage(txObject, credentials);
        String message = Numeric.toHexString(signMessage);
        EthSendTransaction response = w3.ethSendRawTransaction(message).send();

        assertNotNull(response);
        assertNull(response.getError());
        assertTrue(response.getResult().matches("^0x[0-9a-fA-F]+$"));
    }
}
