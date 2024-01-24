import { useState } from 'react';
import { Account } from '../types';
import { doSignTx } from '../util';
import { TxType, parseKlay } from '@klaytn/js-ext-core';

type Props = {
  account: Account;
};

function KlaytnFeeDelVT({ account }: Props) {
    const [txhash, setTxhash] = useState<string>("");
    const [error, setError] = useState<any>(null);

    async function handleSubmit(e: any) {
        e.preventDefault();
        const toAddr = e.target.to.value;
        const valuePeb = parseKlay(e.target.amount.value);
        const tx = {
            type: TxType.FeeDelegatedValueTransfer, // 0x09
            to: toAddr, // send to myself
            value: valuePeb,
        };

        try {
            const txhash = await doSignTx(account, tx);
            setTxhash(txhash);
        } catch (e: any) {
            setError(e);
        }
    }

    return (
        <div className="menu-component"> 
            <form onSubmit={handleSubmit}>
                <p>Type: <input type="text" name="type" value="0x09"></input></p>
                <p>To: <input type="text" name="to" value={account.address}></input></p>
                <p>Value: <input type="text" name="amount" value="0"></input></p>
                <p><input type="submit"></input></p>
            </form>
            { txhash? <a target="_blank" href={txhash} rel="noreferrer">{txhash}</a> : null }
            { error? <text><b style={{ color: "red" }}>{error}</b></text> : null }
        </div>
    );
};

export default KlaytnFeeDelVT;