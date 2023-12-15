const { JsonRpcProvider } = require("@klaytn/ethers-ext");

(async () => {
    let provider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");

    // The full list of JSON-RPC is available at:
    // https://docs.klaytn.foundation/content/dapp/json-rpc/api-references
    let data = await provider.admin.nodeConfig();
    console.log("Node config", data);
}
)();