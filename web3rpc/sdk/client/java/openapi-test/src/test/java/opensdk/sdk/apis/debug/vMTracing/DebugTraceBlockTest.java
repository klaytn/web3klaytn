package opensdk.sdk.apis.debug.vMTracing;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugTraceBlockResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.ArrayList;

import org.web3j.protocol.http.HttpService;

import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Debug RPC Test")
public class DebugTraceBlockTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC debug_traceBlock")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        String blockRlp = "0xf90273f9026fa01d006dc8738fb3e22cfe271e2f2abe00d4634c423f5e6fa1b6dc784eb60e19cf94043c471bee0" +
                "60e00a56ccd02c0ca286808a5a436a0d044a2b68f0e5da76178af5ea4a7deb852fd6cb4a8369f6f924e72414ef1cf99a056e81f" +
                "171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996" +
                "cadc001622fb5e363b421b90100000000000000000000000000000000000000000000000000000000000000000000000000000" +
                "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
                "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
                "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
                "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000" +
                "0000000000000000000000000016480846438ca2f2eb8c0d883010a02846b6c617988676f312e31352e37856c696e7578000000" +
                "00000000f89ed59465b47be3457ff26f2911cf89fd079cef0475a2e6b84115b8a37c54a72a4297a5be09ae582bb965663929897" +
                "5f277264ada08895b2b3701c9fcad3442b7da5250a7e1b2abc5a1fdc777d0bd953d9188f0428a981229c001f843b841c91e010a0" +
                "e43ba72f6b708a82eed1cbb1be8734ba46386311b5da8e717918ae017aa9b54fc7a499d024fb739fec5eb3569841158b6e60ad2a" +
                "e8b768e95e229a70180808505d21dba00c0";

        DebugTraceBlockResponse response = w3.debugTraceBlock(blockRlp, null).send();

        assertNotNull(response);
        assertNull(response.getError());

        assertNotNull(response.getResult());
        assertInstanceOf(ArrayList.class, response.getResult());
    }
}
