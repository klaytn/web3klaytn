const ethers = require("ethers");
const { Wallet, verifyMessageAsKlaytnAccountKey } = require("@klaytn/ethers-ext");

//
// AccountKeyWeightedMultiSig Step 03 - sign verification  
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js 
const senderAddr = '0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e' 
const senderNewPriv1 = '0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a'
const senderNewPriv2 = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'


async function main() {
  const message = "Hello World"; 

  const wallet = new Wallet( senderNewPriv1, provider);
  const signature = await wallet.signMessage(message);
  console.log( signature );

  const wallet2 = new Wallet( senderNewPriv2, provider );
  const signature2 = await wallet2.signMessage(message);
  console.log( signature2 );

  const signatures = [
    signature,
    signature2, 
  ];
  const result = await verifyMessageAsKlaytnAccountKey( provider, senderAddr, message, signatures);
  console.log( "verification result:", result);
}

main();
