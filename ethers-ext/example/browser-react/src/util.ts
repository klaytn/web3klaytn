import { JsonRpcProvider, Wallet } from '@klaytn/ethers-ext'
import { Account } from "./types";

export function isKaikas(account: Account) {
    // @ts-ignore
    return account.provider && account.provider.provider.isKaikas;
  }

export async function doSendTx(account: Account, txRequest: any): Promise<any> {
    try {
        if (!account.provider) {
            throw new Error("wallet not connected")
        }

        // @ts-ignore
        const signer = account.provider.getSigner();
        if ( txRequest.from ){
            const address = await signer.getAddress();
            txRequest.from = address; 
        }
        const sentTx = await signer.sendTransaction(txRequest);
        
        return getTxhashUrl( 1001, sentTx.hash);
    } catch (err) {
        console.error(err);
    }
}

export async function doSignTx(account: Account, txRequest: any): Promise<any> {
    try {
        if (!account.provider) {
            throw new Error("wallet not connected")
        }

        // @ts-ignore
        const signer = account.provider.getSigner();
        if ( txRequest.from ){
            const address = await signer.getAddress();
            txRequest.from = address; 
        }
        
        // @ts-ignore
        const signedTx = await signer.signTransaction(txRequest);
        console.log("signedTx", signedTx);
        
        return await doSendTxAsFeePayer(signedTx);
    } catch (err) {
        console.error(err);
    }
}

// This operation is usually done in the backend by the dApp operator.
// We do it here with hardcoded private key for demonstration purpose.
async function doSendTxAsFeePayer(signedTx: string) {
    try {
        const httpProvider = new JsonRpcProvider("https://public-en-baobab.klaytn.net");
        const feePayerPriv = "0x9435261ed483b6efa3886d6ad9f64c12078a0e28d8d80715c773e16fc000cff4";
        const feePayerWallet = new Wallet(feePayerPriv, httpProvider);
    
        const sentTx = await feePayerWallet.sendTransactionAsFeePayer(signedTx);
        console.log("sentTx", sentTx);
        
        return getTxhashUrl( 1001, sentTx.hash);
    } catch (err) {
        console.error(err);
    }
}

export function getTxhashUrl(chainId: number, txhash: string): string {
    if ( chainId === 1001 ) {
        return "https://baobab.klaytnscope.com/tx/" + txhash; 
    } else if ( chainId === 8271 ) {
        return "https://klaytnscope.com/tx/" + txhash; 
    } 
    return "Can not support your chainId";
}