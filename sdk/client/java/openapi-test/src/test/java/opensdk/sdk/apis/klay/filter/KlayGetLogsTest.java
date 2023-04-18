package opensdk.sdk.apis.klay.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.FilterOptions;
import opensdk.sdk.models.KlayGetLogsResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Klay RPC Test")
public class KlayGetLogsTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);
    @Test
    @DisplayName("RPC klay_getLogs")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String optionString = "{\n" +
                "\"fromBlock\": \"0x1\",\n" +
                "\"toBlock\": \"latest\",\n" +
                "\"address\": \"0x87ac99835e67168d4f9a40580f8f5c33550ba88b\"\n" +
                "}";
        ObjectMapper mapper = new ObjectMapper();
        FilterOptions options = mapper.readValue(optionString, FilterOptions.class);
        KlayGetLogsResponse response = sdk.klay.getLogs(options).send();
        response.getResult();
    }
}
