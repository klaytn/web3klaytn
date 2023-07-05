package opensdk.sdk.apis.klay.others;


import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayResendResponse;
import org.web3j.protocol.klaytn.core.method.response.TransactionArgs;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

@DisplayName("Klay RPC Test")
public class KlayResendTest {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.PN_RPC));
  @Test
  @DisplayName("RPC klay_resend")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String addressPn = CommonUtils.addressPN;
    PersonalUtils.unlockAccountPn();
    String noncePending = EthUtils.getNoncePending();
    TransactionArgs oldTrx = new TransactionArgs();
    oldTrx.setFrom(addressPn);
    oldTrx.setTo("0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee");
    oldTrx.setValue("0x1");
    oldTrx.setGas("0x9999");
    oldTrx.setNonce(noncePending);
    oldTrx.setMaxPriorityFeePerGas("0x5d21dba00");
    oldTrx.setMaxFeePerGas("0x5d21dba00");
    String gasPrice = "0xba43b7500";
    String gasLimit = "0xe8d4a50fff";
    KlayResendResponse response = w3.klayResend(oldTrx, gasPrice, gasLimit).send();
    assertNotNull(response);
    assertNull(response.getError());

  }
}
