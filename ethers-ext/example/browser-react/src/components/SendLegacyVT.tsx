import { useState } from 'react';

import { ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'

import { Account } from '../types';

type Props = {
  account: Account;
};

function SendLegacyVT({ account }: Props) {
    const [value, setValue] = useState(0);
    const [txHash, setTxHash] = useState();

    async function doSendTx(makeTxRequest: any) {
        try {
            const provider = account.provider;
            // @ts-ignore
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const txRequest = await makeTxRequest(address);

            const sentTx = await signer.sendTransaction(txRequest);
            // txHash = sentTx.hash; 

            console.log("sentTx", sentTx);
            const txhash = sentTx.hash;
            const explorerUrl = "https://baobab.klaytnscope.com/tx/";
            alert(explorerUrl+txhash);
        } catch (err) {
            console.error(err);
            // $("#textTxhash").html(`Error: ${err.message}`);
        }
    }
    async function sendLegacyVT(address: string) {
        doSendTx(async (address: string) => {
            return {
            to: address, 
            value: 0,
            };
        });
    }

    return (
        <div> 
            <form action="/sendLegacy" method="post"
                onSubmit={async function(e){
                    e.preventDefault();
                    // @ts-ignore
                    await sendLegacyVT(e.target.to.value);
                }}
            >
                <p>To: <input type="text" name="to" value={account.address}></input></p>
                <p>Value: <input type="text" name="amount" value="0"></input></p>
                <p><input type="submit"></input></p>
            </form>
            <a href={'https://baobab.klaytnscope.com/tx/'+txHash}>{'https://baobab.klaytnscope.com/tx/'+txHash}</a>
        </div>
    );
};

export default SendLegacyVT;