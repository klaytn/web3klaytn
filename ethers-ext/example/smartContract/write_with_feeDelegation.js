const ethers = require("ethers");
const { Wallet, TxType } = require("@klaytn/ethers-ext");

// We refer the example from ethers
// https://docs.ethers.org/v5/api/contract/example/

async function main() {

    const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
    const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
    const feePayerAddr = '0xcb0eb737dfda52756495a5e08a9b37aab3b271da'
    const feePayerPriv = '0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4'
    const recieverAddr = '0xc40b6909eb7085590e1c26cb3becc25368e249e9' 

    const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');

    const address = "0xab48cCef4f569480d677Ad467178d526a9209F4A";
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
    const senderWallet = new Wallet(senderPriv, provider);
    const erc20_rw = new ethers.Contract(address, abi, senderWallet);

    // transaction for calling transfer function
    tx = await erc20_rw.populateTransaction.transfer( recieverAddr, "1" );
    console.log( tx );
    // {
    //     data: '0xa9059cbb000000000000000000000000c40b6909eb7085590e1c26cb3becc25368e249e90000000000000000000000000000000000000000000000000000000000000001',
    //     to: '0xab48cCef4f569480d677Ad467178d526a9209F4A',
    //     from: '0xA2a8854b1802D8Cd5De631E690817c253d6a9153'
    // }

    const feeDelegatedTx = {
        type: TxType.FeeDelegatedSmartContractExecution,
        to: tx.to,
        value: 0,  
        from: tx.from,
        input: tx.data,
    }; 
  
    const popTx= await senderWallet.populateTransaction(feeDelegatedTx);
    console.log(popTx);
  
    const senderTxHashRLP = await senderWallet.signTransaction(popTx);
    console.log('senderTxHashRLP', senderTxHashRLP);
  
    // fee payer
    const feePayerWallet = new Wallet(feePayerPriv, provider);
  
    tx = feePayerWallet.decodeTxFromRLP( senderTxHashRLP );
    console.log(tx);
  
    const sentTx = await feePayerWallet.sendTransactionAsFeePayer( senderTxHashRLP );
    console.log('sentTx', sentTx);
  
    const rc = await sentTx.wait();
    console.log('receipt', rc);

    // After!
    console.log(await erc20_rw.balanceOf(senderAddr));
    // '99'

    console.log(await erc20_rw.balanceOf(recieverAddr));
    // '1'
}

main();