package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.models.BlockNumber200Response;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 27/03/2023 4:39 PM
 */
public class KlayBlockNumberExample {

    void klayBlockNumberExample() throws IOException {
        // given
        KlayApi klayApi = new KlayApi(new HttpService("http://localhost:8551"));
        // when
        BlockNumber200Response response = klayApi.blockNumber().send();
    }
}
