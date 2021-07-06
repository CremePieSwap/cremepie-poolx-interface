import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000
export const START_REWARD_AT_BLOCK = 3525595 // TODO
export const NUMBER_BLOCKS_PER_YEAR = 10512000

export const START_NEW_POOL_AT = 1609255800 // 2020/12/29 22h30

export const BSCX_PRICE_POOL = 0
export const ZSEED_PRICE_POOL = 2
export const ZSEED_BSCX_PRICE_POOL = 1

export const CONSTANT_APY = 9000

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
export const TOOLS_TOKEN = '0x1311b352467d2B5c296881BaDEA82850bcd8f886'
export const ZDCASH_TOKEN = '0xd0759956fae5f5e55c84fdff2341b93d0303a62d'
export const XPO_TOKEN = '0xebb59cebfb63f218db6b5094dc14abf34d56d35d'
export const TWIN_TOKEN = '0xaf83f292fced83032f52ced45ef7dbddb586441a'
export const BARMY_TOKEN = '0x2c80bc9bfa4ec680efb949c51806bddee5ac8299'
export const IBARMY_TOKEN = '0x4e59Ee928E91e32a0fF458b568E08B1F750017e0'

export const BNB_TOKEN = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
export const BTCB_TOKEN = '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
export const ETH_TOKEN = '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
export const USDT_TOKEN = '0x55d398326f99059fF775485246999027B3197955'
export const ALPHA_TOKEN = '0xa1faa113cbe53436df28ff0aee54275c13b40975'
export const LINK_TOKEN = '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'
export const USDC_TOKEN = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
export const BUNNY_TOKEN = '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51'
export const UST_TOKEN = '0x23396cf899ca06c4472205fc903bdb4de249d6fc'
export const SUSHI_TOKEN = '0x947950bcc74888a40ffa2593c5798f11fc9124c4'
export const COMP_TOKEN = '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8'
export const ATOM_TOKEN = '0x0eb3a705fc54725037cc9e008bdede697f62f335'
export const AUTO_TOKEN = '0xa184088a740c695e156f91f5cc086a06bb78b827'
export const INJ_TOKEN = '0xa2b726b1145a4773f68593cf171187d8ebe4d495'
export const DEGO_TOKEN = '0x3fda9383a84c05ec8f7630fe10adf1fac13241cc'
export const BRY_TOKEN = '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830'
export const ALICE_TOKEN = '0xac51066d7bec65dc4589368da368b212745d63e8'
export const NRV_TOKEN = '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096'
export const BEL_TOKEN = '0x8443f091997f06a61670b735ed92734f5628692f'
export const SWTH_TOKEN = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c'
export const TKO = '0x9f589e3eabe42ebc94a44727b3f3531c0c877809'
export const bDIGG = '0x5986d5c77c65e5801a5caa4fae80089f870a71da'
export const ARPA = '0x6f769e65c14ebd1f68817f5f1dcdb61cfa2d6f7e'
export const UNFI = '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b'
export const ITAM = '0x04c747b40be4d535fc83d09939fb0f626f32800b'
export const ADA = '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47'

export const DOT = '0x7083609fce4d1d8dc0c979aab8c869ea2c873402'
export const SFP = '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb'
export const ZIL = '0xb86abcb37c3a4b64f74f59301aff131a1becc787'
export const bBADGER = '0x1F7216fdB338247512Ec99715587bb97BBf96eae'
export const LIT = '0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723'
export const DODO = '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2'
export const BTCST = '0x78650b139471520656b9e7aa7a5e9276814a38e9'
export const IOTX = '0x9678e42cebeb63f23197d726b29b1cb20d0064e5'
export const LINA = '0x762539b45a1dcce3d36d080f74d1aed37844b878'
export const FRONT = '0x928e55dab735aa8260af3cedada18b5f70c72f1b'
export const BREW = '0x790be81c3ca0e53974be2688cdb954732c9862e1'
export const MLTP = '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
export const CORGIB = '0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55'

export const LAUNCHPOOLX_V1 = '0x1070B9a998C4457C5f393e389F275012e91b31d2'
export const LAUNCHPOOLX_TOOLS = '0x74842C1cF471031d1a5307c486049898CDc4468B'
export const REFERRAL = '0x12f10915dA4da6F7B09f622311Ef4fF6AdE579CA'

// TODO: change the address & set LP pool
export const contractAddresses = {
  sushi: {
    56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587', // bscx token
  },
  xSushi: {
    56: '0xF1CE70C337EcCD47A998be0Bb07E49188Bc60A3c', // BSCXSafe
  },
  maker: {
    56: '0xE162A4ac31086bb0B135c2bFE6434BA22b759c59',
  },
  masterChef: {
    56: '0x47f30f5189c979e9f71ac500e5cba0000b5ebd0c',
  },
  masterChefV2: {
    56: '0x140a98690666d8b447dcd3e33b2990b1fBd887aa',
    // 97: '0x20258BfCC85FDe1DE8357A6099CB3093d00D5013',
  },
  masterChefV3: {
    56: '0x683260Adb0FD7A128Fe37B1197c7897402b65259',
    // 97: '0x17112c2B4f1E95D72783a411c4eC653C2c4f3b6d',
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
  {
    pid: 0,
    decimals: 9,
    decimalsReward: 9,
    stake: true,
    version: VERSIONS.V3,
    project: 'BARMY',
    lpAddresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    tokenAddresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    token2Addresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    rewardToken: {
      address: BARMY_TOKEN,
      symbol: 'BARMY'
    },
    name: 'BARMY > BARMY',
    symbol: 'BARMY Token2',
    symbolShort: 'BARMY > BARMY',
    description: `Stake BARMY Earn BARMY`,
    tokenSymbol: 'BARMY',
    token2Symbol: 'BARMY',
    icon: 'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299/logo.png',
    icon2: 'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },

  // MLTP project
  {
    pid: 4,
    decimals: 18,
    decimalsReward: 18,
    stake: true,
    version: VERSIONS.V3,
    project: 'MLTP',
    lpAddresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    tokenAddresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    token2Addresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    rewardToken: {
      address: MLTP,
      symbol: 'MLTP'
    },
    name: 'MLTP > MLTP',
    symbol: 'MLTP Token',
    symbolShort: 'MLTP > MLTP',
    description: `Stake MLTP Earn MLTP`,
    tokenSymbol: 'MLTP',
    token2Symbol: 'MLTP',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },




  // CORGIB project
  {
    pid: 5,
    stake: false,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'CORGIB',
    lpAddresses: {
      56: '0xc51aeec05eda3d1d563b88939c43085d9395a64f'
    },
    tokenAddresses: {
      56: '0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55'
    },
    token2Addresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56'
    },
    rewardToken: {
      address: CORGIB,
      symbol: 'CORGIB'
    },
    name: 'CORGIB - BUSD',
    symbol: 'CORGIB - BUSD LP',
    symbolShort: 'CORGIB - BUSD',
    description: `Deposit CORGIB - BUSD LP Earn CORGIB`,
    tokenSymbol: 'CORGIB',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10251.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x1cfd6813a59d7b90c41dd5990ed99c3bf2eb8f55/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  // {
  //   pid: 3,
  //   decimals: 9,
  //   decimalsReward: 9,
  //   stake: true,
  //   version: VERSIONS.V2,
  //   project: 'BARMY',
  //   lpAddresses: {
  //     56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
  //   },
  //   tokenAddresses: {
  //     56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
  //   },
  //   token2Addresses: {
  //     56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
  //   },
  //   rewardToken: {
  //     address: BARMY_TOKEN,
  //     symbol: 'BARMY'
  //   },
  //   name: 'BARMY > BARMY OLD',
  //   symbol: 'BARMY Token OLD',
  //   symbolShort: 'BARMY > BARMY OLD',
  //   description: `Stake BARMY Earn BARMY OLD`,
  //   tokenSymbol: 'BARMY',
  //   token2Symbol: 'BARMY',
  //   icon: 'https://bsc.army/wp-content/uploads/2021/05/spaces_-M_WCdKCevOXIaBuKX-A_avatar-1620835767657-150x150.png',
  //   icon2: 'https://bsc.army/wp-content/uploads/2021/05/spaces_-M_WCdKCevOXIaBuKX-A_avatar-1620835767657-150x150.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: '',
  //   removeLiquidityLink: ''
  // },
  {
    pid: 0,
    decimals: 9,
    decimalsReward: 18,
    stake: true,
    version: VERSIONS.V2,
    project: 'BARMY',
    lpAddresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    tokenAddresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    token2Addresses: {
      56: '0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299'
    },
    rewardToken: {
      address: IBARMY_TOKEN,
      symbol: 'IBARMY'
    },
    name: 'BARMY > IBARMY',
    symbol: 'BARMY Token',
    symbolShort: 'BARMY > IBARMY',
    description: `Stake BARMY Earn IBARMY`,
    tokenSymbol: 'BARMY',
    token2Symbol: 'BARMY',
    icon: 'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299/logo.png',
    icon2: '',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },


  // BSCEX Project
  {
    pid: 3,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'BSCX',
    lpAddresses: {
      56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
    },
    tokenAddresses: {
      56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
    },
    token2Addresses: {
      56: '0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587'
    },
    rewardToken: {
      address: MLTP,
      symbol: 'MLTP'
    },
    name: 'BSCX > MLTP',
    symbol: 'BSCX Earn MLTP',
    symbolShort: 'BSCX > MLTP',
    description: `Stake BSCX Earn MLTP`,
    tokenSymbol: 'BSCX',
    token2Symbol: 'MLTP',
    icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },
  {
    pid: 1,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V2,
    project: 'BSCX',
    lpAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    tokenAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    token2Addresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    rewardToken: {
      address: BREW,
      symbol: 'BREW'
    },
    name: 'BSCX > BREW',
    symbol: 'BSCX Earn BREW',
    symbolShort: 'BSCX > BREW',
    description: `Stake BSCX Earn BREW`,
    tokenSymbol: 'BSCX',
    token2Symbol: 'BSCX',
    icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    icon2: 'https://assets.coingecko.com/coins/images/13966/small/coingecko_listing.png?1613377423',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },
  {
    pid: 39,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'BSCX',
    lpAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    tokenAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    token2Addresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BSCX > ZDCASH',
    symbol: 'BSCX Earn ZDCASH',
    symbolShort: 'BSCX > ZDCASH',
    description: `Stake BSCX Earn ZDCASH`,
    tokenSymbol: 'BSCX',
    token2Symbol: 'BSCX',
    icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    icon2: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/ezdefi-logo/zdcash-128x128.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },




  // ZDCASH Project
  {
    pid: 6,
    stake: true,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V3,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    tokenAddresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    token2Addresses: {
      56: '0xf390fB7d16f2cbba037c1fC48862463116a7E545'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'MLTP > ZDCASH',
    symbol: 'MLTP Token2',
    symbolShort: 'MLTP > ZDCASH',
    description: `Stake MLTP Earn ZDCASH`,
    tokenSymbol: 'MLTP',
    token2Symbol: 'ZDCASH',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
    icon2: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/ezdefi-logo/zdcash-128x128.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: '',
    removeLiquidityLink: ''
  },
  {
    pid: 51,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xffd4b200d3c77a0b691b5562d804b3bd54294e6e'
    },
    tokenAddresses: {
      56: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'TKO - BNB',
    symbol: 'TKO - BNB LP',
    symbolShort: 'TKO - BNB',
    description: `Deposit TKO - BNB LP Earn ZDCASH`,
    tokenSymbol: 'TKO',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9020.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x9f589e3eabe42ebc94a44727b3f3531c0c877809/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x9f589e3eabe42ebc94a44727b3f3531c0c877809/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 53,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x17f9733BD9eCa6CEC09eA2BaeB97f892e7e8179b'
    },
    tokenAddresses: {
      56: '0xd0759956fae5f5e55c84fdff2341b93d0303a62d'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ZDCASH - BUSD',
    symbol: 'ZDCASH - BUSD LP',
    symbolShort: 'ZDCASH - BUSD',
    description: `Deposit ZDCASH - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'ZDCASH',
    token2Symbol: 'BUSD',
    icon: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/ezdefi-logo/zdcash-128x128.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xd0759956fae5f5e55c84fdff2341b93d0303a62d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xd0759956fae5f5e55c84fdff2341b93d0303a62d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 54,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x0C20EDA1D4E054015d258E8e47a7CfEDE4216a78'
    },
    tokenAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BSCX - BUSD',
    symbol: 'BSCX - BUSD LP',
    symbolShort: 'BSCX - BUSD',
    description: `Deposit BSCX - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'BSCX',
    token2Symbol: 'BUSD',
    icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 55,
    decimals: 18,
    decimalsReward: 18,
    project: 'ZDCASH',
    version: VERSIONS.V1,
    lpAddresses: {
      56: '0x47c42b0a056a9c6e9c65b9ef79020af518e767a5',
    },
    tokenAddresses: {
      56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    rewardToken: {
      address: XPO_TOKEN,
      symbol: 'XPO'
    },
    name: 'BSCX - BNB',
    symbol: 'BSCX - BNB LP3',
    symbolShort: 'BSCX-BNB',
    description: `Deposit BSCX-BNB LP Earn XPO`,
    tokenSymbol: 'BSCX',
    token2Symbol: 'BNB',
    icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://nextyezpay.s3-ap-southeast-1.amazonaws.com/bscx.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 50,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x1f37d4226d23d09044b8005c127c0517bd7e94fd'
    },
    tokenAddresses: {
      56: '0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'LIT - BNB',
    symbol: 'LIT - BNB LP',
    symbolShort: 'LIT - BNB',
    description: `Deposit LIT - BNB LP Earn ZDCASH`,
    tokenSymbol: 'LIT',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6833.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 40,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xa9986fcbdb23c2e8b11ab40102990a08f8e58f06'
    },
    tokenAddresses: {
      56: '0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'DODO - BNB',
    symbol: 'DODO - BNB LP',
    symbolShort: 'DODO - BNB',
    description: `Deposit DODO - BNB LP Earn ZDCASH`,
    tokenSymbol: 'DODO',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7224.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 36,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x81d776C90c89B8d51E9497D58338933127e2fA80'
    },
    tokenAddresses: {
      56: '0x5986d5c77c65e5801a5caa4fae80089f870a71da'
    },
    token2Addresses: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'bDIGG - BTCB',
    symbol: 'bDIGG - BTCB LP',
    symbolShort: 'bDIGG - BTCB',
    description: `Deposit bDIGG - BTCB LP Earn ZDCASH`,
    tokenSymbol: 'bDIGG',
    token2Symbol: 'BTCB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8307.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x5986d5c77c65e5801a5caa4fae80089f870a71da/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x5986d5c77c65e5801a5caa4fae80089f870a71da/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
  },
  {
    pid: 28,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb'
    },
    tokenAddresses: {
      56: '0xac51066d7bec65dc4589368da368b212745d63e8'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ALICE - BNB',
    symbol: 'ALICE - BNB LP',
    symbolShort: 'ALICE - BNB',
    description: `Deposit ALICE - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ALICE',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8766.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xac51066d7bec65dc4589368da368b212745d63e8/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xac51066d7bec65dc4589368da368b212745d63e8/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 49,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xb2678c414ebc63c9cc6d1a0fc45f43e249b50fde'
    },
    tokenAddresses: {
      56: '0x78650b139471520656b9e7aa7a5e9276814a38e9'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BTCST - BNB',
    symbol: 'BTCST - BNB LP',
    symbolShort: 'BTCST - BNB',
    description: `Deposit BTCST - BNB LP Earn ZDCASH`,
    tokenSymbol: 'BTCST',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8891.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x78650b139471520656b9e7aa7a5e9276814a38e9/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x78650b139471520656b9e7aa7a5e9276814a38e9/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 38,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xE482249Cd295C0d1e9D2baAEE71e66de21024C68'
    },
    tokenAddresses: {
      56: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'NRV - BNB',
    symbol: 'NRV - BNB LP',
    symbolShort: 'NRV - BNB',
    description: `Deposit NRV - BNB LP Earn ZDCASH`,
    tokenSymbol: 'NRV',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8755.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 27,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x69DEE989c30b5fFe40867f5FC14F00E4bCE7B681'
    },
    tokenAddresses: {
      56: '0x8443f091997f06a61670b735ed92734f5628692f'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BEL - BNB',
    symbol: 'BEL - BNB LP',
    symbolShort: 'BEL - BNB',
    description: `Deposit BEL - BNB LP Earn ZDCASH`,
    tokenSymbol: 'BEL',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6928.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x8443f091997f06a61670b735ed92734f5628692f/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x8443f091997f06a61670b735ed92734f5628692f/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 30,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x123D475E13aA54A43a7421d94CAa4459dA021c77'
    },
    tokenAddresses: {
      56: '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'SWTH - BNB',
    symbol: 'SWTH - BNB LP',
    symbolShort: 'SWTH - BNB',
    description: `Deposit SWTH - BNB LP Earn ZDCASH`,
    tokenSymbol: 'SWTH',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2620.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 35,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x468b2DC8DC75990eE3E9dc0648965Ad6294E7914'
    },
    tokenAddresses: {
      56: '0x0eb3a705fc54725037cc9e008bdede697f62f335'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ATOM - BNB',
    symbol: 'ATOM - BNB LP',
    symbolShort: 'ATOM - BNB',
    description: `Deposit ATOM - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ATOM',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x0eb3a705fc54725037cc9e008bdede697f62f335/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x0eb3a705fc54725037cc9e008bdede697f62f335/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 48,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x1bdcebca3b93af70b58c41272aea2231754b23ca'
    },
    tokenAddresses: {
      56: '0xa2b726b1145a4773f68593cf171187d8ebe4d495'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'INJ - BNB',
    symbol: 'INJ - BNB LP',
    symbolShort: 'INJ - BNB',
    description: `Deposit INJ - BNB LP Earn ZDCASH`,
    tokenSymbol: 'INJ',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xa2b726b1145a4773f68593cf171187d8ebe4d495/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xa2b726b1145a4773f68593cf171187d8ebe4d495/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 32,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x21dD71aB78EDE3033c976948f769D506E4F489eE'
    },
    tokenAddresses: {
      56: '0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BRY - BNB',
    symbol: 'BRY - BNB LP',
    symbolShort: 'BRY - BNB',
    description: `Deposit BRY - BNB LP Earn ZDCASH`,
    tokenSymbol: 'BRY',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8483.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 17,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206'
    },
    tokenAddresses: {
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ALPHA - BNB',
    symbol: 'ALPHA - BNB LP',
    symbolShort: 'ALPHA - BNB',
    description: `Deposit ALPHA - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ALPHA',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7232.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xa1faa113cbe53436df28ff0aee54275c13b40975/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xa1faa113cbe53436df28ff0aee54275c13b40975/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 15,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe'
    },
    tokenAddresses: {
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'LINK - BNB',
    symbol: 'LINK - BNB LP',
    symbolShort: 'LINK - BNB',
    description: `Deposit LINK - BNB LP Earn ZDCASH`,
    tokenSymbol: 'LINK',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 16,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F'
    },
    tokenAddresses: {
      56: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ADA - BNB',
    symbol: 'ADA - BNB LP',
    symbolShort: 'ADA - BNB',
    description: `Deposit ADA - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ADA',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 14,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1'
    },
    tokenAddresses: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'USDC - BUSD',
    symbol: 'USDC - BUSD LP',
    symbolShort: 'USDC - BUSD',
    description: `Deposit USDC - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'USDC',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 47,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xc13aa76aac067c86ae38028019f414d731b3d86a'
    },
    tokenAddresses: {
      56: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'IOTX - BUSD',
    symbol: 'IOTX - BUSD LP',
    symbolShort: 'IOTX - BUSD',
    description: `Deposit IOTX - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'IOTX',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x9678e42cebeb63f23197d726b29b1cb20d0064e5/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x9678e42cebeb63f23197d726b29b1cb20d0064e5/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 41,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xc5768c5371568cf1114cddd52caed163a42626ed'
    },
    tokenAddresses: {
      56: '0x762539b45a1dcce3d36d080f74d1aed37844b878'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'LINA - BUSD',
    symbol: 'LINA - BUSD LP',
    symbolShort: 'LINA - BUSD',
    description: `Deposit LINA - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'LINA',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3714.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x762539b45a1dcce3d36d080f74d1aed37844b878/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x762539b45a1dcce3d36d080f74d1aed37844b878/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 37,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xC6b668548aA4A56792e8002A920d3159728121D5'
    },
    tokenAddresses: {
      56: '0x928e55dab735aa8260af3cedada18b5f70c72f1b'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'FRONT - BNB',
    symbol: 'FRONT - BNB LP',
    symbolShort: 'FRONT - BNB',
    description: `Deposit FRONT - BNB LP Earn ZDCASH`,
    tokenSymbol: 'FRONT',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5893.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x928e55dab735aa8260af3cedada18b5f70c72f1b/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x928e55dab735aa8260af3cedada18b5f70c72f1b/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 12,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2'
    },
    tokenAddresses: {
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BUNNY - BNB',
    symbol: 'BUNNY - BNB LP',
    symbolShort: 'BUNNY - BNB',
    description: `Deposit BUNNY - BNB LP Earn ZDCASH`,
    tokenSymbol: 'BUNNY',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7791.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 13,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF'
    },
    tokenAddresses: {
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'DOT - BNB',
    symbol: 'DOT - BNB LP',
    symbolShort: 'DOT - BNB',
    description: `Deposit DOT - BNB LP Earn ZDCASH`,
    tokenSymbol: 'DOT',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x7083609fce4d1d8dc0c979aab8c869ea2c873402/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x7083609fce4d1d8dc0c979aab8c869ea2c873402/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 46,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x942b294e59a8c47a0f7f20df105b082710f7c305'
    },
    tokenAddresses: {
      56: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'SFP - BNB',
    symbol: 'SFP - BNB LP',
    symbolShort: 'SFP - BNB',
    description: `Deposit SFP - BNB LP Earn ZDCASH`,
    tokenSymbol: 'SFP',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8119.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 45,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x6a97867a4b7eb7646ffb1f359ad582e9903aa1c2'
    },
    tokenAddresses: {
      56: '0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ZIL - BNB',
    symbol: 'ZIL - BNB LP',
    symbolShort: 'ZIL - BNB',
    description: `Deposit ZIL - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ZIL',
    token2Symbol: 'BNB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2469.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 18,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x05faf555522Fa3F93959F86B41A3808666093210'
    },
    tokenAddresses: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'UST - BUSD',
    symbol: 'UST - BUSD LP',
    symbolShort: 'UST - BUSD',
    description: `Deposit UST - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'UST',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x23396cf899ca06c4472205fc903bdb4de249d6fc/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x23396cf899ca06c4472205fc903bdb4de249d6fc/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 44,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x16afc4f2ad82986bbe2a4525601f8199ab9c832d'
    },
    tokenAddresses: {
      56: '0x947950bcc74888a40ffa2593c5798f11fc9124c4'
    },
    token2Addresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'SUSHI - ETH',
    symbol: 'SUSHI - ETH LP',
    symbolShort: 'SUSHI - ETH',
    description: `Deposit SUSHI - ETH LP Earn ZDCASH`,
    tokenSymbol: 'SUSHI',
    token2Symbol: 'ETH',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x947950bcc74888a40ffa2593c5798f11fc9124c4/0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x947950bcc74888a40ffa2593c5798f11fc9124c4/0x2170ed0880ac9a755fd29b2688956bd959f933f8'
  },
  {
    pid: 43,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x37908620def1491dd591b5a2d16022a33cdda415'
    },
    tokenAddresses: {
      56: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8'
    },
    token2Addresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'COMP - ETH',
    symbol: 'COMP - ETH LP',
    symbolShort: 'COMP - ETH',
    description: `Deposit COMP - ETH LP Earn ZDCASH`,
    tokenSymbol: 'COMP',
    token2Symbol: 'ETH',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8/0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x52ce071bd9b1c4b00a0b92d298c512478cad67e8/0x2170ed0880ac9a755fd29b2688956bd959f933f8'
  },
  {
    pid: 11,
    decimals: 18,
    decimalsReward: 18,
    project: 'ZDCASH',
    version: VERSIONS.V1,
    lpAddresses: {
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    tokenAddresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    token2Addresses: {
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BNB - USDT',
    symbol: 'BNB-USDT LP',
    symbolShort: 'BNB-USDT',
    description: `Deposit BNB-USDT LP Earn ZDCASH`,
    tokenSymbol: 'BNB',
    token2Symbol: 'USDT',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://nextyezpay.s3-ap-southeast-1.amazonaws.com/bscx.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/0x55d398326f99059fF775485246999027B3197955',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/0x55d398326f99059fF775485246999027B3197955'
  },
  {
    pid: 7,
    decimals: 18,
    decimalsReward: 18,
    project: 'ZDCASH',
    version: VERSIONS.V1,
    lpAddresses: {
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenAddresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    token2Addresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BNB - BUSD',
    symbol: 'BNB-BUSD LP',
    symbolShort: 'BNB-BUSD',
    description: `Deposit BNB-BUSD LP Earn ZDCASH`,
    tokenSymbol: 'BNB',
    token2Symbol: 'BUSD',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://nextyezpay.s3-ap-southeast-1.amazonaws.com/bscx.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/0xe9e7cea3dedca5984780bafc599bd69add087d56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/0xe9e7cea3dedca5984780bafc599bd69add087d56'
  },
  {
    pid: 42,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x5a58609da96469e9def3fe344bc39b00d18eb9a5'
    },
    tokenAddresses: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    token2Addresses: {
      56: '0x1F7216fdB338247512Ec99715587bb97BBf96eae'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BTCB - bBADGER',
    symbol: 'BTCB - bBADGER LP',
    symbolShort: 'BTCB - bBADGER',
    description: `Deposit BTCB - bBADGER LP Earn ZDCASH`,
    tokenSymbol: 'BTCB',
    token2Symbol: 'bBADGER',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7859.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/0x1F7216fdB338247512Ec99715587bb97BBf96eae',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/0x1F7216fdB338247512Ec99715587bb97BBf96eae'
  },
  {
    pid: 8,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33'
    },
    tokenAddresses: {
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'BTCB - BUSD',
    symbol: 'BTCB - BUSD LP',
    symbolShort: 'BTCB - BUSD',
    description: `Deposit BTCB - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'BTCB',
    token2Symbol: 'BUSD',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },
  {
    pid: 9,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc'
    },
    tokenAddresses: {
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8'
    },
    token2Addresses: {
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'ETH - BNB',
    symbol: 'ETH - BNB LP',
    symbolShort: 'ETH - BNB',
    description: `Deposit ETH - BNB LP Earn ZDCASH`,
    tokenSymbol: 'ETH',
    token2Symbol: 'BNB',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x2170ed0880ac9a755fd29b2688956bd959f933f8/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x2170ed0880ac9a755fd29b2688956bd959f933f8/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  },
  {
    pid: 10,
    decimals: 18,
    decimalsReward: 18,
    version: VERSIONS.V1,
    project: 'ZDCASH',
    lpAddresses: {
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00'
    },
    tokenAddresses: {
      56: '0x55d398326f99059fF775485246999027B3197955'
    },
    token2Addresses: {
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    },
    rewardToken: {
      address: ZDCASH_TOKEN,
      symbol: 'ZDCASH'
    },
    name: 'USDT - BUSD',
    symbol: 'USDT - BUSD LP',
    symbolShort: 'USDT - BUSD',
    description: `Deposit USDT - BUSD LP Earn ZDCASH`,
    tokenSymbol: 'USDT',
    token2Symbol: 'BUSD',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png',
    icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
    isHot: true,
    isNew: true,
    protocal: 'BSCEX',
    iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
    pairLink: '/',
    addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x55d398326f99059fF775485246999027B3197955/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x55d398326f99059fF775485246999027B3197955/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  },

  //  {
  //   pid: 0,
  //   version: VERSIONS.V1,
  //   project: 'TWIN',
  //   lpAddresses: {
  //     56: '0x1bd0cb5aefad455e0aded591f0f29d0fb394d950'
  //   },
  //   tokenAddresses: {
  //     56: '0xaf83f292fced83032f52ced45ef7dbddb586441a'
  //   },
  //   token2Addresses: {
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  //   },
  //   rewardToken: {
  //     address: TWIN_TOKEN,
  //     symbol: 'TWIN'
  //   },
  //   name: 'TWIN - BNB',
  //   symbol: 'TWIN - BNB LP',
  //   symbolShort: 'TWIN - BNB',
  //   description: `Deposit TWIN - BNB LP Earn TWIN`,
  //   tokenSymbol: 'TWIN',
  //   token2Symbol: 'BNB',
  //   icon: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xaf83f292fced83032f52ced45ef7dbddb586441a.png',
  //   icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xaf83f292fced83032f52ced45ef7dbddb586441a/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xaf83f292fced83032f52ced45ef7dbddb586441a/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  // },
  // {
  //   pid: 1,
  //   version: VERSIONS.V1,
  //   project: 'TWIN',
  //   lpAddresses: {
  //     56: '0x4fd270819b9f523fa976824f627efde08427fab4'
  //   },
  //   tokenAddresses: {
  //     56: '0xaf83f292fced83032f52ced45ef7dbddb586441a'
  //   },
  //   token2Addresses: {
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  //   },
  //   rewardToken: {
  //     address: TWIN_TOKEN,
  //     symbol: 'TWIN'
  //   },
  //   name: 'TWIN - BUSD',
  //   symbol: 'TWIN-BUSD LP 3',
  //   symbolShort: 'TWIN-BUSD',
  //   description: `Deposit TWIN-BUSD LP Earn TWIN`,
  //   tokenSymbol: 'TWIN',
  //   token2Symbol: 'BUSD',
  //   icon: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xaf83f292fced83032f52ced45ef7dbddb586441a.png',
  //   icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xaf83f292fced83032f52ced45ef7dbddb586441a/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xaf83f292fced83032f52ced45ef7dbddb586441a/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  // },




  // {
  //   pid: 2,
  //   old: false,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   version: VERSIONS.V1,
  //   project: 'XPO',
  //   lpAddresses: {
  //     56: '0x0c20eda1d4e054015d258e8e47a7cfede4216a78'
  //   },
  //   tokenAddresses: {
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587'
  //   },
  //   token2Addresses: {
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  //   },
  //   rewardToken: {
  //     address: XPO_TOKEN,
  //     symbol: 'XPO'
  //   },
  //   name: 'BSCX - BUSD',
  //   symbol: 'BSCX-BUSD LP',
  //   symbolShort: 'BSCX-BUSD',
  //   description: `Deposit BSCX-BUSD LP Earn XPO`,
  //   tokenSymbol: 'BSCX',
  //   token2Symbol: 'BUSD',
  //   icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  // },
  // {
  //   pid: 3,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   version: VERSIONS.V1,
  //   project: 'XPO',
  //   lpAddresses: {
  //     56: '0xdf1bc24552c04c9e0a3cf09b4148ea438087181e'
  //   },
  //   tokenAddresses: {
  //     56: '0xebb59cebfb63f218db6b5094dc14abf34d56d35d'
  //   },
  //   token2Addresses: {
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  //   },
  //   rewardToken: {
  //     address: XPO_TOKEN,
  //     symbol: 'XPO'
  //   },
  //   name: 'XPO - BUSD',
  //   symbol: 'XPO-BUSD LP',
  //   symbolShort: 'XPO-BUSD',
  //   description: `Deposit XPO-BUSD LP Earn XPO`,
  //   tokenSymbol: 'XPO',
  //   token2Symbol: 'BUSD',
  //   icon: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xebb59cebfb63f218db6b5094dc14abf34d56d35d.png',
  //   icon2: 'https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xebb59cebfb63f218db6b5094dc14abf34d56d35d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xebb59cebfb63f218db6b5094dc14abf34d56d35d/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
  // },
  // {
  //   pid: 5,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   version: VERSIONS.V1,
  //   project: 'XPO',
  //   lpAddresses: {
  //     56: '0x960120083d597f4b2e5b3227c9ee9108a879e3dd'
  //   },
  //   tokenAddresses: {
  //     56: '0xebb59cebfb63f218db6b5094dc14abf34d56d35d'
  //   },
  //   token2Addresses: {
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  //   },
  //   rewardToken: {
  //     address: XPO_TOKEN,
  //     symbol: 'XPO'
  //   },
  //   name: 'XPO - BNB',
  //   symbol: 'XPO-BNB LP',
  //   symbolShort: 'XPO-BNB',
  //   description: `Deposit XPO-BNB LP Earn XPO`,
  //   tokenSymbol: 'XPO',
  //   token2Symbol: 'BNB',
  //   icon: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xebb59cebfb63f218db6b5094dc14abf34d56d35d.png',
  //   icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0xebb59cebfb63f218db6b5094dc14abf34d56d35d/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0xebb59cebfb63f218db6b5094dc14abf34d56d35d/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  // },
  // {
  //   pid: 6,
  //   decimals: 18,
  //   decimalsReward: 18,
  //   project: 'XPO',
  //   version: VERSIONS.V1,
  //   lpAddresses: {
  //     56: '0x47c42b0a056a9c6e9c65b9ef79020af518e767a5',
  //   },
  //   tokenAddresses: {
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   token2Addresses: {
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   rewardToken: {
  //     address: XPO_TOKEN,
  //     symbol: 'XPO'
  //   },
  //   name: 'BSCX - BNB',
  //   symbol: 'BSCX - BNB LP3',
  //   symbolShort: 'BSCX-BNB',
  //   description: `Deposit BSCX-BNB LP Earn XPO`,
  //   tokenSymbol: 'BSCX',
  //   token2Symbol: 'BNB',
  //   icon: 'https://raw.githubusercontent.com/Bscex/bscex-swap-interface/master/public/favicon.png',
  //   icon2: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
  //   isHot: true,
  //   isNew: true,
  //   protocal: 'BSCEX',
  //   iconProtocal: 'https://nextyezpay.s3-ap-southeast-1.amazonaws.com/bscx.png',
  //   pairLink: '/',
  //   addLiquidityLink: 'https://swapv1.launchzone.org/#/add/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   removeLiquidityLink: 'https://swapv1.launchzone.org/#/remove/0x5ac52ee5b2a633895292ff6d8a89bb9190451587/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
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
  },
  MLTP: {
    name: 'MLTP',
    status: 'active',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10576.png',
    description: "Community driven passive income generator protocol running on #BinanceSmartChain. Stake MLTP, earn other tokens",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: MLTP
  },
  CORGIB: {
    name: 'CORGIB',
    status: 'active',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10251.png',
    description: "CORGIB Finance is a fully decentralized, the first NFT MarketPlace for Meme tokens, powered by PolkaBridge.",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: CORGIB
  },
  BARMY: {
    name: 'BARMY',
    status: 'active',
    logo: 'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299/logo.png',
    description: "Stake BARMY, earn other tokens",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: BARMY_TOKEN
  },
  ZDCASH: {
    name: 'ZDCASH',
    status: 'active',
    logo: 'https://raw.githubusercontent.com/ezDeFi/ezdefi-media/master/ezdefi-logo/zdcash-128x128.png',
    description: "ZDCASH is the BEP20 token that aims to become the preferred method to use as the payment of ezDeFi ecosystem services, to reward ezDeFi users, and to expand the business transparently through the Binance Smart Chain blockchain. ZDCASH will open the way for ezDeFi users and ZDCash holders access to various services provided by the ezDeFi platform and our international business partners.",
    totalReward: 10000000 * 10 ** 18,
    farmPeriod: 30,
    timeEnded: 1611031410501,
    tokenAddress: ZDCASH_TOKEN
  },
  // TWIN: {
  //   name: 'TWIN',
  //   status: 'active',
  //   logo: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xaf83f292fced83032f52ced45ef7dbddb586441a.png',
  //   description: "The first NFTs Social-Marketplace - Create, sell and collect digital items secured with blockchain",
  //   totalReward: 10000000 * 10 ** 18,
  //   farmPeriod: 30,
  //   timeEnded: 1611031410501,
  //   tokenAddress: XPO_TOKEN
  // },
  // XPO: {
  //   name: 'XPOOL',
  //   status: 'active',
  //   logo: 'https://raw.githubusercontent.com/bsc-tools/media/master/assets/logo/0xebb59cebfb63f218db6b5094dc14abf34d56d35d.png',
  //   description: "X-pool is an open-source Decentralized protocol - built on Binance Smart Chain that enables users to borrow assets from the platform, deploy your assets and earn yield with ease.",
  //   totalReward: 10000000 * 10 ** 18,
  //   farmPeriod: 30,
  //   timeEnded: 1611031410501,
  //   tokenAddress: TWIN_TOKEN
  // }
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
