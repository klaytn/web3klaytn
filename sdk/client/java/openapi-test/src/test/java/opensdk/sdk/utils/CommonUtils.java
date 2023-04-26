package opensdk.sdk.utils;

import opensdk.sdk.apis.constant.UrlConstants;
import org.klaytn.OpenSDK;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Convert;
import org.web3j.utils.Numeric;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;

public class CommonUtils {
     static final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
     static final String address = "0x413ba0e5f6f00664598b5c80042b1308f4ff1408";
     static final String passphrase = "helloWorld";
     static final Web3j web3j = Web3j.build(new HttpService(UrlConstants.SERVER_URL));


    public static String getRawTransaction() throws IOException {
        String privateKey = "6cb442edb31d8a1c753f0c3c675588fceb4d82435a1c03b8bb92a5a9274ebbe0";
        String toAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
        String gasPrice = "ba43b7400";
        long gasLimit = 21000;
        String maxPriorityFeePerGas = "5d21dba00";
        BigDecimal value = Convert.toWei(".001", Convert.Unit.ETHER);
        EthGetTransactionCount ethGetTransactionCount = web3j.ethGetTransactionCount(address, DefaultBlockParameter.valueOf("pending")).send();
        BigInteger nonce = ethGetTransactionCount.getTransactionCount();
        RawTransaction txObject = RawTransaction.createEtherTransaction(nonce
                , new BigInteger(gasPrice, 16).add(new BigInteger(maxPriorityFeePerGas, 16))
                , BigInteger.valueOf(gasLimit)
                , toAddress
                , value.toBigInteger());
        Credentials credentials = Credentials.create(privateKey);
        byte[] signMessage = TransactionEncoder.signMessage(txObject, credentials);
        return Numeric.toHexString(signMessage);
    }

}
