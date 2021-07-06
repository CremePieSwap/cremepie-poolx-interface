import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { approve, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'

const useApprove = (lpContract: Contract, version: string) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  const handleApprove = useCallback(async () => {
    try {
      let masterChef = masterChefContract
      if (version === VERSIONS.V2) {
        masterChef = masterChefContractV2
      } else if (version === VERSIONS.V3) {
        masterChef = masterChefContractV3
      }

      const tx = await approve(lpContract, masterChef, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, lpContract, masterChefContract, masterChefContractV2])

  return { onApprove: handleApprove }
}

export default useApprove
