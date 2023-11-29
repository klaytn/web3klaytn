import { assert } from "chai";
import Web3 from "web3";

import { KlaytnWeb3 } from "../src/web3";

describe("KlaytnWeb3", () => {
  it("success", () => {
    let url = "http://localhost:8545";
    let provider = new Web3.providers.HttpProvider(url);
    let web3 = new KlaytnWeb3(provider);

    assert.isDefined(web3.eth.accounts.signTransaction);
  });
});
