package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.GetAccount200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetAccountApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_getAccount")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //todo fix balance type

        //given
        String address = "0x3111a0577f322e8fb54f78d9982a26ae7ca0f722";
        String blockNumber = "latest";
        // when
        GetAccount200Response response = sdk.klay.getAccount(address, blockNumber).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
