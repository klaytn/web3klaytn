const { Accounts } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

//
// Accounts example
//

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");

  let accounts = new Accounts(provider, [
    ["0xA2a8854b1802D8Cd5De631E690817c253d6a9153", "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"],
    ["0xCb0eb737dfda52756495A5e08A9b37AAB3b271dA", "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4"],
    ["0xe15Cd70A41dfb05e7214004d7D054801b2a2f06b", "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac"],
    ["0xe15cd70a41dfb05e7214004d7d054801b2a2f06b", "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8"],
    ["0x82c6a8d94993d49cfd0c1d30f0f8caa65782cc7e", "0xa32c30608667d43be2d652bede413f12a649dd1be93440878e7f712d51a6768a"]
  ]);

  console.log(await accounts.add(
    ["0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea", "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda"])); // true
  console.log(await accounts.add(
    ["0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea", "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda"])); // false (already exist)

  console.log(accounts);

  console.log(await accounts.remove(
    ["0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea", "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda"])); // true
  console.log(await accounts.remove(
    ["0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea", "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda"])); // false (already exist)
  console.log(await accounts.add(
    ["0x5bd2fb3c21564c023a4a735935a2b7a238c4ccea", "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda"])); // true

  let priv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
  console.log(accounts.accountByKey(priv).length); // 2
  console.log(accounts.accountByKey(priv)[0].getAddress()); // '0xA2a8854b1802D8Cd5De631E690817c253d6a9153'
  console.log(accounts.accountByKey(priv)[1].getAddress()); // '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b'

  let wallets = await accounts.accountByAddress("0xe15cd70a41dfb05e7214004d7d054801b2a2f06b");
  console.log(wallets[0].getAddress()); // '0xe15cd70a41dfb05e7214004d7d054801b2a2f06b'
}

main();
