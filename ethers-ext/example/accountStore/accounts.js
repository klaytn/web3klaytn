const ethers = require("ethers");
const { Accounts } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");
const fs = require('fs');

//
// Accounts example
// 

const priv = fs.readFileSync('./example/key.priv', 'utf8') 
const priv2 = fs.readFileSync('./example/key2.priv', 'utf8') 
const priv3 = fs.readFileSync('./example/key3.priv', 'utf8') 

async function main() {
  let accounts = new Accounts([
    [priv],
    ['0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92', priv], 
    ['0xe81d480b3e90f11f82b35f3fED1400dcc79cf1B5', priv2]
  ]); 
  
  console.log( accounts );

  console.log( await accounts.add( ['0x669b3C8DC78FC785792469dD109314b36879EaFc', priv3] )) ; // true 
  console.log( await accounts.add( ['0x669b3C8DC78FC785792469dD109314b36879EaFc', priv3] )) ; // false (already exist)

  console.log( accounts );

  console.log( await accounts.remove( ['0x669b3C8DC78FC785792469dD109314b36879EaFc', priv3] )) ; // true 
  console.log( await accounts.remove( ['0x669b3C8DC78FC785792469dD109314b36879EaFc', priv3] )) ; // false (already delete)

  console.log( accounts );

  console.log( accounts.accountByKey( priv ).length ) ; // 2 
  console.log( accounts.accountByKey( priv )[0].getAddress() ) ; // '0x3208ca99480f82bfe240ca6bc06110cd12bb6366'
  console.log( accounts.accountByKey( priv )[1].getAddress() ) ; // '0x1173d5dc7b5e1e07d857d74e962b6ed7d4234a92'

  let wallets = await accounts.accountByAddress( '0x3208ca99480f82bfe240ca6bc06110cd12bb6366' );
  console.log( wallets[0].getAddress() );  // '0x3208ca99480f82bfe240ca6bc06110cd12bb6366'
}

main();
