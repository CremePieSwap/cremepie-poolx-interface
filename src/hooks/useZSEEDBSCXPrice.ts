import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { Contract } from 'web3-eth-contract'
import {
  getFarms,
  getLPValuePrice,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import axios from 'axios'
import config from '../config'
import { ZSEED_BSCX_PRICE_POOL } from '../sushi/lib/constants'

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

const useBSCXPrice = () => {
  const [price, setPrice] = useState(new BigNumber(0))
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const block = useBlock()

  const fetchStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.filter((e: any) => e.pid == ZSEED_BSCX_PRICE_POOL).map(
        ({
          pid,
          lpContract,
          tokenContract,
          token2Contract
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          token2Contract: Contract
        }) =>
          getLPValuePrice(
            lpContract,
            token2Contract,
            tokenContract
          ),
      ),
    )

    setPrice(balances[0] && balances[0].price)
  }, [block, sushi])

  useEffect(() => {
    if (sushi) {
      fetchStakedValue()
    }
  }, [block, setPrice, sushi])

  return price
}

export default useBSCXPrice
