package opensdk.sdk.apis.klay.others;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayResendResponse;
import opensdk.sdk.models.TransactionArgs;
import org.klaytn.OpenSDK;

public class KlayResendExample {
  private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
  void klayResendExample() throws IOException {
    TransactionArgs oldTrx = new TransactionArgs();
    oldTrx.setFrom("0x65b47be3457ff26f2911cf89fd079cef0475a2e6");
    oldTrx.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
    oldTrx.setValue("0x1");
    oldTrx.setGas("0x9999");
    oldTrx.setNonce("0xd");
    oldTrx.setMaxPriorityFeePerGas("0x5d21dba00");
    oldTrx.setMaxFeePerGas("0x5d21dba00");
    String gasPrice = "0xba43b7500";
    String gasLimit = "0xe8d4a50fff";
    KlayResendResponse response = sdk.klay.resend(oldTrx, gasPrice, gasLimit).send();
    response.getResult();

  }
}
