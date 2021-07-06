import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getMasterChefContractV2, getMasterChefContractV3, getFarms, checkPoolActive } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

import config from '../config'
import axios from 'axios'
import { VERSIONS } from '../sushi/lib/constants'


const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)
  const block = 0//useBlock()

  const fetchAllBalances = useCallback(async () => {
    // const balances: Array<BigNumber> = await Promise.all(
    //   farms.map(({ pid }: { pid: number }) =>
    //     getEarned(masterChefContract, pid, account),
    //   ),
    // )
    // setBalance(balances)

    const data: Array<BigNumber> = await Promise.all(
      farms.map(({ pid, version }: any) => new Promise(async (resolve) => {
        let masterChef = masterChefContract
        if (version === VERSIONS.V2) {
          masterChef = masterChefContractV2
        } else if (version === VERSIONS.V3) {
          masterChef = masterChefContractV3
        }

        if (await checkPoolActive(pid)) {
          const earned = await getEarned(masterChef, pid, account)
          resolve(earned)
        }
        else {
          resolve("0")
        }

      }))
    )

    setBalance(data)
  }, [account, masterChefContract, masterChefContractV2, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, masterChefContractV2, setBalance, sushi])

  return balances
}

export default useAllEarnings
