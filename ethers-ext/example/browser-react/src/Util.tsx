import { Account } from "./types";

export function isKaikas(account: Account) {
    // @ts-ignore
    return account.provider && account.provider.provider.isKaikas;
  }

export async function doSendTx(account: Account, makeTxRequest: any) {
    try {
        const provider = account.provider;
        // @ts-ignore
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const txRequest = await makeTxRequest(address);
        const sentTx = await signer.sendTransaction(txRequest);
        
        const explorerUrl = "https://baobab.klaytnscope.com/tx/";
        const txhash = sentTx.hash;
        
        return explorerUrl+txhash;
    } catch (err) {
        console.error(err);
    }
}