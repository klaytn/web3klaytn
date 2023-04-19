package opensdk.sdk.apis.helper;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionCountResponse;
import opensdk.sdk.models.PersonalUnlockAccountResponse;
import org.klaytn.OpenSDK;

import java.util.concurrent.CompletableFuture;

public class Helper {
    private static final OpenSDK sdk = new OpenSDK(UrlConstants.SERVER_URL);
    private static final String address = "0x487f2dfef230c2120b8cc55c5087b103146536ec";
    private static final String passphrase = "helloWorld";


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

}
