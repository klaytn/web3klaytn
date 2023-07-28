const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

// We refer the example from ethers
// https://docs.ethers.org/v5/api/contract/example/

async function main() {
  const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153'
  const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8'

  const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
  const wallet = new Wallet(senderPriv, provider);

  // A Human-Readable ABI; for interacting with the contract, we
  // must include any fragment we wish to use
  const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (bool)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
  ];

  // This can be an address or an ENS name
  const address = "0xab48cCef4f569480d677Ad467178d526a9209F4A";

  // Read-Only; By connecting to a Provider, allows:
  // - Any constant function
  // - Querying Filters
  // - Populating Unsigned Transactions for non-constant methods
  // - Estimating Gas for non-constant (as an anonymous sender)
  // - Static Calling non-constant methods (as anonymous sender)
  const erc20 = new ethers.Contract(address, abi, provider);

  const symbol = await erc20.symbol()
  const balance = await erc20.balanceOf(senderAddr)

  console.log(`\nReading from ${address}`)
  console.log(`Symbol: ${symbol}`)
  console.log(`Balance Returned: ${balance}`)
}

main();