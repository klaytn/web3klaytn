package opensdk.sdk.apis.eth.filter;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.utils.EthUtils;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.core.methods.response.EthLog;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.math.BigInteger;

public class EthGetFiterLogsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));
    @Test
    @DisplayName("RPC eth_getFilterLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String id = EthUtils.getEthFilterId().getResult();
        EthLog response = w3.ethGetFilterLogs(new BigInteger(id)).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
