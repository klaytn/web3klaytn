// TxTypeAccountUpdate
// https://docs.klaytn.foundation/docs/learn/transactions/

const ethers = require("ethers");

import { SigningKey } from "ethers";
import { AccountKeyType, TxType, Wallet } from "../../src";

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you might want to register a different private key.
const senderAddr = "0xec8d2d57f76b39959116fb3b6879418e7b1baa18";
const senderPriv =
  "0x45ea7d3bb5722828ecc236c68bf4d0a9a8f3c7d62571012b7e802d8dc031344e";
const senderNewPriv =
  "0x45ea7d3bb5722828ecc236c68bf4d0a9a8f3c7d62571012b7e802d8dc031344e";

const provider = new ethers.JsonRpcProvider(
  "https://public-en-baobab.klaytn.net"
);
const wallet = new Wallet(senderAddr, senderPriv, provider); // decoupled account

async function main() {
  const pub = SigningKey.computePublicKey(senderNewPriv, true);
  console.log("pub", pub);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: pub,
    },
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx.hash);

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
}

main();
