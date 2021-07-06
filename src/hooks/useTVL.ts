import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'
import {
  getFarms,
  getLPValuePrice,
  getTVL
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import config from '../config'
import { BSCX_PRICE_POOL, ZSEED_PRICE_POOL } from '../sushi/lib/constants'

var CACHE : any = {
  time: parseInt(localStorage.getItem('CACHE_useTVL_time') || '0'),
  old: 5 * 1000,
  value: localStorage.getItem('CACHE_useTVL_value') || '0'
}

const useTVL = () => {
  const [tvl, setTVL] = useState(new BigNumber(0))
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const block = useBlock()

  const fetchTVL = useCallback(async () => {
    if (CACHE.time + CACHE.old <= new Date().getTime()) {
      var tvl = await getTVL()

      CACHE.time = new Date().getTime()
      CACHE.value = tvl;
      localStorage.setItem('CACHE_useTVL_time', CACHE.time)
      localStorage.setItem('CACHE_useTVL_value', CACHE.value)

      setTVL(new BigNumber(tvl))
    } else {
      const tvl = CACHE.value
      setTVL(new BigNumber(tvl))
    }
  }, [block, sushi])

  useEffect(() => {
    if (sushi) {
      fetchTVL()
    }
  }, [block, setTVL, sushi])

  return tvl
}

export default useTVL
