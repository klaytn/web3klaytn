package opensdk.sdk.apis.eth.gas;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.response.EthFeeHistory;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;

@DisplayName("Eth RPC Test")
public class EthFeeHistoryApiTest {

    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_feeHistory")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthFeeHistory br = w3.ethFeeHistory(
            16,
            DefaultBlockParameter.valueOf("latest"),
            List.of(0.1, 0.2, 0.3))
        .send();
        assertNotNull(br);
        assertNull(br.getError());
    }
}
