package org.klaytn;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.KlayApi;
import org.web3j.protocol.http.HttpService;

/**
 * @author Tungnd
 * @since 28/03/2023 3:20 PM
 */
public class OpenSDK {

    private String url;

    public EthApi eth;
    public KlayApi klay;

    public OpenSDK(String url) {
        eth = new EthApi(new HttpService(url));
        klay = new KlayApi((new HttpService(url)));
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
