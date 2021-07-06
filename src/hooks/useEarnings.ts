import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3 } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { VERSIONS } from '../sushi/lib/constants'

const useEarnings = (pid: number, version: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    let masterChef = masterChefContract
    if (version === VERSIONS.V2) {
      masterChef = masterChefContractV2
    } else if (version === VERSIONS.V3) {
      masterChef = masterChefContractV3
    }

    const balance = await getEarned(masterChef, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, masterChefContractV2, sushi])

  useEffect(() => {
    if (account && masterChefContract && masterChefContractV2 && sushi) {
      fetchBalance()
      const interval = setInterval(async () => {
        fetchBalance()
      }, 6000)

      return () => clearInterval(interval)
    }
  }, [account, block, masterChefContract, masterChefContractV2, setBalance, sushi])

  return balance
}

export default useEarnings
