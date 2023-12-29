import { useState } from 'react';
import { Account } from '../types';
import { doSendTx } from '../Util';
// import { ethers_ext } from '@klaytn/ethers-ext';

type Props = {
  account: Account;
};

function KlaytnVT({ account }: Props) {
    const [txURL, setTxURL] = useState('');

    async function sendKlaytnVT(address: string) {
        const sentTxURL = await doSendTx( account, async (address: string) => {
            return {
                // type: ethers_ext.TxType.ValueTransfer, // 0x08
                type: 0x08,
                to: address, // send to myself
                value: 0,
            };
        });
        setTxURL( sentTxURL? sentTxURL: '');
    }
    return (
        <div className="menu-component"> 
            <form action="/sendLegacy" method="post"
                onSubmit={async function(e){
                    e.preventDefault();
                    // @ts-ignore
                    await sendKlaytnVT(e.target.to.value);
                }}
            >
                <p>Type: <input type="text" name="type" value="0x08"></input></p>
                <p>To: <input type="text" name="to" value={account.address}></input></p>
                <p>Value: <input type="text" name="amount" value="0"></input></p>
                <p><input type="submit"></input></p>
            </form>
            { txURL? <a href={txURL} target='_blank' rel="noreferrer">{txURL}</a> : "doSendTx returns null" }
        </div>
    );
};

export default KlaytnVT;