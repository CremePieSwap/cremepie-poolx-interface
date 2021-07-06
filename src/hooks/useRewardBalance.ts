import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'

import { getRewardTokenBalance } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useRewardBalance = (project: string, version: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getRewardTokenBalance(sushi, project, version)
    setBalance(balance)
  }, [sushi])

  useEffect(() => {
    if (sushi) {
      fetchBalance()
    }
  }, [block, setBalance, sushi])

  return balance
}

export default useRewardBalance
