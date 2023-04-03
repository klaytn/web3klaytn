package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetBalanceResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBalanceExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetBalanceExample() throws IOException {
        KlayGetBalanceResponse gr = sdk.klay.getBalance(
            "0xc94770007dda54cF92009BFF0dE90c06F603a09f",
            "latest")
        .send();
        gr.getResult();
    }
}
