package opensdk.sdk.apis.klay.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.KlayGetLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;
import org.web3j.protocol.core.DefaultBlockParameter;
import org.web3j.protocol.core.methods.request.EthFilter;
import org.web3j.protocol.core.methods.request.Filter;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DisplayName("Klay RPC Test")
public class KlayGetLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        Filter<EthFilter> filterOption = new EthFilter(DefaultBlockParameter.valueOf("latest"),DefaultBlockParameter.valueOf("latest")
                ,"0x87ac99835e67168d4f9a40580f8f5c33550ba88b");
        KlayGetLogsResponse response = sdk.klay.getLogs(filterOption).send();
        assertNotNull(response.getResult());
    }
}
