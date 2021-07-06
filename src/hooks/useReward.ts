import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { VERSIONS } from '../sushi/lib/constants'

import { harvest, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'

const useReward = (pid: number, version: string) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  const handleReward = useCallback(async () => {
    try {
      let masterChef = masterChefContract
      if (version === VERSIONS.V2) {
        masterChef = masterChefContractV2
      } else if (version === VERSIONS.V3) {
        masterChef = masterChefContractV3
      }

      const txHash = await harvest(masterChef, pid, account)
      console.log(txHash)
      return txHash
    }
    catch (ex) {
      console.error(ex)
      return ''
    }
  }, [account, pid, sushi, masterChefContract, masterChefContractV2])

  return { onReward: handleReward }
}

export default useReward
