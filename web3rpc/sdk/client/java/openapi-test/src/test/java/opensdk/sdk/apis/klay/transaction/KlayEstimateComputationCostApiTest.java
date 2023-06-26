package opensdk.sdk.apis.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayCallObject;
import org.web3j.protocol.klaytn.core.method.response.KlayEstimateComputationCostResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Klay RPC Test")
public class KlayEstimateComputationCostApiTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_estimateComputationCost")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        KlayCallObject callObject = new KlayCallObject();
        callObject.setFrom("0x73718c4980728857f3aa5148e9d1b471efa3a7dd");
        callObject.setTo("0x069942a3ca0dabf495dba872533134205764bc9c");
        callObject.setValue("0x0");
        callObject.setInput("0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039");
        callObject.setGas("0x9999");

        KlayEstimateComputationCostResponse response = w3.klayEstimateComputationCost(
            callObject,
            "latest")
        .send();

        assertNotNull(response);
        assertNull(response.getError());

    }
}
