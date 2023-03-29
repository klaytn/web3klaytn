package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.models.Call200Response;
import opensdk.sdk.models.CallObject;
import org.web3j.protocol.http.HttpService;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 27/03/2023 4:39 PM
 */
public class KlayTransactionCallExample {

    void klayTransactionCallExample() throws IOException {
        // given
        KlayApi klayApi = new KlayApi(new HttpService("http://localhost:8551"));
        CallObject callObject = new CallObject();
        callObject.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        callObject.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        callObject.setGas("0x100000");
        callObject.setGasPrice("0x5d21dba00");
        callObject.setValue("0x0");
        callObject.setInput("0x8ada066e");
        String blockTag = "latest";
        // when
        Call200Response response = klayApi.call(callObject, blockTag).send();
    }
}
