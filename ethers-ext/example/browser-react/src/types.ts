import ethers from "ethers";

export interface Account {
  provider?: ethers.providers.Web3Provider
  isKaikas?: boolean
  isMetaMask?: boolean
  chainId?: number
  address?: string
  success?: boolean
  error?: any
}
