package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EthCallResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;

/**
 * @author Tungnd
 * @since 24/03/2023 9:25 AM
 */
@DisplayName("Eth RPC Test")
class EthCallApiEthApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC eth_call")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthCallResponse cr =sdk.eth.call(
            Transaction.createEthCallTransaction(
                "0xca7a99380131e6c76cfa622396347107aeedca2d",
                "0xbE3892d33620bE5aca8c75D39e7401871194d290",
                "0x2e64cec1"),
            "latest")
        .send();
        cr.getResult();
    }
}
