package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetAccountKey200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetAccountKeyApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //todo

        //given
        String address = "0x243d70bde2e421a8c9bd5d57598014055fb4b358";
        String blockNumber = "latest";
        // when
        GetAccountKey200Response response = sdk.klay.getAccountKey(address, blockNumber).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
