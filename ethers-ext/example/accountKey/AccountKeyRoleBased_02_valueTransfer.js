const ethers = require("ethers");
const { Wallet, TxType } = require("@klaytn/ethers-ext");

// 
// AccountKeyRoleBased Step 02 - value transfer
// https://docs.klaytn.foundation/content/klaytn/design/accounts#accountkeyrolebased 
//
//   gasLimit: Must be large enough 
// 

const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net')

// the same address of sender in AccountKeyRoleBased_01_accountUpdate.js 
const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9';
const senderAddr = '0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea' 
const senderRoleTransactionPriv = '0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac'

async function main() {

  let tx = {
    type: TxType.ValueTransfer,
    gasLimit: 100000, 
    to: recieverAddr,
    value: 100000000000,
    from: senderAddr,
  }; 

  const wallet = new Wallet(senderAddr, senderRoleTransactionPriv, provider);
  let ptx = await wallet.populateTransaction(tx);
  console.log(ptx);

  const txHashRLP = await wallet.signTransaction(ptx);
  console.log('TxHashRLP', txHashRLP);
  
  let decodedTx = wallet.decodeTxFromRLP( txHashRLP );
  console.log( decodedTx );

  // send 
  const txhash = await provider.send("klay_sendRawTransaction", [txHashRLP]);
  console.log('txhash', txhash);

  const rc = await provider.waitForTransaction(txhash);
  console.log('receipt', rc);
}

main();
