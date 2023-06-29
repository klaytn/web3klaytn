const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

// 
// AccountKeyWeightedMultiSig Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js 
const reciever_addr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';
const sender_addr = '0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e' 
const sender_new_priv1 = '0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a'
const sender_new_priv2 = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'
const sender_new_priv3 = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'

async function main() {

  let tx = {
    type: 8,
    gasLimit: 100000, 
    to: reciever_addr,
    value: 100000000000,
    from: sender_addr,
  }; 

  // sign 1
  const wallet = new Wallet(sender_addr, sender_new_priv1, provider);
  let ptx = await wallet.populateTransaction(tx);
  const txHashRLP = await wallet.signTransaction(ptx);
  console.log('TxHashRLP', txHashRLP);
  
  // sign 2 
  const wallet2 = new Wallet(sender_addr, sender_new_priv2, provider);
  let txObj = wallet2.decodeTxFromRLP( txHashRLP );
  console.log( txObj );
  let ptx2 = await wallet2.populateTransaction(txObj);
  const txHashRLP2 = await wallet2.signTransaction( ptx2 );
  console.log('TxHashRLP2', txHashRLP2);

  // sign 3 
  const wallet3 = new Wallet(sender_addr, sender_new_priv3, provider);
  let txObj2 = wallet3.decodeTxFromRLP( txHashRLP2 );
  console.log( txObj2 );
  let ptx3 = await wallet3.populateTransaction(txObj2);
  const txHashRLP3 = await wallet3.signTransaction( ptx3 );
  console.log('TxHashRLP3', txHashRLP3);

  let txObj3 = wallet3.decodeTxFromRLP( txHashRLP3 );
  console.log( txObj3 );

  // send
  const txhash = await provider.send("klay_sendRawTransaction", [txHashRLP3]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();
