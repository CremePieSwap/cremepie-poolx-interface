import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'
import {
  getMasterChefContract,
  getFarms,
  getLPValuePrice,
  getPrices
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import config from '../config'
import { BSCX_PRICE_POOL, ZSEED_PRICE_POOL } from '../sushi/lib/constants'

export interface StakedValue {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  poolWeight: BigNumber
  usdValue: BigNumber
  pid: string,
  price: BigNumber
}

var CACHE : any = {
  time: parseInt(localStorage.getItem('CACHE_usePrice_time') || '0'),
  old: 5 * 1000,
  value: localStorage.getItem('CACHE_usePrice_value') || '{}'
}

const usePrice = (project: string) => {
  const [price, setPrice] = useState(new BigNumber(0))
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const block = useBlock()

  const fetchStakedValue = useCallback(async () => {
    var prices
    if (CACHE.time + CACHE.old <= new Date().getTime()) {
      prices = await getPrices()

      CACHE.time = new Date().getTime()
      CACHE.value = JSON.stringify(prices);
      localStorage.setItem('CACHE_usePrice_time', CACHE.time)
      localStorage.setItem('CACHE_usePrice_value', CACHE.value)
    } else {
      prices = JSON.parse(CACHE.value)
    }

    let price = 0
    switch (project) {
      case "ZSEED":
        price = prices.zseed
        break;
      case "BSCX":
        price = prices.bscx
        break;
      case "ZD":
        price = prices.zd
        break;
      case "TOOLS":
        price = prices.tools
        break;
      case "ZDCASH":
        price = prices.zdcash
        break;
    }

    if (price > 0) {
      setPrice(new BigNumber(price))
    }
  }, [block, sushi, project])

  useEffect(() => {
    if (sushi) {
      fetchStakedValue()
    }
  }, [block, setPrice, sushi, project])

  return price
}

export default usePrice
