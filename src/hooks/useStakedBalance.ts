import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { VERSIONS } from '../sushi/lib/constants'

const useStakedBalance = (pid: number, version: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)
  const block = useBlock()

  let masterChef = masterChefContract
  if (version === VERSIONS.V2) {
    masterChef = masterChefContractV2
  } else if (version === VERSIONS.V3) {
    masterChef = masterChefContractV3
  }

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChef, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, sushi])

  useEffect(() => {
    if (account && sushi) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, sushi])

  return balance
}

export default useStakedBalance
