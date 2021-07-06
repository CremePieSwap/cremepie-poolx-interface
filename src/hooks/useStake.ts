import { useCallback } from 'react'
import cookie from 'js-cookie'
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import {isAddress} from '../utils'
import { VERSIONS } from '../sushi/lib/constants'

import { stake, getMasterChefContract, getMasterChefContractV2, getRefBy, getMasterChefContractV3, setReferral } from '../sushi/utils'

const useStake = (pid: number, version: string, decimals: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  let referral = localStorage.getItem('CACHE_BSCX_LAUNCHPOOLX_REFERRAL')
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefContractV2 = getMasterChefContractV2(sushi)
  const masterChefContractV3 = getMasterChefContractV3(sushi)

  let masterChef = masterChefContract
  if (version === VERSIONS.V2) {
    masterChef = masterChefContractV2
  } else if (version === VERSIONS.V3) {
    masterChef = masterChefContractV3
  }

  if (!isAddress(referral)) {
    referral = cookie.get('_ezdnewref') || cookie.get('_ezdref')
  }

  const handleStake = useCallback(
    async (amount: string) => {
      try {
        const refBy = await getRefBy(sushi, account)
        if (isAddress(refBy)) {
          referral = refBy
        }

        let setedRef = false
        if (!isAddress(referral)) {
          referral = '0x0000000000000000000000000000000000000000'
        } else {
          if (!isAddress(refBy)) {
            setedRef = await setReferral(sushi, referral, account)
          }
        }

        const txHash = await stake(
          masterChef,
          pid,
          amount,
          account,
          referral,
          decimals
        )
        return txHash
      }
      catch (ex) {
        return ''
      }
    },
    [account, pid, sushi, masterChef],
  )

  return { onStake: handleStake }
}

export default useStake
