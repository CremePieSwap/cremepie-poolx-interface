import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getReferralAmountLv2 } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useReferralAmountLv2 = (rewardToken: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getReferralAmountLv2(sushi, account, rewardToken)
    setBalance(balance)
  }, [account, sushi])

  useEffect(() => {
    if (account && sushi) {
      fetchBalance()
    }
  }, [account, block, setBalance, sushi])

  return balance
}

export default useReferralAmountLv2
