const ethers = require("ethers");
const { Accounts, AccountStore } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

//
// AccountStore example
// 

const priv = fs.readFileSync('./example/privateKey', 'utf8') 
const priv2 = fs.readFileSync('./example/privateKey2', 'utf8') 
const priv3 = fs.readFileSync('./example/privateKey3', 'utf8') 

async function main() {
  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

  let accountStore = new AccountStore(); 

  await accountStore.refresh( provider, [
    [priv],   // '0x3208ca99480f82bfe240ca6bc06110cd12bb6366'
    ['0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92', priv],
    [priv2],  // '0xe81d480b3e90f11f82b35f3fED1400dcc79cf1B5' 
    ['0x218e49acd85a1eb3e840eac0c9668e188c452e0c', priv],
    ['0x218e49acd85a1eb3e840eac0c9668e188c452e0c', priv2],
    ['0x218e49acd85a1eb3e840eac0c9668e188c452e0c', priv3],
    ['0x9b4284806060423079e612203c22e8cb48b9870e', priv3]
  ]); 

  console.log( accountStore.getAccountInfos() );

  console.log( accountStore.getType('0x3208ca99480f82bfe240ca6bc06110cd12bb6366') );  // 1
  console.log( accountStore.getType('0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92') );  // 2
  console.log( accountStore.getType('0x218e49acd85a1eb3e840eac0c9668e188c452e0c') );  // 4
  console.log( accountStore.getType('0x9b4284806060423079e612203c22e8cb48b9870e') );  // 5

  console.log( accountStore.getAccountInfo('0x3208ca99480f82bfe240ca6bc06110cd12bb6366') ); 
}

main();
