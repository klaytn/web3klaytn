package opensdk.sdk.apis.klay.block;

import opensdk.sdk.apis.klay.BaseKlayApiTest;
import opensdk.sdk.models.Accounts200Response;
import opensdk.sdk.models.BlockNumber200Response;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

/**
 * @author Tungnd
 * @since 27/03/2023 2:39 PM
 */
@DisplayName("Klay RPC Test")
public class KlayBlockNumberApiTest extends BaseKlayApiTest {

    @Test
    @DisplayName("RPC klay_blockNumber")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        // when
        BlockNumber200Response response = klayApi.blockNumber().send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
