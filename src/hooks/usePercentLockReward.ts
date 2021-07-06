import { useCallback, useEffect, useState } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { getPercentLockReward, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'

const usePercentLockReward = (pid: number, version: string) => {
  const [percent, setPercent] = useState(0)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  const fetchBalance = useCallback(async () => {
    try {
      let masterChef = masterChefContract
      if (version === VERSIONS.V2) {
        masterChef = masterChefContractV2
      } else if (version === VERSIONS.V3) {
        masterChef = masterChefContractV3
      }

      const percentLockReward = await getPercentLockReward(masterChef, pid)
      setPercent(percentLockReward)
    } catch (e) {
      return false
    }
  }, [account, masterChefContract, masterChefContractV2])

  useEffect(() => {
    if (account && masterChefContract && masterChefContractV2 && sushi) {
      fetchBalance()
    }
  }, [account, masterChefContract, masterChefContractV2, sushi])

  return percent
}

export default usePercentLockReward
