const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));
    
    const file = "mutex.profile";

    sdk.debug.writeMutexProfile(file, {}, (err, data, response) => {
        console.log(data);
    });
}
)()