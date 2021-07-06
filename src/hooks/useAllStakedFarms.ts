import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import {
  getMasterChefContract,
  getMasterChefContractV2,
  getMasterChefContractV3,
  getFarms,
  getStaked, getEarned, checkPoolActive
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import config from '../config'
import axios from 'axios'

export interface StakedFarm {
  tokenAmount: BigNumber
  pendingReward: BigNumber
  name: string
  id: string
  symbol: string
  symbolShort: string
  icon: string
  icon2: string
  pid: number,
  rewardSymbolToken: string
  version: string
}

const useAllStakedFarms = () => {
  const [stakedFarms, setStakedFarms] = useState([] as Array<StakedFarm>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)
  const block = 0//useBlock()

  const fetchData = useCallback(async () => {
    const data: Array<StakedFarm> = await Promise.all(
      farms.map(({ pid, name, symbol, symbolShort, icon, icon2, id, rewardToken, version }: any) => new Promise(async (resolve) => {
        let masterChef = masterChefContract
        if (version === VERSIONS.V2) {
          masterChef = masterChefContractV2
        } else if (version === VERSIONS.V3) {
          masterChef = masterChefContractV3
        }

        if (true) {
          var v = {
            id,
            pid: pid,
            name: name,
            icon,
            icon2,
            symbol: symbol,
            symbolShort: symbolShort,
            rewardSymbolToken: rewardToken.symbol,
            tokenAmount: await getStaked(masterChef, pid, account),
            pendingReward: new BigNumber(await getEarned(masterChef, pid, account))
          }
          resolve(v)
        }
        else {
          resolve(false)
        }

      }))
    )

    setStakedFarms(data.filter(e => e && e.tokenAmount.isGreaterThan(0)))
  }, [account, masterChefContract, masterChefContractV2, sushi])

  useEffect(() => {
    if (account && masterChefContract && masterChefContractV2 && sushi) {
      fetchData()
    }
  }, [account, block, masterChefContract, masterChefContractV2, setStakedFarms, sushi])

  return stakedFarms
}

export default useAllStakedFarms
