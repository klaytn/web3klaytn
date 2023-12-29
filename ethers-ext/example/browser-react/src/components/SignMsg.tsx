import { useState } from 'react';

import { ethers } from 'ethers'
// import { Web3Provider } from '@klaytn/ethers-ext'
import { Web3Provider } from '@ethersproject/providers';

import { Account, Signature } from '../types';

type Props = {
  account: Account;
};

function SignMsg({ account }: Props) {

  var [signature, setSignature] = useState<Signature>({});

  function isKaikas() {
    // @ts-ignore
    return account.provider && account.provider.provider.isKaikas;
  }

  async function signMsg(_message: string) {
    try {
      var _signature: string;
      var _recoveredAddress: string;
  
      const provider = account.provider; 
      
      if (isKaikas()) {
        
        const { hexlify, toUtf8Bytes } = ethers.utils;

        // TODO : getSigner not working
        // @ts-ignore
        const signer = provider.getSigner();
        const hexMessage = hexlify(toUtf8Bytes(_message));
  
        // @ts-ignore
        _signature  = await provider.send("eth_sign", [await signer.getAddress(), hexMessage]);
        signature.signature = _signature;
  
        // @ts-ignore
        _recoveredAddress = await provider.send("klay_recoverFromMessage", [await signer.getAddress(), hexMessage, _signature, "latest"]);
        signature.recoveredAddress = _recoveredAddress;
      } else {
        // @ts-ignore
        const signer = provider.getSigner();
  
        _signature = await signer.signMessage(_message);
        signature.signature = _signature;
        
        _recoveredAddress = ethers.utils.verifyMessage(_message, _signature);
        signature.recoveredAddress = _recoveredAddress;
      }

      setSignature({
        message: _message,
        signature: _signature,
        recoveredAddress: _recoveredAddress
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form action="/doSign" method="post"
      onSubmit={async function(e){
        e.preventDefault();
        // @ts-ignore
        await signMsg(e.target.message.value);
      }}
    >
      <p>Message: <input type="text" name="message" value={signature.message}></input></p>
      <p>Signature: <input type="textarea" name="signature" value={signature.signature}></input></p>
      <p>RecoveredAddress: <input type="textarea" name="recoveredAddress" value={signature.recoveredAddress}></input></p>
      <p><input type="submit"></input></p>
    </form>
  );
};

export default SignMsg;
