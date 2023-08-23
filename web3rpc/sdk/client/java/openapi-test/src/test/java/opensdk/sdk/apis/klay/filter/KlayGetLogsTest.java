package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.FilterOptions;
import org.web3j.protocol.klaytn.core.method.response.KlayGetLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetLogsTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.BAOBAB_RPC));
    @Test
    @DisplayName("RPC klay_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        FilterOptions options = new FilterOptions();
        options.setFromBlock("latest");
        options.setToBlock("latest");
        options.setAddress("0x87ac99835e67168d4f9a40580f8f5c33550ba88b");

        KlayGetLogsResponse response = w3.klayGetLogs(options).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
    }
}
