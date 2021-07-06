import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getTotalUserLocked, getLaunchPoolTOOLSContract } from '../sushi/utils'
import useSushi from './useSushi'
import useFarms from './useFarms'
import { VERSIONS } from '../sushi/lib/constants'

const useToolsLocked = () => {
  const [totalLocked, setTotalLocked] = useState(Number)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()

  const masterChefContract = getLaunchPoolTOOLSContract(sushi)

  const fetchTokenLocked = useCallback(async () => {
    const balance = await getTotalUserLocked(masterChefContract, account, 0)
    const balance1 = await getTotalUserLocked(masterChefContract, account, 1)
    const total = Number(balance) + Number(balance1)

    setTotalLocked(total)
  }, [masterChefContract, account])

  useEffect(() => {
    if (account && masterChefContract) {
      fetchTokenLocked()
    }
  }, [masterChefContract, setTotalLocked, account])

  return totalLocked
}

export default useToolsLocked
