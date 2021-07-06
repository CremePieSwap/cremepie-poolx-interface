import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { VERSIONS } from '../sushi/lib/constants'

import { unstake, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'

const useUnstake = (pid: number, version: string, decimals: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  let masterChef = masterChefContract
  if (version === VERSIONS.V2) {
    masterChef = masterChefContractV2
  } else if (version === VERSIONS.V3) {
    masterChef = masterChefContractV3
  }

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChef, pid, amount, account, decimals)
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
