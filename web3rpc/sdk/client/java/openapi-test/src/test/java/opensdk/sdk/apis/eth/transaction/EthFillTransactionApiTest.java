package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
//import org.web3j.protocol.klaytn.core.method.response.EthFillTransactionResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.methods.request.Transaction;
import org.web3j.utils.Numeric;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Eth RPC Test")
public class EthFillTransactionApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.RPC));

    @Test
    @DisplayName("RPC eth_fillTransaction")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
//        EthFillTransactionResponse cr = w3.ethFillTransaction(
//            new Transaction(
//                "0xca7a99380131e6c76cfa622396347107aeedca2d",
//                null,
//                null,
//                Numeric.decodeQuantity("0x9999"),
//                "0x8c9f4468ae04fb3d79c80f6eacf0e4e1dd21deee",
//                Numeric.decodeQuantity("0x1"),
//                null,
//                null,
//                null,
//                Numeric.decodeQuantity("0xba43b7400")))
//        .send();
//        assertNotNull(cr);
//        assertNull(cr.getError());
//        assertNotNull(cr.getResult());
//        assertNotNull(cr.getResult().getRaw());
//        assertTrue(cr.getResult().getRaw().matches("^0x[0-9a-fA-F]*$"));
    }
}
