package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetTransactionCountResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetTransactionCountExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);
    void ethGetTransactionCountExample() throws IOException {
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        String blockNumberOrHashOrTag = "latest";
        EthGetTransactionCountResponse response = sdk.eth.getTransactionCount(address,blockNumberOrHashOrTag).send();
        response.getResult();
    }
}
