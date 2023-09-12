

export interface IKeyStore {
  address: string,
  id: string,
  version: number,
  keyring?: Keyring[] | Keyring [][],
  crypto?: Keyring,

}
export interface Keyring {
  cipher: string,
  cipherparams: CipherParams,
  ciphertext: string,
  kdf: string,
  kdfparams: KdfParam,
  mac?: string
}

interface CipherParams {
  iv: string
}

export interface KdfParam {
  salt: string,
  n: number,
  dklen: number,
  p: number,
  r: number,
  c?: number,
  prf?: string,
}

