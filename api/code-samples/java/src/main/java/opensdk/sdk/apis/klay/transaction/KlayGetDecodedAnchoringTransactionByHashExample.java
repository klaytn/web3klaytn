package org.web3j.protocol.klaytn.core.klay.transaction;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.KlayGetDecodedAnchoringTransactionByHashResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KlayGetDecodedAnchoringTransactionByHashExample {

    private final OpenSDK sdk = new OpenSDK(UrlConstants.TEST_URL);

    void klayGetDecodedAnchoringTransactionByHashExample() throws IOException {
        KlayGetDecodedAnchoringTransactionByHashResponse gr = sdk.klay.getDecodedAnchoringTransactionByHash(
            "0x026b64e16b86633c0199f78f37a64840d3601d83e5c799f115b63024764524ca")
        .send();
        gr.getResult();
    }
}
