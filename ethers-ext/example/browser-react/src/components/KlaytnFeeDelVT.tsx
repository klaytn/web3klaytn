import { useState } from 'react';
import { Account } from '../types';
import { doSignTx } from '../util';
import { TxType } from '@klaytn/js-ext-core';

type Props = {
  account: Account;
};

function KlaytnFeeDelVT({ account }: Props) {
    const [txURL, setTxURL] = useState('');

    async function sendKlaytnFeeDelVT(address: string) {
        const sentTxURL = await doSignTx( account, async (address: string) => {
            return {
                type: TxType.FeeDelegatedValueTransfer, // 0x09
                to: address, // send to myself
                value: 0,
            };
        });
        setTxURL( sentTxURL? sentTxURL: 'doSignTx returns null');
    }
    return (
        <div className="menu-component"> 
            <form action="/sendKlaytnFeeDel" method="post"
                onSubmit={async function(e){
                    e.preventDefault();
                    // @ts-ignore
                    await sendKlaytnFeeDelVT(e.target.to.value);
                }}
            >
                <p>Type: <input type="text" name="type" value="0x08"></input></p>
                <p>To: <input type="text" name="to" value={account.address}></input></p>
                <p>Value: <input type="text" name="amount" value="0"></input></p>
                <p><input type="submit"></input></p>
            </form>
            <a href={txURL} target='_blank' rel="noreferrer">{txURL}</a>
        </div>
    );
};

export default KlaytnFeeDelVT;