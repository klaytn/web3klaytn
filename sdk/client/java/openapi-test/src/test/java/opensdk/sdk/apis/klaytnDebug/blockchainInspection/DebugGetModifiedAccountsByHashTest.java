package opensdk.sdk.apis.klaytnDebug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import opensdk.sdk.models.DebugGetModifiedAccountsByHashResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.klaytn.OpenSDK;

import java.io.IOException;

@DisplayName("Debug RPC Test")
public class DebugGetModifiedAccountsByHashTest {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    @Test
    @DisplayName("RPC debug_getModifiedAccountsByHash")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String startBlockHash = "0x33f1e749af67b62ddad87f23b63a861160fddc88f44c62efacb49b8fc0b5ec75";
        String endBlockHash = "0x11b53050f768e7ad1e367fdc7414c80544915dff0e758bde099e2df85064243a";

        DebugGetModifiedAccountsByHashResponse response = sdk.debug.getModifiedAccountsByHash(startBlockHash, endBlockHash).send();
        response.getResult();
    }
}
