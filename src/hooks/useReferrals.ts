import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { getReferral } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useReferrals = () => {
  const [list, setList] = useState([])
  const sushi = useSushi()
  const { account } = useWallet()

  const fetchData = useCallback(async () => {
    // const result = await getReferral('0x7a450d96a614f4efbf4c48c569bae6d4f727cffc')
    const result = await getReferral(account)
    setList(result)
  }, [sushi, account])

  useEffect(() => {
    if (account) {
      fetchData()
    }
  }, [sushi, account])

  return list
}

export default useReferrals
