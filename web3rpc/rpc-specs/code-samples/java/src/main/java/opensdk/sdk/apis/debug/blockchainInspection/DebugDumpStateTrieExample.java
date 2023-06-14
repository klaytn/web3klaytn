package opensdk.sdk.apis.debug.blockchainInspection;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugDumpStateTrieResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugDumpStateTrieExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugDumpStateTrieExample() throws IOException {
        DebugDumpStateTrieResponse response = w3.debugDumpStateTrie("0x80").send();
        response.getResult();
    }
}
