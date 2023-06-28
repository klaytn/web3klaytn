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
const sender = '0x218e49acd85a1eb3e840eac0c9668e188c452e0c';
const reciever = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';


// do sign with the each updated sender's accountKey 
async function doSign( tx ) {
  const new_priv = fs.readFileSync('./example/key.priv', 'utf8'); 
  const wallet = new Wallet(sender, new_priv, provider);

  let ttx = await wallet.populateTransaction(tx);
  console.log(ttx);

  const txHashRLP = await wallet.signTransaction(ttx);
  console.log('TxHashRLP', txHashRLP);

  return txHashRLP;   
}

async function addSign( txHashRLP, privateKey_path ) {
  const new_priv = fs.readFileSync( privateKey_path, 'utf8'); 
  const wallet = new Wallet(sender, new_priv, provider);

  let tx = objectFromRLP( txHashRLP );
  ttx = await wallet.populateTransaction(tx);
  console.log(ttx);
  
  const new_txHashRLP = await wallet.signTransaction(ttx);
  console.log('new TxHashRLP', new_txHashRLP);

  return new_txHashRLP;   
}

async function main() {

  let tx = {
    type: 8,
    gasLimit: 100000, 
    to: reciever,
    value: 100000000000,
    from: sender,
  }; 

  const txHashRLP  = await doSign( tx ); 
  const txHashRLP2 = await addSign( txHashRLP, './example/key2.priv' ); 
  const txHashRLP3 = await addSign( txHashRLP2, './example/key3.priv' ); 

  let ttx = objectFromRLP( txHashRLP3 );
  console.log(ttx);

  const txhash = await provider.send("klay_sendRawTransaction", [txHashRLP3]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();
