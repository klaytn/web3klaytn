import { useState } from 'react';
import { Account } from '../types';
import { doSendTx } from '../util';

type Props = {
  account: Account;
};

function LegacyVT({ account }: Props) {
    const [txURL, setTxURL] = useState('');

    async function sendLegacyVT(address: string) {
        const sentTxURL = await doSendTx( account, async (address: string) => {
            return {
                to: address, 
                value: 0,
            };
        });
        setTxURL( sentTxURL? sentTxURL: 'doSendTx returns null');
    }
    return (
        <div className="menu-component"> 
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
            <a href={txURL} target='_blank' rel="noreferrer">{txURL}</a>
        </div>
    );
};

export default LegacyVT;