import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { getAllowance } from '../utils/erc20'
import { getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'

const useAllowance = (lpContract: Contract, version: string) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  const fetchAllowance = useCallback(async () => {
    let masterChef = masterChefContract
    if (version === VERSIONS.V2) {
      masterChef = masterChefContractV2
    } else if (version === VERSIONS.V3) {
      masterChef = masterChefContractV3
    }

    const allowance = await getAllowance(
      lpContract,
      masterChef,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, masterChefContract, masterChefContractV2, lpContract])

  useEffect(() => {
    if (account && masterChefContract && masterChefContractV2 && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 6000)
    return () => clearInterval(refreshInterval)
  }, [account, masterChefContract, masterChefContractV2, lpContract])

  return allowance
}

export default useAllowance
