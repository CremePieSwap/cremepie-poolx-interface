import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 3525595 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 10512000

export const START_NEW_POOL_AT = 1609255800 // 2020/12/29 22h30

export const BSCX_PRICE_POOL = 0
export const ZSEED_PRICE_POOL = 2
export const ZSEED_BSCX_PRICE_POOL = 1

export const LP_ADDRESSES_STAKE_BSCX = {
  56: '0xA32A983a64ce21834221AA0AD1f1533907553136',
  97: '0x8390ba50006860538936C96C1F283019Fbe72BFd'
}

// export const LP_BALANCE_LV1 = 5 // TEST
// export const LP_BALANCE_LV2 = 15 // TEST
export const LP_BALANCE_LV1 = 30
export const LP_BALANCE_LV2 = 300

// export const ZSEED_TOKEN = '0x137dea62c694eaa46ab70ce539bb680450a2e409' // TEST
// export const BSCX_TOKEN = '0x7d7f7bbc88239cc2463797632faf94aa1088c7d2' // TEST
export const ZSEED_TOKEN = '0x5cd50Aae14E14B3fdF3fF13c7A40e8cf5ae8b0A5'
export const BSCX_TOKEN = '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
export const ZD_TOKEN = '0x1c213179c2c08906fb759878860652a61727ed14'

export const REFERRAL = '0x7337161B3890B6E46352cfa4ef3B6D3094500F5b' // Polygon

// TODO: change the address & set LP pool
export const contractAddresses = {
  sushi: {
    56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587', // bscx token
  },
  masterChef: {
    56: '0x47f30f5189c979e9f71ac500e5cba0000b5ebd0c',
  },
  masterChefV2: {
    56: '0x140a98690666d8b447dcd3e33b2990b1fBd887aa',
  },
  masterChefV3: {
    56: '0x683260Adb0FD7A128Fe37B1197c7897402b65259',
  },
  weth: {
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd' // wbnb
  }
}

export const VERSIONS = {
  V1: 'V1',
  V2: 'V2',
  V3: 'V3'
}

export const supportedPools = [
  // BSCEX Project
  // {
  //   pid: 3,
  //   stake: true,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   version: VERSIONS.V3,
  //   project: 'BSCX',
  //   lpAddresses: {
  //     56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
  //   },
  //   tokenAddresses: {
  //     56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
  //   },
  //   token2Addresses: {
  //     56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
  //   },
  //   rewardToken: {
  //     address: MLTP,
  //     symbol: 'MLTP'
  //   },
  //   name: 'BSCX > MLTP',
  //   symbol: 'BSCX Earn MLTP',
  //   symbolShort: 'BSCX > MLTP',
  //   description: `Stake BSCX Earn MLTP`,
  //   tokenSymbol: 'BSCX',
  //   token2Symbol: 'MLTP',
  //   icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   icon2: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: '',
  //   removeLiquidityLink: ''
  // }
]
.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1) )

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const PROJECTS = {
  BSCX: {
    name: 'BSCX',
    status: 'active',
    logo: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    description: "Stake BSCX, earn other tokens",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: BSCX_TOKEN
  }
}

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}
