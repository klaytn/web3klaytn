package opensdk.sdk.apis.eth.others;

import opensdk.sdk.apis.constant.UrlConstants;
//import org.web3j.protocol.klaytn.core.method.response.EthGetRawTransactionByBlockNumberAndIndexResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetRawTransactionByBlockNumberAndIndexApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));

    @Test
    @DisplayName("RPC eth_getRawTransactionByBlockNumberAndIndex")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        EthGetRawTransactionByBlockNumberAndIndexResponse er = w3.ethGetRawTransactionByBlockNumberAndIndex(
//            118593751,
//            "0x0")
//        .send();
//        assertNotNull(er);
//        assertNull(er.getError());
//        assertNotNull(er.getResult());
//        assertTrue(er.getResult().matches("^0x.*$"));
    }
}
