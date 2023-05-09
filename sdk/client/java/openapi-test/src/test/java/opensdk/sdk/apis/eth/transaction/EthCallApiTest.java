package opensdk.sdk.apis.eth.transaction;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import com.fasterxml.jackson.databind.ObjectMapper;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.EthCallResponse;
import opensdk.sdk.models.StateOverrideSet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
import org.web3j.protocol.core.methods.request.Transaction;

import java.io.IOException;
import java.util.Map;

@DisplayName("Eth RPC Test")
class EthCallApiTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC eth_call")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String jsonString = "{\"0xbE3892d33620bE5aca8c75D39e7401871194d290\": "
            + "{\"code\": \"0x6080604052600436106049576000357c01000000000000000000000000000000000000"
            + "00000000000000000000900463ffffffff1680632e64cec114604e5780636057361d146076575b600080f"
            + "d5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b34"
            + "8015608157600080fd5b50609e6004803603810190808035906020019092919050505060a9565b005b600"
            + "08054905090565b80600081905550505600a165627a7a723058207783dba41884f73679e167576362b727"
            + "7f88458815141651f48ca38c25b498f80029\"}}";
        ObjectMapper mapper = new ObjectMapper();
        Map<String , StateOverrideSet> el = mapper.readValue(jsonString,Map.class);

        EthCallResponse cr = sdk.eth.call(
            Transaction.createEthCallTransaction(
                "0xca7a99380131e6c76cfa622396347107aeedca2d",
                "0xbE3892d33620bE5aca8c75D39e7401871194d290",
                "0x2e64cec1"),
            "latest",el)
        .send();
        assertNotNull(cr);
        assertNull(cr.getError());
    }
}
