package opensdk.sdk.apis.eth.others;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import java.io.IOException;
import java.math.BigInteger;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthResendResponse;
import opensdk.sdk.utils.CommonUtils;
import opensdk.sdk.utils.EthUtils;
import opensdk.sdk.utils.PersonalUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.methods.request.Transaction;

@DisplayName("Klay RPC Test")
public class EthResendTest {
  private Web3j w3 = Web3j.build(new HttpService(UrlConstants.PN_RPC));
  @Test
  @DisplayName("RPC eth_resend")
  void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
    String addressPn = CommonUtils.addressPN;
    PersonalUtils.unlockAccountPn();
    String noncePending = EthUtils.getNoncePending();
    String gasPrice = "0xba43b7500";
    String gasLimit = "0xe8d4a50fff";
    Transaction tx = new Transaction(addressPn,new BigInteger(noncePending.substring(2) , 16) ,null , null
        ,"0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",new BigInteger("1",16) ,null , null ,new BigInteger("5d21dba00" , 16) ,
        new BigInteger("5d21dba00" , 16));
    EthResendResponse response = w3.ethResend(tx, gasPrice, gasLimit).send();
    assertNotNull(response);
    assertNull(response.getError());

  }
}
