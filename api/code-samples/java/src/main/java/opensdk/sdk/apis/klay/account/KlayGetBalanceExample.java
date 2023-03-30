package opensdk.sdk.apis.klay.account;

import opensdk.sdk.models.GetBalance200Response;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayGetBalanceExample {

    private final OpenSDK sdk = new OpenSDK();

    void klayGetBalanceExample() throws IOException {
        String address = "0xc94770007dda54cF92009BFF0dE90c06F603a09f";
        String blockNumber = "latest";

        GetBalance200Response response = sdk.klay.getBalance(address, blockNumber).send();
    }
}
