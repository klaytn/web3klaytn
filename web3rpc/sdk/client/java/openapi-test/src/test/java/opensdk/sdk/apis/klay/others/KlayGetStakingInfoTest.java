package opensdk.sdk.apis.klay.others;

import jnr.ffi.annotations.In;
import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetStakingInfoResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.LinkedHashMap;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Klay RPC Test")
public class KlayGetStakingInfoTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    @Test
    @DisplayName("RPC klay_getStakingInfo")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blogTag = "latest";

        KlayGetStakingInfoResponse response = w3.klayGetStakingInfo(blogTag).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(LinkedHashMap.class, response.getResult());
        assertTrue(((LinkedHashMap<?,?>) response.getResult()).get("blockNum") instanceof Integer);
    }

}
