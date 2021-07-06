import { useCallback, useEffect, useState } from 'react'
import useSushi from './useSushi'
import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getAmountLPStakeBSCX } from '../sushi/utils'

const useStakeBSCX = () => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account } = useWallet()
  const sushi = useSushi()

  useEffect(() => {
    async function fetchData() {
      const res = await getAmountLPStakeBSCX(sushi, account)
      setBalance(new BigNumber(res))
    }
    if (sushi && account) {
      fetchData()
    }
  }, [sushi, setBalance, account])

  return balance
}

export default useStakeBSCX
