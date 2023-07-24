const ethers = require("ethers");
const { Wallet } = require("@klaytn/ethers-ext");

// We refer the example from ethers
// https://docs.ethers.org/v5/api/contract/example/

async function main() {

    const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
    const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
    const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

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

    // Read-Write; By connecting to a Signer, allows:
    // - Everything from Read-Only (except as Signer, not anonymous)
    // - Sending transactions for non-constant functions
    const erc20_rw = new ethers.Contract(address, abi, wallet);

    // Transfer 1.23 tokens to the ENS name "ricmoo.eth"
    let tx = await erc20_rw.transfer( recieverAddr, "1" );
    // {
    //   accessList: [],
    //   chainId: 123456,
    //   confirmations: 0,
    //   data: '0xa9059cbb0000000000000000000000005555763613a12d8f3e73be831dff8598089d3dca0000000000000000000000000000000000000000000000001111d67bb1bb0000',
    //   from: '0x46E0726Ef145d92DEA66D38797CF51901701926e',
    //   gasLimit: { BigNumber: "51558" },
    //   gasPrice: null,
    //   hash: '0xafdc1f7ec14e2e05a39826c134c9157e0011fc784aef623df3fdf9b9d29f3ac8',
    //   maxFeePerGas: { BigNumber: "1500000014" },
    //   maxPriorityFeePerGas: { BigNumber: "1500000000" },
    //   nonce: 2,
    //   r: '0xd5f1784f0eeb12ef38eb38f1040232f61cc52e017b53ef8685a7a07e47f3144b',
    //   s: '0x5a63103e4b49eae8d372f474857a58612c53fa996b331b9c98611df14191f529',
    //   to: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //   type: 2,
    //   v: 1,
    //   value: { BigNumber: "0" },
    //   wait: [Function (anonymous)]
    // }

    // Wait for the transaction to be mined...
    await tx.wait();
    // {
    //   blockHash: '0x9340a9c7efafbb4ad9a6ebda62e3311ec5fc40ddcc733632938a988c8c62b885',
    //   blockNumber: 60330,
    //   byzantium: true,
    //   confirmations: 1,
    //   contractAddress: null,
    //   cumulativeGasUsed: { BigNumber: "51558" },
    //   effectiveGasPrice: { BigNumber: "1500000007" },
    //   events: [
    //     {
    //       address: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //       args: [
    //         '0x46E0726Ef145d92DEA66D38797CF51901701926e',
    //         '0x5555763613a12D8F3e73be831DFf8598089d3dCa',
    //         { BigNumber: "1230000000000000000" },
    //         amount: { BigNumber: "1230000000000000000" },
    //         from: '0x46E0726Ef145d92DEA66D38797CF51901701926e',
    //         to: '0x5555763613a12D8F3e73be831DFf8598089d3dCa'
    //       ],
    //       blockHash: '0x9340a9c7efafbb4ad9a6ebda62e3311ec5fc40ddcc733632938a988c8c62b885',
    //       blockNumber: 60330,
    //       data: '0x0000000000000000000000000000000000000000000000001111d67bb1bb0000',
    //       decode: [Function (anonymous)],
    //       event: 'Transfer',
    //       eventSignature: 'Transfer(address,address,uint256)',
    //       getBlock: [Function (anonymous)],
    //       getTransaction: [Function (anonymous)],
    //       getTransactionReceipt: [Function (anonymous)],
    //       logIndex: 0,
    //       removeListener: [Function (anonymous)],
    //       topics: [
    //         '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    //         '0x00000000000000000000000046e0726ef145d92dea66d38797cf51901701926e',
    //         '0x0000000000000000000000005555763613a12d8f3e73be831dff8598089d3dca'
    //       ],
    //       transactionHash: '0xafdc1f7ec14e2e05a39826c134c9157e0011fc784aef623df3fdf9b9d29f3ac8',
    //       transactionIndex: 0
    //     }
    //   ],
    //   from: '0x46E0726Ef145d92DEA66D38797CF51901701926e',
    //   gasUsed: { BigNumber: "51558" },
    //   logs: [
    //     {
    //       address: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //       blockHash: '0x9340a9c7efafbb4ad9a6ebda62e3311ec5fc40ddcc733632938a988c8c62b885',
    //       blockNumber: 60330,
    //       data: '0x0000000000000000000000000000000000000000000000001111d67bb1bb0000',
    //       logIndex: 0,
    //       topics: [
    //         '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    //         '0x00000000000000000000000046e0726ef145d92dea66d38797cf51901701926e',
    //         '0x0000000000000000000000005555763613a12d8f3e73be831dff8598089d3dca'
    //       ],
    //       transactionHash: '0xafdc1f7ec14e2e05a39826c134c9157e0011fc784aef623df3fdf9b9d29f3ac8',
    //       transactionIndex: 0
    //     }
    //   ],
    //   logsBloom: '0x00000000000000000800000000000004000000000000000000000000000040000000000000000000000000000000000000000000000000000000020000000000000000000000000000000008000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010002000000000000000000000000000000000000000000000000000000000000000000000001000000000200000000000000000000000000000000000000',
    //   status: 1,
    //   to: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //   transactionHash: '0xafdc1f7ec14e2e05a39826c134c9157e0011fc784aef623df3fdf9b9d29f3ac8',
    //   transactionIndex: 0,
    //   type: 2
    // }

    // After!
    console.log(await erc20_rw.balanceOf(senderAddr));
    // '99'

    console.log(await erc20_rw.balanceOf(recieverAddr));
    // '1'
}

main();