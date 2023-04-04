package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayEstimateGasResponse;
import opensdk.sdk.models.KlayCallReqParamsInnerAnyOf;
import org.klaytn.OpenSDK;

import java.io.IOException;

public class KlayEstimateGasExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayEstimateGasExample() throws IOException {
        KlayCallReqParamsInnerAnyOf klayCallReqParamsInnerAnyOf = new KlayCallReqParamsInnerAnyOf();
        klayCallReqParamsInnerAnyOf.setFrom("0x3f71029af4e252b25b9ab999f77182f0cd3bc085");
        klayCallReqParamsInnerAnyOf.setTo("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        klayCallReqParamsInnerAnyOf.setGas("0x100000");
        klayCallReqParamsInnerAnyOf.setGasPrice("0x5d21dba00");
        klayCallReqParamsInnerAnyOf.setValue("0x0");
        klayCallReqParamsInnerAnyOf.setInput("0x8ada066e");

        KlayEstimateGasResponse er = sdk.klay.estimateGas(
            klayCallReqParamsInnerAnyOf)
        .send();
        er.getResult();
    }
}
