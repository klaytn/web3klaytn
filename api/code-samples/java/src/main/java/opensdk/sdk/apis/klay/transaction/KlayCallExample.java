package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayCallObject;
import opensdk.sdk.models.KlayCallResponse;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayCallExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void KlayCallExample() throws IOException {
        KlayCallObject callObject = new KlayCallObject();
        callObject.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        callObject.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        callObject.setGas("0x100000");
        callObject.setGasPrice("0x5d21dba00");
        callObject.setValue("0x0");
        callObject.setInput("0x8ada066e");

        KlayCallResponse cr = sdk.klay.call(
            callObject,
            "latest")
        .send();
        cr.getResult();
    }
}
