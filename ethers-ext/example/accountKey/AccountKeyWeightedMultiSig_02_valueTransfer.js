const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const { objectFromRLP } = require("../../dist/src/core/klaytn_tx");
const fs = require('fs');

// 
// AccountKeyWeightedMultiSig Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyweightedmultisig
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

// the same address of sender in AccountKeyWeightedMultiSig_01_accountUpdate.js 
const sender_addr = '0x218e49acd85a1eb3e840eac0c9668e188c452e0c';
const reciever_addr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';

async function main() {

  let tx = {
    type: 8,
    gasLimit: 100000, 
    to: reciever_addr,
    value: 100000000000,
    from: sender_addr,
  }; 

  // sign 1
  const wallet = new Wallet(sender_addr, fs.readFileSync('./example/key.priv', 'utf8'), provider);
  let ptx = await wallet.populateTransaction(tx);
  console.log(ptx);

  const txHashRLP = await wallet.signTransaction(ptx);
  console.log('TxHashRLP', txHashRLP);
  
  // sign 2 
  const wallet2 = new Wallet(sender_addr, fs.readFileSync( './example/key2.priv', 'utf8'), provider);
  
  let txObj = wallet2.decodeTxFromRLP( txHashRLP );
  console.log( txObj );

  let ptx2 = await wallet2.populateTransaction(txObj);
  console.log(ptx2);

  const txHashRLP2 = await wallet2.signTransaction( ptx2 );
  console.log('TxHashRLP2', txHashRLP2);

  // sign 3 
  const wallet3 = new Wallet(sender_addr, fs.readFileSync( './example/key3.priv', 'utf8'), provider);

  let txObj2 = wallet3.decodeTxFromRLP( txHashRLP2 );
  console.log( txObj2 );

  let ptx3 = await wallet3.populateTransaction(txObj2);
  console.log(ptx3);

  const txHashRLP3 = await wallet3.signTransaction( ptx3 );
  console.log('TxHashRLP3', txHashRLP3);

  let txObj3 = wallet3.decodeTxFromRLP( txHashRLP3 );
  console.log( txObj3 );

  const txhash = await provider.send("klay_sendRawTransaction", [txHashRLP3]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();
