package opensdk.sdk.apis.eth.block;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.models.BlockNumber200Response;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 24/03/2023 4:12 PM
 */
public class EthBlockNumberExample {
    void ethBlockNumberApiTest() throws IOException {
        // given
        EthApi ethApi = new EthApi(new HttpService("http://localhost:8551"));
        // when
        BlockNumber200Response response = ethApi.blockNumber().send();

    }
}
