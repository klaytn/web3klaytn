import org.web3j.protocol.klaytn.core.method.response.KaiaCallObject;
import org.web3j.protocol.klaytn.core.method.response.KaiaCreateAccessListResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class KaiaCreateAccessListExample {
    private Web3j w3 = Web3j.build(new HttpService("https://public-en-baobab.klaytn.net"));
    void kaiaCreateAccessListExample() throws IOException {
        KaiaCallObject object = new KaiaCallObject();
        object.setFrom("0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312");
        object.setTo("0x00f5f5f3a25f142fafd0af24a754fafa340f32c7");
        object.setGas("0x3d0900");
        object.setGasPrice("0x3b9aca00");
        object.setInput("0x20965255");
        KaiaCreateAccessListResponse response = w3.kaiaCreateAccessList(object , "latest").send();
        response.getResult();
    }
}
