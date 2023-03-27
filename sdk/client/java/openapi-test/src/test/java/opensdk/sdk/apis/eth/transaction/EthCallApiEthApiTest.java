package opensdk.sdk.apis.eth.transaction;

import opensdk.sdk.apis.eth.BaseEthApiTest;
import opensdk.sdk.models.Call200Response;
import opensdk.sdk.models.CallObject;
import opensdk.sdk.models.StateOverrideSet;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 24/03/2023 9:25 AM
 */
@DisplayName("Eth RPC Test")
class EthCallApiEthApiTest extends BaseEthApiTest {

    @Test
    @DisplayName("RPC eth_call")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // given
        String blockTag = "latest";
        CallObject callObject = new CallObject();
        callObject.setFrom("0xca7a99380131e6c76cfa622396347107aeedca2d");
        callObject.setTo("0xbE3892d33620bE5aca8c75D39e7401871194d290");
        callObject.setInput("0x2e64cec1");
        Map<String, StateOverrideSet> mapStateOverrideSet = new HashMap<>();
        StateOverrideSet stateOverrideSet = new StateOverrideSet();
        stateOverrideSet.setCode("0x6080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632e64cec114604e5780636057361d146076575b600080fd5b348015605957600080fd5b50606060a0565b6040518082815260200191505060405180910390f35b348015608157600080fd5b50609e6004803603810190808035906020019092919050505060a9565b005b60008054905090565b80600081905550505600a165627a7a723058207783dba41884f73679e167576362b7277f88458815141651f48ca38c25b498f80029");
        mapStateOverrideSet.put("0xbE3892d33620bE5aca8c75D39e7401871194d290", stateOverrideSet);
        // when
        Call200Response response = ethApi.call(callObject, blockTag, mapStateOverrideSet).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
