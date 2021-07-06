import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import axios from 'axios'
import config from '../config'
import { supportedPools,
  START_NEW_POOL_AT,
  ZSEED_TOKEN,
  BSCX_TOKEN,
  ZD_TOKEN,
  TOOLS_TOKEN,
  ZDCASH_TOKEN,
  BNB_TOKEN,
  BTCB_TOKEN,
  ETH_TOKEN,
  USDT_TOKEN,
  VERSIONS,
  ALPHA_TOKEN,
  LINK_TOKEN,
  USDC_TOKEN,
  BUNNY_TOKEN,
  UST_TOKEN,
  SUSHI_TOKEN,
  COMP_TOKEN,
  XPO_TOKEN,
  ATOM_TOKEN,
  AUTO_TOKEN,
  BRY_TOKEN,
  DEGO_TOKEN,
  INJ_TOKEN,
  ALICE_TOKEN,
  NRV_TOKEN,
  BEL_TOKEN,
  SWTH_TOKEN,
  TWIN_TOKEN,
  TKO,
  bDIGG,
  ARPA,
  UNFI,
  ITAM,
  DOT,
  SFP,
  ZIL,
  bBADGER,
  LIT,
  DODO,
  BTCST,
  IOTX,
  LINA,
  FRONT,
  BARMY_TOKEN,
  IBARMY_TOKEN,
  BREW,
  MLTP,
  CORGIB
} from './lib/constants'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const MaxUint256 = '999999999900000000000000000000000000000'

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getPrices = async () => {
  var { data } = await axios.get(`${config.api}/block/price`)

  return data
}

export const getTVL = async () => {
  var { data } = await axios.get(`${config.api}/block/total-value-lock`)

  return data
}

export const getReferral = async (account) => {
  var { data } = await axios.get(`${config.api}/user/referral/${account}`)

  return data.data
}

export const saveCountry = async (account) => {
  var { data } = await axios.get(`${config.api}/detail/${account}`)

  return data.data
}

export async function UnknownBlock(address, method, params, cache) {
  var { data } = await axios.post(`${config.api}/read/${address}`, {
      method,
      params,
      cache
  })

  return data.data
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}

export const getXBSCXAddress = (sushi) => {
  return sushi && sushi.xSushiAddress
}

export const getMasterChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChef
}
export const getMasterChefContractV2 = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChefV2
}
export const getMasterChefContractV3 = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChefV3
}
export const getLaunchPoolV1Contract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXV1
}
export const getReferralContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.referralContract
}
export const getLaunchPoolTOOLSContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.launchPoolXTOOLS
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}
export const getXSushiStakingContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.xSushiStaking
}
export const getMakerContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.maker
}
export const getMakerAddress = (sushi) => {
  return sushi && sushi.makerAddress
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
        ({
          pid,
          project,
          name,
          symbol,
          icon,
          icon2,
          description,
          tokenAddress,
          tokenSymbol,
          token2Symbol,
          token2Address,
          symbolShort,
          tokenContract,
          token2Contract,
          isHot,
          isNew,
          lpAddress,
          lpContract,
          protocal,
          iconProtocal,
          pairLink,
          addLiquidityLink,
          removeLiquidityLink,
          rewardToken,
          version,
          old,
          stake,
          decimals,
          decimalsReward,
          rewardTokenContract
        }) => ({
          pid,
          project,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          token2Address,
          tokenSymbol,
          token2Symbol,
          token2Contract,
          symbol,
          symbolShort,
          isHot,
          isNew,
          tokenContract,
          earnToken: 'bscx',
          earnTokenAddress: sushi.contracts.sushi.options.address,
          icon,
          icon2,
          description,
          protocal,
          iconProtocal,
          pairLink,
          addLiquidityLink,
          removeLiquidityLink,
          rewardToken,
          version,
          old,
          stake,
          decimals,
          decimalsReward,
          rewardTokenContract
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint, rewardToken } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoints(rewardToken)
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
  // const poolInfo = await masterChefContract.methods.poolInfo(pid).call()
  const reward = await masterChefContract.methods.pendingReward(pid, account).call()
  let realReward = reward * 0.9

  return realReward
}

export const getPercentLockReward  = async (masterChefContract, pid) => {
  const poolInfo = await masterChefContract.methods.poolInfo(pid).call()

  return poolInfo.percentLockReward
}

export const getTotalLocked = async (masterChefContract, rewardToken) => {
  return masterChefContract.methods.totalLocks(rewardToken).call()
}

export const getTotalUserLocked = async (masterChefContract, account, pid) => {
  return masterChefContract.methods.lockOf(account, pid).call()
}

export const getTotalUserLockedV1 = async (masterChefV1Contract, account) => {
  return masterChefV1Contract.methods.lockOf(account).call()
}

export const getLPValue = async (
  masterChefContract,
  lpContract,
  tokenContract,
  token2Contract,
  pid,
  rewardToken,
  version,
  rewardTokenContract
) => {
  // Get balance of the token address
  let cacheValue = localStorage.getItem('CACHE_usePrice_value')
  cacheValue = cacheValue || {}
  let prices = JSON.parse(cacheValue)

  let tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()

  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  let avaiableReward = 0
  let totalLockedReward = 0
  let totalPoolSupply = 0

  if (version === VERSIONS.V2 || version === VERSIONS.V3) {
    const rewardBalance = await rewardTokenContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()

    totalPoolSupply = await masterChefContract.methods.lpBalances(pid).call()
    totalLockedReward = await masterChefContract.methods.totalLock(rewardToken).call()

    if (rewardToken.toLowerCase() === tokenContract._address.toLowerCase()) {
      avaiableReward = Number(rewardBalance) - Number(totalPoolSupply) - Number(totalLockedReward)
    } else {
      avaiableReward = Number(rewardBalance) - Number(totalLockedReward)
      tokenAmountWholeLP = totalPoolSupply
    }
  }
  avaiableReward = new BigNumber(avaiableReward)
  totalLockedReward = new BigNumber(totalLockedReward)
  totalPoolSupply = new BigNumber(totalPoolSupply)

  // Get total token2 value for the lpContract = w1
  const lpContractToken2 = await token2Contract.methods
    .balanceOf(lpContract.options.address)
    .call()

  const token2Decimals = await token2Contract.methods.decimals().call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const totalLpToken2Value = portionLp.times(lpContractToken2).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const token2Amount = new BigNumber(lpContractToken2)
    .times(portionLp)
    .div(new BigNumber(10).pow(token2Decimals))
   const tokenAmountTotal = new BigNumber(tokenAmountWholeLP)
    .div(new BigNumber(10).pow(tokenDecimals))

  const token2AmountTotal = new BigNumber(lpContractToken2)
    .div(new BigNumber(10).pow(token2Decimals))

  let tokenPrice = 0
  if (tokenContract._address.toLowerCase() === BSCX_TOKEN.toLowerCase()) {
    tokenPrice = prices.bscx
  } else if (tokenContract._address.toLowerCase() === ZSEED_TOKEN.toLowerCase()) {
    tokenPrice = prices.zseed
  } else if (tokenContract._address.toLowerCase() === ZD_TOKEN.toLowerCase()) {
    tokenPrice = prices.zd
  } else if (tokenContract._address.toLowerCase() === TOOLS_TOKEN.toLowerCase()) {
    tokenPrice = prices.tools
  } else if (tokenContract._address.toLowerCase() === ZDCASH_TOKEN.toLowerCase()) {
    tokenPrice = prices.zdcash
  } else if (tokenContract._address.toLowerCase() === BNB_TOKEN.toLowerCase()) {
    tokenPrice = prices.bnb
  } else if (tokenContract._address.toLowerCase() === ETH_TOKEN.toLowerCase()) {
    tokenPrice = prices.eth
  } else if (tokenContract._address.toLowerCase() === BTCB_TOKEN.toLowerCase()) {
    tokenPrice = prices.btcb
  } else if (tokenContract._address.toLowerCase() === USDT_TOKEN.toLowerCase()) {
    tokenPrice = prices.usdt
  } else if (tokenContract._address.toLowerCase() === ALPHA_TOKEN.toLowerCase()) {
    tokenPrice = prices.alpha
  } else if (tokenContract._address.toLowerCase() === LINK_TOKEN.toLowerCase()) {
    tokenPrice = prices.link
  } else if (tokenContract._address.toLowerCase() === USDC_TOKEN.toLowerCase()) {
    tokenPrice = prices.usdc
  } else if (tokenContract._address.toLowerCase() === BUNNY_TOKEN.toLowerCase()) {
    tokenPrice = prices.bunny
  } else if (tokenContract._address.toLowerCase() === UST_TOKEN.toLowerCase()) {
    tokenPrice = prices.ust
  } else if (tokenContract._address.toLowerCase() === SUSHI_TOKEN.toLowerCase()) {
    tokenPrice = prices.sushi
  } else if (tokenContract._address.toLowerCase() === COMP_TOKEN.toLowerCase()) {
    tokenPrice = prices.comp
  } else if (tokenContract._address.toLowerCase() === XPO_TOKEN.toLowerCase()) {
    tokenPrice = prices.xpo
  } else if (tokenContract._address.toLowerCase() === ATOM_TOKEN.toLowerCase()) {
    tokenPrice = prices.atom
  } else if (tokenContract._address.toLowerCase() === AUTO_TOKEN.toLowerCase()) {
    tokenPrice = prices.auto
  } else if (tokenContract._address.toLowerCase() === DEGO_TOKEN.toLowerCase()) {
    tokenPrice = prices.dego
  } else if (tokenContract._address.toLowerCase() === INJ_TOKEN.toLowerCase()) {
    tokenPrice = prices.inj
  } else if (tokenContract._address.toLowerCase() === BRY_TOKEN.toLowerCase()) {
    tokenPrice = prices.bry
  } else if (tokenContract._address.toLowerCase() === ALICE_TOKEN.toLowerCase()) {
    tokenPrice = prices.alice
  } else if (tokenContract._address.toLowerCase() === NRV_TOKEN.toLowerCase()) {
    tokenPrice = prices.nrv
  } else if (tokenContract._address.toLowerCase() === BEL_TOKEN.toLowerCase()) {
    tokenPrice = prices.bel
  } else if (tokenContract._address.toLowerCase() === SWTH_TOKEN.toLowerCase()) {
    tokenPrice = prices.swth
  } else if (tokenContract._address.toLowerCase() === TWIN_TOKEN.toLowerCase()) {
    tokenPrice = prices.twin
  } else if (tokenContract._address.toLowerCase() === TKO.toLowerCase()) {
    tokenPrice = prices.tko
  } else if (tokenContract._address.toLowerCase() === bDIGG.toLowerCase()) {
    tokenPrice = prices.digg
  } else if (tokenContract._address.toLowerCase() === ARPA.toLowerCase()) {
    tokenPrice = prices.arpa
  } else if (tokenContract._address.toLowerCase() === UNFI.toLowerCase()) {
    tokenPrice = prices.unfi
  } else if (tokenContract._address.toLowerCase() === ITAM.toLowerCase()) {
    tokenPrice = prices.itam
  } else if (tokenContract._address.toLowerCase() === DOT.toLowerCase()) {
    tokenPrice = prices.dot
  } else if (tokenContract._address.toLowerCase() === SFP.toLowerCase()) {
    tokenPrice = prices.sfp
  } else if (tokenContract._address.toLowerCase() === ZIL.toLowerCase()) {
    tokenPrice = prices.zil
  } else if (tokenContract._address.toLowerCase() === bBADGER.toLowerCase()) {
    tokenPrice = prices.bbadger
  } else if (tokenContract._address.toLowerCase() === LIT.toLowerCase()) {
    tokenPrice = prices.lit
  } else if (tokenContract._address.toLowerCase() === DODO.toLowerCase()) {
    tokenPrice = prices.dodo
  } else if (tokenContract._address.toLowerCase() === BTCST.toLowerCase()) {
    tokenPrice = prices.btcst
  } else if (tokenContract._address.toLowerCase() === IOTX.toLowerCase()) {
    tokenPrice = prices.iotx
  } else if (tokenContract._address.toLowerCase() === LINA.toLowerCase()) {
    tokenPrice = prices.lina
  } else if (tokenContract._address.toLowerCase() === FRONT.toLowerCase()) {
    tokenPrice = prices.front
  } else if (tokenContract._address.toLowerCase() === BARMY_TOKEN.toLowerCase()) {
    tokenPrice = prices.barmy
  } else if (tokenContract._address.toLowerCase() === BREW.toLowerCase()) {
    tokenPrice = prices.brew
  } else if (tokenContract._address.toLowerCase() === MLTP.toLowerCase()) {
    tokenPrice = prices.mltp
  } else if (tokenContract._address.toLowerCase() === CORGIB.toLowerCase()) {
    tokenPrice = prices.corgib
  }

  let rewardPrice = 0
  if (rewardToken.toLowerCase() === BSCX_TOKEN.toLowerCase()) {
    rewardPrice = prices.bscx
  } else if (rewardToken.toLowerCase() === ZSEED_TOKEN.toLowerCase()) {
    rewardPrice = prices.zseed
  } else if (rewardToken.toLowerCase() === ZD_TOKEN.toLowerCase()) {
    rewardPrice = prices.zd
  } else if (rewardToken.toLowerCase() === TOOLS_TOKEN.toLowerCase()) {
    rewardPrice = prices.tools
  } else if (rewardToken.toLowerCase() === ZDCASH_TOKEN.toLowerCase()) {
    rewardPrice = prices.zdcash
    console.log('rewardPrice: ', rewardPrice)
  } else if (rewardToken.toLowerCase() === XPO_TOKEN.toLowerCase()) {
    rewardPrice = prices.xpo
  } else if (rewardToken.toLowerCase() === TWIN_TOKEN.toLowerCase()) {
    rewardPrice = prices.twin
  } else if (rewardToken.toLowerCase() === IBARMY_TOKEN.toLowerCase()) {
    rewardPrice = prices.ibarmy
  } else if (rewardToken.toLowerCase() === BREW.toLowerCase()) {
    rewardPrice = prices.brew
  } else if (rewardToken.toLowerCase() === BARMY_TOKEN.toLowerCase()) {
    rewardPrice = prices.barmy
  } else if (rewardToken.toLowerCase() === MLTP.toLowerCase()) {
    rewardPrice = prices.mltp
  } else if (rewardToken.toLowerCase() === CORGIB.toLowerCase()) {
    rewardPrice = prices.corgib
  }

  tokenPrice = new BigNumber(tokenPrice)
  let rewardTokenPrice = new BigNumber(rewardPrice)
  var tokenPriceInToken2 = tokenPrice

  // var tokenPriceInToken2 = tokenAmountTotal.div(token2AmountTotal)
  var totalToken2Value = totalLpToken2Value.div(new BigNumber(10).pow(token2Decimals))
  var usdValue = tokenAmountTotal.times(tokenPrice).times(2)

  if ((version === VERSIONS.V2 || version === VERSIONS.V3) && (token2Contract._address.toLowerCase() === tokenContract._address.toLowerCase())) {
    let amountToken = totalPoolSupply.div(new BigNumber(10).pow(tokenDecimals))
    usdValue = amountToken.times(tokenPrice)
  }

  return {
    pid,
    avaiableReward,
    totalPoolSupply,
    tokenAmount,
    token2Amount,
    totalToken2Value,
    tokenPriceInToken2,
    usdValue,
    poolWeight: await getPoolWeight(masterChefContract, pid),
    tokenAmountTotal,
    token2AmountTotal,
    rewardTokenPrice: rewardTokenPrice,
    version: version
  }
}

export const getLPValuePrice = async (
  lpContract,
  tokenContract,
  token2Contract
) => {
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  const lpContractToken2 = await token2Contract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const token2Decimals = await token2Contract.methods.decimals().call()

  const tokenAmountTotal = new BigNumber(tokenAmountWholeLP)
    .div(new BigNumber(10).pow(tokenDecimals))

  const token2AmountTotal = new BigNumber(lpContractToken2)
    .div(new BigNumber(10).pow(token2Decimals))

  return {
    price: token2AmountTotal.div(tokenAmountTotal)
  }
}


export const getLPTokenStaked = async (
  sushi,
  pid,
  version
) => {
  var chef = getMasterChefContract(sushi)

  if (version === VERSIONS.V2) {
    chef = getMasterChefContractV2(sushi)
  } else if (version === VERSIONS.V3) {
    chef = getMasterChefContractV3(sushi)
  }

  try {
    // const balance = await lpContract.methods
    //   .balanceOf(chef.options.address)
    //   .call()
    const balance = await chef.methods.lpBalances(pid).call()
    return new BigNumber(balance)
  } catch (e) {
    return
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, MaxUint256)
    .send({ from: account })
}

export const approveAddress = async (lpContract, address, account) => {
  return lpContract.methods
      .approve(address, MaxUint256)
      .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'totalSupply():(uint256)', [], true)
  )
}

export const getAmountLPStakeBSCX = async (sushi, account) => {
  const lpStakeBSCX = sushi.contracts.lpStakeBSCX
  return await lpStakeBSCX.methods.balanceOf(account).call()
}

export const getRewardTokenBalance = async (sushi, project, version) => {
  let contract = sushi.contracts.zseedContract

  if (project === 'ZD') {
    contract = sushi.contracts.zdContract
  } else if (project === 'TOOLS') {
    contract = sushi.contracts.toolsContract
  } else if (project === 'ZDCASH') {
    contract = sushi.contracts.zdcashContract
  } else if (project === 'XPO') {
    contract = sushi.contracts.xpoContract
  } else if (project === 'TWIN') {
    contract = sushi.contracts.twinContract
  }

  let masterChefAddress = sushi.contracts.masterChef
  if (version === VERSIONS.V2) {
    masterChefAddress = sushi.contracts.masterChefV2
  } else if (version === VERSIONS.V3) {
    masterChefAddress = sushi.contracts.masterChefV3
  }

  let balance = await contract.methods.balanceOf(masterChefAddress._address).call()
  let balanceLocked = await masterChefAddress.methods.totalLocks(contract._address).call()
  balance = Number(balance) - Number(balanceLocked)
  balance = balance > 0 ? balance : 0

  return balance
}

export const getBSCXCirculatingSupply = async (sushi) => {
  var chef = getMasterChefContract(sushi)
  var a = new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'circulatingSupply():(uint256)', [], true)
  )

  var b = new BigNumber(
    await UnknownBlock(sushi.contracts.sushi._address, 'balanceOf(address):(uint256)', [chef._address], true)
  )
  return a.minus(b)
}

export const checkPoolActive = async (pid) => {
  var p = supportedPools.find(e => e.pid === pid)
  if (p) {
    if (p.startAt >= new Date().getTime() / 1000) {
      return false
    }
    else if (!p.startAt) {
      return true
    }
    else {
      if (localStorage.getItem('POOLACTIVE' + pid + '-' + p.startAt)) {
        return true
      }
      else {
        var { data } = await axios.get(`${config.api}/poolActive/${pid}`)
        if (data.active) {
          localStorage.setItem('POOLACTIVE' + pid + '-' + p.startAt, true)
        }
        return data.active
      }
    }
  }
  else {
    return false
  }

}

export const getNewRewardPerBlock = async (sushi, pid1 = 0, version) => {
  var chef = getMasterChefContract(sushi)

  if (version === VERSIONS.V2) {
    chef = getMasterChefContractV2(sushi)
  } else if (version === VERSIONS.V3) {
    chef = getMasterChefContractV3(sushi)
  }

  try {
    const reward = await chef.methods.getNewRewardPerBlock(pid1).call()
    const poolInfo = await chef.methods.poolInfo(pid1).call()
    let realReward = reward * ((100 - poolInfo.percentForDev) / 100)
    realReward = realReward * 0.9
    return new BigNumber(realReward)
  } catch (e) {
    return
  }

  // if (pid1 === 0) {
  //   var chef = getMasterChefContract(sushi)
  //   return new BigNumber(
  //     await UnknownBlock(chef._address, 'getNewRewardPerBlock(uint256):(uint256)', [pid1], true)
  //   )
  // }
  // else {
  //   if (await checkPoolActive(pid1 - 1)) {
  //     var chef = getMasterChefContract(sushi)
  //     return new BigNumber(
  //       await UnknownBlock(chef._address, 'getNewRewardPerBlock(uint256):(uint256)', [pid1], true)
  //     )
  //   }
  //   else {
  //     return new BigNumber("0")
  //   }
  // }
}

export const stake = async (masterChefContract, pid, amount, account, referral, decimals) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(),
      referral,
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const setReferral = async (sushi, referral, account) => {
  var referralContract = getReferralContract(sushi)

  try {
    return referralContract.methods
      .setReferral(
        referral
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const unstake = async (masterChefContract, pid, amount, account, decimals) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .claimReward(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const getRefBy = async (sushi, account) => {
  var referralContract = getReferralContract(sushi)
  const refBy = await referralContract.methods
      .referrers(account)
      .call()

  if (refBy === '0x0000000000000000000000000000000000000000') {
    return false
  }

  return refBy
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}

export const getCanUnlockBSCX = async (sushi, account) => {
  var bscx = getSushiContract(sushi)

  return new BigNumber(await bscx.methods.canUnlockAmount(account).call())
}

export const getXSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.xSushiStaking.methods.totalSupply().call())
}

export const getLockOf = async (sushi, account) => {
  var bscx = getSushiContract(sushi)

  return new BigNumber(await bscx.methods.lockOf(account).call())
}

export const getReferralAmountLv1 = async (sushi, account, rewardToken) => {
  var chef = getMasterChefContract(sushi)
  return new BigNumber(await chef.methods.referralAmountLv1(rewardToken, account).call())
}

export const getReferralAmountLv2 = async (sushi, account, rewardToken) => {
  var chef = getMasterChefContract(sushi)
  return new BigNumber(await chef.methods.referralAmountLv2(rewardToken, account).call())
}

export const unlock = async (sushi, account) => {
  var bscx = getSushiContract(sushi)
  return bscx.methods
    .unlock()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}
export const enter = async (contract, amount, account) => {
  return contract.methods
      .enter(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}

export const makerConvert = async (contract, token0, token1, account) => {
  return contract.methods
      .convert(
        token0,
        token1,
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}

export const leave = async (contract, amount, account) => {
  return contract.methods
      .leave(
          new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
}
