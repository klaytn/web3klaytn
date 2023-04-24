package opensdk.sdk.apis.helper;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionCountResponse;
import opensdk.sdk.models.EthNewFilterResponse;
import opensdk.sdk.models.PersonalUnlockAccountResponse;
import org.klaytn.OpenSDK;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.request.Filter;
import org.web3j.protocol.http.HttpService;
import org.web3j.utils.Convert;
import org.web3j.utils.Numeric;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Vector;
import java.util.concurrent.CompletableFuture;

public class Helper {
    private static final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    private static final String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
    private static final String passphrase = "helloWorld";

    private static final Web3j web3j = Web3j.build(new HttpService(UrlConstants.SERVER_URL));


    public static CompletableFuture<PersonalUnlockAccountResponse> unlockAccount(){
        Integer duration = 30;
        CompletableFuture<PersonalUnlockAccountResponse> response = sdk.personal.unlockAccount(address,passphrase,duration).sendAsync();
        return response;
    }

    public static CompletableFuture<EthGetTransactionCountResponse> getNonce(){
        String blockTag = "latest";
        CompletableFuture<EthGetTransactionCountResponse> response = sdk.eth.getTransactionCount(address,blockTag).sendAsync();
        return response;
    }

    public static CompletableFuture<String> getRawTransaction(){
        String privateKey = "6cb442edb31d8a1c753f0c3c675588fceb4d82435a1c03b8bb92a5a9274ebbe0";
        String fromAddress = "0xA1ee5975cfa2180450AeD555Ba06AB8108a87D4A";
        String toAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
        String gasPrice =  "ba43b7400";
        long gasLimit = 21000;
        BigDecimal value = Convert.toWei("0.0000000001", Convert.Unit.ETHER);
        CompletableFuture<String> signedMessage = web3j.ethGetTransactionCount(fromAddress, DefaultBlockParameter.valueOf("pending")).sendAsync()
                .thenApply(ethGetTransactionCount -> {
                    BigInteger nonce = ethGetTransactionCount.getTransactionCount();
                    RawTransaction txObject = RawTransaction.createEtherTransaction(nonce, new BigInteger(gasPrice, 16), BigInteger.valueOf(gasLimit), toAddress, value.toBigIntegerExact());
                    Credentials credentials = Credentials.create(privateKey);
                    byte[] signMessage = TransactionEncoder.signMessage(txObject, credentials);
                    return Numeric.toHexString(signMessage);
                });
        return signedMessage;
    }

    public static CompletableFuture<EthNewFilterResponse> getEthFilterId(){
        Filter<EthFilter> filterOption = new EthFilter(DefaultBlockParameter.valueOf("earliest"),DefaultBlockParameter.valueOf("latest")
                ,"0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        filterOption.addOptionalTopics("0xd596fdad182d29130ce218f4c1590c4b5ede105bee36690727baa6592bd2bfc8");
        CompletableFuture<EthNewFilterResponse> response = sdk.eth.newFilter(filterOption).sendAsync();
        return response;
    }

}
