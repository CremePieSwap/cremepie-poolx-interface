import { useCallback, useEffect, useState } from 'react'
import { supportedPools } from '../sushi/lib/constants'

const usePoolInfo = (pid: number, version: string) => {
  const [info, setInfo] = useState({})

  const getPoolInfo = useCallback(async () => {
    const infos = supportedPools.filter((e) => {
      return e.pid == pid && e.version == version
    })

    setInfo(infos[0])
  }, [pid])

  useEffect(() => {
    getPoolInfo()
  }, [pid])

  return info
}

export default usePoolInfo
