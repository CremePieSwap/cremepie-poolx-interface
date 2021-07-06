import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { saveCountry } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useSaveCountry = () => {
  const sushi = useSushi()
  const { account } = useWallet()
  const address = localStorage.getItem('CACHE_ADDRESS_COUNTRY')

  const fetchData = useCallback(async () => {
    if (address != account) {
      const result = await saveCountry(account)
      localStorage.setItem('CACHE_ADDRESS_COUNTRY', account)
    }
  }, [sushi, account])

  useEffect(() => {
    if (account) {
      fetchData()
    }
  }, [sushi, account])

  return true
}

export default useSaveCountry
