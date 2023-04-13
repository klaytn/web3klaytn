package org.klaytn;

import opensdk.sdk.apis.EthApi;
import opensdk.sdk.apis.KlayApi;
import opensdk.sdk.apis.NetApi;
import opensdk.sdk.apis.PersonalApi;
import opensdk.sdk.apis.TxpoolApi;
import org.web3j.protocol.http.HttpService;

/**
 * @author Tungnd
 * @since 28/03/2023 3:20 PM
 */
public class OpenSDK {

    private String url;

    public EthApi eth;

    public KlayApi klay;

    public NetApi net;

    public TxpoolApi txpool;

    public PersonalApi personal;

    public OpenSDK(String url) {
        eth = new EthApi(new HttpService(url));
        klay = new KlayApi(new HttpService(url));
        net = new NetApi(new HttpService(url));
        txpool = new TxpoolApi(new HttpService(url));
        personal = new PersonalApi(new HttpService(url));
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
