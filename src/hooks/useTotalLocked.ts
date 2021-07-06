import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getTotalUserLocked, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'
import useSushi from './useSushi'
import useFarms from './useFarms'
import { VERSIONS } from '../sushi/lib/constants'

const useTotalLocked = () => {
  const [totalLocked, setTotalLocked] = useState({})
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const [farms] = useFarms()

  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  const fetchTokenLocked = useCallback(async () => {
    const tokenLockeds: any = await Promise.all(
      farms.map(
        ({
          pid,
          version
        }: {
          pid: number,
          version: string
        }) => {
          let masterChef = masterChefContract
          if (version === VERSIONS.V2) {
            masterChef = masterChefContractV2
          } else if (version === VERSIONS.V3) {
            masterChef = masterChefContractV3
          }
          return getTotalUserLocked(masterChef, account, pid)
        }
      )
    )

    let total: any = {}
    tokenLockeds.map((item: any, key: number) => {
      const symbol = farms[key].rewardToken.symbol

      if (total[symbol]) {
        total[symbol] += Number(item)
      } else {
        total[symbol] = 0
        total[symbol] = Number(item)
      }
    })

    setTotalLocked(total)
  }, [masterChefContract, masterChefContractV2, account])

  useEffect(() => {
    if (account && masterChefContract && masterChefContractV2) {
      fetchTokenLocked()
    }
  }, [masterChefContract, masterChefContractV2, setTotalLocked, account])

  return totalLocked
}

export default useTotalLocked
