package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthCreateAccessListResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;
import java.math.BigInteger;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthCreateAccessListTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_createAccessList")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Transaction args = Transaction.createFunctionCallTransaction("0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",null
                ,new BigInteger("3b9aca00",16)
                ,new BigInteger("3d0900",16)
                ,"0x00f5f5f3a25f142fafd0af24a754fafa340f32c7"
                ,"0x20965255");
        String blockNumberOrHash = "latest";
        EthCreateAccessListResponse response = w3.ethCreateAccessList(args,blockNumberOrHash).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
