package opensdk.sdk.apis.eth.filter;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.response.EthLog;

import java.io.IOException;

@DisplayName("Eth RPC Test")
public class EthGetLogTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthFilter filterOption = new EthFilter(DefaultBlockParameter.valueOf("latest"),DefaultBlockParameter.valueOf("latest")
                ,"0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        EthLog response = w3.ethGetLogs(filterOption).send();
        assertNotNull(response);
        assertNull(response.getError());
    }

}
