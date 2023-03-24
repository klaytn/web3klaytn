package opensdk.sdk.apis.eth.account;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.models.Accounts200Response;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 24/03/2023 4:07 PM
 */
public class EthAccountsExample {
    void ethAccountsApiTest() throws IOException {
        // given
        EthApi ethApi = new EthApi(new HttpService("http://localhost:8551"));
        // when
        Accounts200Response response = ethApi.accounts().send();
    }
}
