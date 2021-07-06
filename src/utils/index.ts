import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import config from '../config'

export { default as formatAddress } from './formatAddress'

export const bnToDec = (bn: BigNumber, decimals = 18): number => {
  return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
}

export const decToBn = (dec: number, decimals = 18) => {
  return new BigNumber(dec).multipliedBy(new BigNumber(10).pow(decimals))
}

export const isAddress = (address: string) => {
  const web3 = new Web3(config.rpc)
  return web3.utils.isAddress(address)
}
