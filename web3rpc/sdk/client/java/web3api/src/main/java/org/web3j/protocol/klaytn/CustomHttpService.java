package org.web3j.protocol.klaytn;

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.web3j.protocol.http.HttpService;

public class CustomHttpService extends HttpService {
    public CustomHttpService(String url) {
        super(url);
        // support date in java 8
        objectMapper.registerModule(new JavaTimeModule());
    }
}
