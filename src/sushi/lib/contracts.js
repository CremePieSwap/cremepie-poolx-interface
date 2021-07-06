import BigNumber from 'bignumber.js/bignumber'
import ERC20Abi from './abi/erc20.json'
import MasterChefAbi from './abi/masterchef.json'
import MasterChefAbiV1 from './abi/masterchefV1.json'
import MasterChefAbiV2 from './abi/masterchefV2.json'
import MasterChefAbiV3 from './abi/masterchefV3.json'
import XSushiAbi from './abi/xsushi.json'
import makerAbi from './abi/maker.json'
import SushiAbi from './abi/sushi.json'
import ReferralAbi from './abi/referral.json'
import UNIV2PairAbi from './abi/uni_v2_lp.json'
import WETHAbi from './abi/weth.json'
import {
  contractAddresses,
  SUBTRACT_GAS_LIMIT,
  supportedPools,
  LP_ADDRESSES_STAKE_BSCX,
  ZSEED_TOKEN,
  ZD_TOKEN,
  TOOLS_TOKEN,
  ZDCASH_TOKEN,
  XPO_TOKEN,
  TWIN_TOKEN,
  LAUNCHPOOLX_V1,
  LAUNCHPOOLX_TOOLS,
  REFERRAL
} from './constants.js'
import * as Types from './types.js'

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3
    this.defaultConfirmations = options.defaultConfirmations
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5
    this.confirmationType =
      options.confirmationType || Types.ConfirmationType.Confirmed
    this.defaultGas = options.defaultGas
    this.defaultGasPrice = options.defaultGasPrice

    this.sushi = new this.web3.eth.Contract(SushiAbi)
    this.masterChef = new this.web3.eth.Contract(MasterChefAbi)
    this.masterChefV2 = new this.web3.eth.Contract(MasterChefAbiV2)
    this.masterChefV3 = new this.web3.eth.Contract(MasterChefAbiV3)
    this.lpStakeBSCX = new this.web3.eth.Contract(ERC20Abi)
    this.zseedContract = new this.web3.eth.Contract(ERC20Abi)
    this.zdContract = new this.web3.eth.Contract(ERC20Abi)
    this.zdcashContract = new this.web3.eth.Contract(ERC20Abi)
    this.xpoContract = new this.web3.eth.Contract(ERC20Abi)
    this.toolsContract = new this.web3.eth.Contract(ERC20Abi)
    this.twinContract = new this.web3.eth.Contract(ERC20Abi)
    this.referralContract = new this.web3.eth.Contract(ReferralAbi)

    this.xSushiStaking = new this.web3.eth.Contract(XSushiAbi)
    this.weth = new this.web3.eth.Contract(WETHAbi)
    this.maker = new this.web3.eth.Contract(makerAbi)
    this.launchPoolXV1 = new this.web3.eth.Contract(MasterChefAbiV1)
    this.launchPoolXTOOLS = new this.web3.eth.Contract(MasterChefAbiV2)

    this.pools = supportedPools.map((pool) =>
      Object.assign(pool, {
        lpAddress: pool.lpAddresses[networkId],
        tokenAddress: pool.tokenAddresses[networkId],
        token2Address: pool.token2Addresses[networkId],
        rewardTokenAddress: pool.rewardToken.address,
        rewardTokenContract: new this.web3.eth.Contract(ERC20Abi),
        lpContract: new this.web3.eth.Contract(UNIV2PairAbi),
        tokenContract: new this.web3.eth.Contract(ERC20Abi),
        token2Contract: new this.web3.eth.Contract(ERC20Abi),
      }),
    )

    this.setProvider(provider, networkId)
    this.setDefaultAccount(this.web3.eth.defaultAccount)
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      contract.setProvider(provider)
      if (address) contract.options.address = address
      else console.error('Contract address not found in network', networkId)
    }

    setProvider(this.sushi, contractAddresses.sushi[networkId])
    setProvider(this.masterChef, contractAddresses.masterChef[networkId])
    setProvider(this.masterChefV2, contractAddresses.masterChefV2[networkId])
    setProvider(this.masterChefV3, contractAddresses.masterChefV3[networkId])
    setProvider(this.maker, contractAddresses.maker[networkId])
    setProvider(this.lpStakeBSCX, LP_ADDRESSES_STAKE_BSCX[networkId])
    setProvider(this.zseedContract, ZSEED_TOKEN)
    setProvider(this.zdContract, ZD_TOKEN)
    setProvider(this.zdcashContract, ZDCASH_TOKEN)
    setProvider(this.xpoContract, XPO_TOKEN)
    setProvider(this.toolsContract, TOOLS_TOKEN)
    setProvider(this.twinContract, TWIN_TOKEN)
    setProvider(this.launchPoolXV1, LAUNCHPOOLX_V1)
    setProvider(this.launchPoolXTOOLS, LAUNCHPOOLX_TOOLS)
    setProvider(this.referralContract, REFERRAL)

    // setProvider(this.sushi, contractAddresses.sushi[networkId])
    // setProvider(this.masterChef, contractAddresses.masterChef[networkId])
    setProvider(this.xSushiStaking, contractAddresses.xSushi[networkId])
    // setProvider(this.weth, contractAddresses.weth[networkId])

    this.pools.forEach(
      ({ lpContract, lpAddress, tokenContract, token2Contract, token2Address, tokenAddress, rewardTokenAddress, rewardTokenContract }) => {
        setProvider(lpContract, lpAddress)
        setProvider(tokenContract, tokenAddress)
        setProvider(token2Contract, token2Address)
        setProvider(rewardTokenContract, rewardTokenAddress)
      },
    )
  }

  setDefaultAccount(account) {
    this.sushi.options.from = account
    this.masterChef.options.from = account
    this.masterChefV2.options.from = account
    this.masterChefV3.options.from = account
  }
}
