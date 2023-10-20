import { getAddress } from "@ethersproject/address";
import { Bytes } from "@ethersproject/bytes";
import { ProgressCallback, decryptKeystore, decryptKeystoreSync } from "@ethersproject/json-wallets";
import _ from "lodash";

// Decrypted keystore private keys.
export interface KeystoreAccountList {
  address: string;
  // The first private key in the privateKeyList. For backward compatilibilty with KeystoreAccount.
  privateKey: string;
  privateKeyList: string[];
}

// Cipher is an opaque structure to be passed down to decryption library.
type EncryptedKey = any;

// The V3 keystore defined in https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition
// or https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage/
interface KeystoreV3 {
  version: number,
  crypto: EncryptedKey,
  address?: string,
  id?: string,
}

// The V4 keystore defined in KIP-3 (https://github.com/klaytn/kips/blob/main/KIPs/kip-3.md)
// It's not named "V4" because EIP-2335 keystore is also version 4 (https://eips.ethereum.org/EIPS/eip-2335)
interface KeystoreKIP3 {
  version: number,
  keyring: EncryptedKey[] | EncryptedKey[][],
  address?: string,
  id?: string,
}

// Flatten a KIP-3 JSON into multiple V3 JSONs, each V3 is derived from one keyring element.
export function flattenKeystoreKIP3(json: string): string[] {
  const data: KeystoreKIP3 = JSON.parse(json);
  const keyring = data.keyring;
  if (!_.isArray(keyring)) {
    throw new Error("Invalid KIP-3 JSON wallet");
  }

  let ciphers: any[] = [];
  if (!_.isArray(keyring[0])) {
    ciphers = _.flattenDepth(keyring, 1);
  } else {
    ciphers = _.flattenDepth(keyring, 2);
  }

  return _.map(ciphers, (cipher) => {
    const v3: KeystoreV3 = {
      ...data,
      crypto: cipher,
    };

    // Delete now unnecessary keyring field.
    delete (v3 as any).keyring;

    // The address may not coincide with the decrypted private key.
    // When the address field exists, ethers decryptKeystore try to match the address and private key,
    // resulting in "address mismatch" error. Without the address field, decryptKeystore skips the check.
    delete v3.address;

    return JSON.stringify(v3);
  });
}

// Analogous to isKeystoreWallet in @ethersproject/json-wallets,
// isKIP3Wallet determines if it's a KIP-3 wallet.
export function isKIP3Json(json: string): boolean {
  let data: any = null;
  try {
    data = JSON.parse(json);
  } catch {
    return false;
  }
  return _.isNumber(data.version) && (data.version == 4) && _.isArray(data.keyring);
}

function decryptKIP3(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<KeystoreAccountList> {
  const obj = JSON.parse(json);
  const jsonList = flattenKeystoreKIP3(json);
  const count = jsonList.length;

  const accounts = _.map(jsonList, (json, index) => {
    const result = decryptKeystoreSync(json, password);
    if (progressCallback) {
      progressCallback((index + 1) / count);
    }
    return result;
  });

  return Promise.resolve({
    address: getAddress(obj.address), // the address may not coincide with private keys, get directly from the json.
    privateKey: accounts[0].privateKey,
    privateKeyList: _.map(accounts, (account) => account.privateKey),
  });
}

function decryptKIP3Sync(json: string, password: Bytes | string): KeystoreAccountList {
  const obj = JSON.parse(json);
  const jsonList = flattenKeystoreKIP3(json);

  const accounts = _.map(jsonList, (json) => {
    return decryptKeystoreSync(json, password);
  });

  return {
    address: getAddress(obj.address), // the address may not coincide with private keys, get directly from the json.
    privateKey: accounts[0].privateKey,
    privateKeyList: _.map(accounts, (account) => account.privateKey),
  };
}

export function decryptKeystoreList(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<KeystoreAccountList> {
  if (isKIP3Json(json)) {
    return decryptKIP3(json, password, progressCallback);
  } else {
    // Because ethers decryptJsonWallet is not an async function,
    // decryptJsonWalletList is not an async function either, hence using 'then'.
    return decryptKeystore(json, password, progressCallback).then((account) => {
      return {
        address: account.address,
        privateKey: account.privateKey,
        privateKeyList: [account.privateKey],
      };
    });
  }
}

export function decryptKeystoreListSync(json: string, password: Bytes | string): KeystoreAccountList {
  if (isKIP3Json(json)) {
    return decryptKIP3Sync(json, password);
  } else {
    const account = decryptKeystoreSync(json, password);
    return {
      address: account.address,
      privateKey: account.privateKey,
      privateKeyList: [account.privateKey],
    };
  }
}