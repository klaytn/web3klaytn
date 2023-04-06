package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthGetBalanceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class EthGetBalanceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void ethGetBalanceExample() throws IOException {
        EthGetBalanceResponse br = sdk.eth.getBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest")
        .send();
        br.getResult();
    }
}
