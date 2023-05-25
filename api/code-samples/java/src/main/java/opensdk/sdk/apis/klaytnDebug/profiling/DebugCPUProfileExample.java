package org.web3j.protocol.klaytn.core.klaytnDebug.profiling;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugCpuProfileResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugCPUProfileExample {
    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void debugCpuProfileExample() throws IOException {
        String file = "block.profile";
        int seconds = 4;

        DebugCpuProfileResponse response = sdk.debug.cpuProfile(file, seconds).send();
        response.getResult();
    }
}
