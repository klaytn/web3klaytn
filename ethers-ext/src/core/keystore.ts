import aes from "aes-js";
import scrypt from "scrypt-js";
import {_KeystoreAccount, KeystoreAccount} from "@ethersproject/json-wallets/lib/keystore";
import {looseArrayify, searchPath, getPassword} from "@ethersproject/json-wallets/lib/utils";
import {arrayify, Bytes, computeAddress, concat, entropyToMnemonic, hexlify, keccak256, ProgressCallback} from "ethers/lib/utils";
import {defaultPath, HDNode} from "@ethersproject/hdnode";
import {Logger } from "@ethersproject/logger";
import {version} from "@ethersproject/json-wallets/lib/_version"
import { ExternallyOwnedAccount } from "@ethersproject/abstract-signer";
import { pbkdf2 as _pbkdf2 } from "@ethersproject/pbkdf2";
import {isCrowdsaleWallet,decryptCrowdsale, isKeystoreWallet} from "@ethersproject/json-wallets"
const logger = Logger.from(version)

export function decryptJsonWallet(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<ExternallyOwnedAccount> {
  if (isCrowdsaleWallet(json)) {
      if (progressCallback) { progressCallback(0); }
      const account = decryptCrowdsale(json, password)
      if (progressCallback) { progressCallback(1); }
      return Promise.resolve(account);
  }

  if (isKeystoreWallet(json)) {
      return decrypt(json, password, progressCallback);
  }

  return Promise.reject(new Error("invalid JSON wallet"));
}

export function decryptJsonWalletSync(json: string, password: Bytes | string): ExternallyOwnedAccount {
  if (isCrowdsaleWallet(json)) {
      return decryptCrowdsale(json, password)
  }

  if (isKeystoreWallet(json)) {
      return decryptSync(json, password);
  }

  throw new Error("invalid JSON wallet");
}

export function decryptSync(json: string, password: Bytes | string): KeystoreAccount {
  const data = JSON.parse(json);
  
  const key = _computeKdfKey(data, password, pbkdf2Sync, scrypt.syncScrypt);
  return _getAccount(data, key);
}

export async function decrypt(json: string, password: Bytes | string, progressCallback?: ProgressCallback): Promise<KeystoreAccount> {
  const data = JSON.parse(json);

  const key = await _computeKdfKey(data, password, pbkdf2, scrypt.scrypt, progressCallback);
  return _getAccount(data, key);
}

function _decrypt(data: any, key: Uint8Array, ciphertext: Uint8Array): Uint8Array {
    const cipher = searchPath(data, "crypto/cipher");
    if (cipher === "aes-128-ctr") {
        const iv = looseArrayify(searchPath(data, "crypto/cipherparams/iv"))
        const counter = new aes.Counter(iv);

        const aesCtr = new aes.ModeOfOperation.ctr(key, counter);

        return arrayify(aesCtr.decrypt(ciphertext));
    }
    //@ts-ignore
    return null;
}

function _getAccount(data: any, key: Uint8Array): KeystoreAccount {
  const ciphertext = looseArrayify(searchPath(data, "crypto/ciphertext"));

  const computedMAC = hexlify(keccak256(concat([key.slice(16, 32), ciphertext]))).substring(2);
  if (computedMAC !== searchPath(data, "crypto/mac").toLowerCase()) {
    throw new Error("invalid password");
  }

  const privateKey = _decrypt(data, key.slice(0, 16), ciphertext);

  if (!privateKey) {
    logger.throwError("unsupported cipher", Logger.errors.UNSUPPORTED_OPERATION, {
      operation: "decrypt"
    });
  }

  const mnemonicKey = key.slice(32, 64);

  // const address = computeAddress(privateKey);
  // if (data.address) {
  //   let check = data.address.toLowerCase();
  //   if (check.substring(0, 2) !== "0x") { check = "0x" + check; }

  //   if (getAddress(check) !== address) {
  //     throw new Error("address mismatch");
  //   }
  // }

  const account: _KeystoreAccount = {
    _isKeystoreAccount: true,
    address: data.address,
    privateKey: hexlify(privateKey)
  };

  // Version 0.1 x-ethers metadata must contain an encrypted mnemonic phrase
  if (searchPath(data, "x-ethers/version") === "0.1") {
    const mnemonicCiphertext = looseArrayify(searchPath(data, "x-ethers/mnemonicCiphertext"));
    const mnemonicIv = looseArrayify(searchPath(data, "x-ethers/mnemonicCounter"));

    const mnemonicCounter = new aes.Counter(mnemonicIv);
    const mnemonicAesCtr = new aes.ModeOfOperation.ctr(mnemonicKey, mnemonicCounter);

    const path = searchPath(data, "x-ethers/path") || defaultPath;
    const locale = searchPath(data, "x-ethers/locale") || "en";

    const entropy = arrayify(mnemonicAesCtr.decrypt(mnemonicCiphertext));

    try {
      const mnemonic = entropyToMnemonic(entropy, locale);
      //@ts-ignore
      const node = HDNode.fromMnemonic(mnemonic, null, locale).derivePath(path);

      if (node.privateKey != account.privateKey) {
        throw new Error("mnemonic mismatch");
      }

      account.mnemonic = node.mnemonic;
    } catch (error) {
      // If we don't have the locale wordlist installed to
      // read this mnemonic, just bail and don't set the
      // mnemonic
      //@ts-ignore
      if (error.code !== Logger.errors.INVALID_ARGUMENT || error.argument !== "wordlist") {
        throw error;
      }
    }
  }

  return new KeystoreAccount(account);
}

type ScryptFunc<T> = (pw: Uint8Array, salt: Uint8Array, n: number, r: number, p: number, dkLen: number, callback?: ProgressCallback) => T;
type Pbkdf2Func<T> = (pw: Uint8Array, salt: Uint8Array, c: number, dkLen: number, prfFunc: string) => T;

function pbkdf2Sync(passwordBytes: Uint8Array, salt: Uint8Array, count: number, dkLen: number, prfFunc: string): Uint8Array {
    return arrayify(_pbkdf2(passwordBytes, salt, count, dkLen, prfFunc));
}

function pbkdf2(passwordBytes: Uint8Array, salt: Uint8Array, count: number, dkLen: number, prfFunc: string): Promise<Uint8Array> {
    return Promise.resolve(pbkdf2Sync(passwordBytes, salt, count, dkLen, prfFunc));
}

function _computeKdfKey<T>(data: any, password: Bytes | string, pbkdf2Func: Pbkdf2Func<T>, scryptFunc: ScryptFunc<T>, progressCallback?: ProgressCallback): T {
    const passwordBytes = getPassword(password);

    const kdf = searchPath(data, "crypto/kdf");

    if (kdf && typeof(kdf) === "string") {
        const throwError = function(name: string, value: any): never {
            return logger.throwArgumentError("invalid key-derivation function parameters", name, value);
        }

        if (kdf.toLowerCase() === "scrypt") {
            const salt = looseArrayify(searchPath(data, "crypto/kdfparams/salt"));
            const N = parseInt(searchPath(data, "crypto/kdfparams/n"));
            const r = parseInt(searchPath(data, "crypto/kdfparams/r"));
            const p = parseInt(searchPath(data, "crypto/kdfparams/p"));

            // Check for all required parameters
            if (!N || !r || !p) { throwError("kdf", kdf); }

            // Make sure N is a power of 2
            if ((N & (N - 1)) !== 0) { throwError("N", N); }

            const dkLen = parseInt(searchPath(data, "crypto/kdfparams/dklen"));
            if (dkLen !== 32) { throwError("dklen", dkLen); }

            return scryptFunc(passwordBytes, salt, N, r, p, 64, progressCallback);

        } else if (kdf.toLowerCase() === "pbkdf2") {

            const salt = looseArrayify(searchPath(data, "crypto/kdfparams/salt"));

            let prfFunc: string = "";
            const prf = searchPath(data, "crypto/kdfparams/prf");
            if (prf === "hmac-sha256") {
                prfFunc = "sha256";
            } else if (prf === "hmac-sha512") {
                prfFunc = "sha512";
            } else {
                throwError("prf", prf);
            }

            const count = parseInt(searchPath(data, "crypto/kdfparams/c"));

            const dkLen = parseInt(searchPath(data, "crypto/kdfparams/dklen"));
            if (dkLen !== 32) { throwError("dklen", dkLen); }

            return pbkdf2Func(passwordBytes, salt, count, dkLen, prfFunc);
        }
    }

    return logger.throwArgumentError("unsupported key-derivation function", "kdf", kdf);
}