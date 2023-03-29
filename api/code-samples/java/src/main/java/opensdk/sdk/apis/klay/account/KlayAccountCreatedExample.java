package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.models.AccountCreated200Response;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 27/03/2023 4:38 PM
 */
public class KlayAccountCreatedExample {

    void klayAccountCreatedExample() throws IOException {
        // given
        KlayApi klayApi = new KlayApi(new HttpService("http://localhost:8551"));
        String account = "0xa4f42d4d2a3a13874406435500950c9bf2d783db";
        String blockHash = "latest";
        // when
        AccountCreated200Response response = klayApi.accountCreated(account, blockHash).send();
    }
}
