package opensdk.sdk.apis.klay.account;

import opensdk.sdk.apis.BaseOpenSDK;
import opensdk.sdk.models.EncodeAccountKey200Response;
import opensdk.sdk.models.EncodedAccountKey;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayEncodeAccountKeyApiTest extends BaseOpenSDK {

    @Test
    @DisplayName("RPC klay_encodeAccountKey")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        //todo

        //given
        EncodedAccountKey encodedAccountKey = new EncodedAccountKey();
        encodedAccountKey.setKeytype(BigDecimal.ZERO);
        encodedAccountKey.setKey("{}");
        // when
        EncodeAccountKey200Response response = sdk.klay.encodeAccountKey(encodedAccountKey).send();
        // then - expect
        var resultResponse = response.getResultResponse();
        var errorResponse = response.getErrorResponse();

        assertAll(
                () -> assertNotNull(resultResponse),
                () -> assertNull(errorResponse)
        );
    }
}
