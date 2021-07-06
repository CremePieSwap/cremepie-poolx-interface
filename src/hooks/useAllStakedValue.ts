import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getMasterChefContractV2,
  getMasterChefContractV3,
  getFarms,
  getLPValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import axios from 'axios'
import config from '../config'
import usePrice from './usePrice'
import { VERSIONS } from '../sushi/lib/constants'

export interface StakedValue {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  poolWeight: BigNumber
  usdValue: BigNumber
  rewardToken: any
  pid: string
  rewardTokenPrice: BigNumber,
  version: string,
  avaiableReward: BigNumber
}

var CACHE : {time: any, old: any, value: any} = {
  time: 0,
  old: 0,
  value: []
}


const useAllStakedValue = () => {
  const [balances, setBalance] = useState(CACHE.value as Array<StakedValue>)
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)
  const block = 0//useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          token2Contract,
          project,
          rewardToken,
          version,
          rewardTokenContract
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          token2Contract: Contract,
          rewardTokenContract: Contract,
          project: string
          rewardToken: any,
          version: string
        }) => {
          let tokenPrice:BigNumber

          let masterChef = masterChefContract
          if (version === VERSIONS.V2) {
            masterChef = masterChefContractV2
          } else if (version === VERSIONS.V3) {
            masterChef = masterChefContractV3
          }

          return getLPValue(
            masterChef,
            lpContract,
            tokenContract,
            token2Contract,
            pid,
            rewardToken.address,
            version,
            rewardTokenContract
          )
        }
      ),
    )
    setBalance(balances)
  }, [masterChefContract, masterChefContractV2, sushi])

  useEffect(() => {
    if (masterChefContract && sushi) {
      fetchAllStakedValue()
    }
  }, [block, masterChefContract, masterChefContractV2, setBalance, sushi])

  return balances
}

export default useAllStakedValue
