import { Bytes } from "@ethersproject/bytes";
import { decryptKeystoreSync } from "@ethersproject/json-wallets";
import * as _ from "lodash";
import { IKeyStore } from ".";

// Modified from KeystoreAccount at @ethersproject/json-wallets/src.ts/keystore.ts
interface KeystoreAccountList {
  address: string;
  privateKeys: string[];
}

function decryptKey(crypto: any, password: Bytes | string): string {
  const datav3 = {
    version: 3,
    crypto: crypto,
  };
  const jsonv3 = JSON.stringify(datav3);
  const ka = decryptKeystoreSync(jsonv3, password);
  return ka.privateKey;
}

/**
 * Decrypts the Klaytn KIP-3 (https://github.com/klaytn/kips/blob/main/KIPs/kip-3.md) JSON wallet.
 * KIP-3 v4 wallet comes in one of three shapes:
 * - An array of one key = [key]
 * - An array of multiple keys = [key, key, key]
 *
 * Regardless of how they are organized, each encrytped key object is decrypted
 * then returned in a flattend array of private keys.
 *
 */
function decryptKeystoreV4(json: string, password: Bytes | string): KeystoreAccountList {
  const data: IKeyStore = JSON.parse(json);
  const privateKeys: string[] = [];

  if (!_.has(data, "keyring")) {
    throw new Error("invalid JSON wallet v4 (KIP-3)");
  }
  if (!_.isArray(data.keyring)) {
    throw new Error("invalid JSON wallet v4 (KIP-3)");
  }

  _.each(data.keyring, (keyOrKeys: any) => {
    if (!_.isArray(keyOrKeys)) {
      const key: any = keyOrKeys;
      privateKeys.push(decryptKey(key, password));
    } else {
      const keys: any[] = keyOrKeys;
      _.each(keys, (key: any) => {
        privateKeys.push(decryptKey(key, password));
      });
    }
  });

  return {
    address: _.toString(data.address),
    privateKeys: privateKeys,
  };
}

/**
 * Decrypts a JSON keystore wallet and returns the account details containing
 * the account address and the list of private keys.
 * It accepts a Crowdsale wallet, V3 keystore, and KIP-3 V4 keystore wallets.
 *
 */
export function decryptKeystoreListSync(json: string, password: Bytes | string): KeystoreAccountList {
  const data: IKeyStore = JSON.parse(json);
  const version = data.version;

  // decryptKeystoreV4 handles v4 (KIP-3) wallets.
  if (version == 4) {
    return decryptKeystoreV4(json, password);
  }

  // decryptKeystoreSync handles v3 and Crowdsale wallets.
  const ka = decryptKeystoreSync(json, password);
  return {
    address: ka.address,
    privateKeys: [ka.privateKey],
  };
}