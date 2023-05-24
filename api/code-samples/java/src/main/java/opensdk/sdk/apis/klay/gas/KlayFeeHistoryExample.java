package org.web3j.protocol.klaytn.core.klay.gas;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayFeeHistoryResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;
import java.util.List;

public class KlayFeeHistoryExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.LOCAL_URL);

    void klayFeeHistoryExample() throws IOException {
        KlayFeeHistoryResponse fr = sdk.klay.feeHistory(
            "0x10",
            "latest",
            List.of(0.1, 0.2, 0.3))
        .send();
        fr.getResult();
    }
}
