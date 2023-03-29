package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.models.Accounts200Response;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 27/03/2023 4:38 PM
 */
public class KlayAccountsExample {
    void klayAccountsExample() throws IOException {
        // given
        KlayApi klayApi = new KlayApi(new HttpService("http://localhost:8551"));
        // when
        Accounts200Response response = klayApi.accounts().send();
    }
}
