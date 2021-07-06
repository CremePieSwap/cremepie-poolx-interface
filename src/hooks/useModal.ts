import { useCallback, useContext } from 'react'
import { Context } from '../contexts/Modals'

const useModal = (modal: React.ReactNode, key?: string) => {
  const { onDismiss, onPresent } = useContext(Context)

  const handlePresent = useCallback(() => {
    onPresent(modal, key)
        setTimeout(() => {
            localStorage.setItem('CACHE_BSC_TRY_CONNECT', '1')
        }, 100)
  }, [key, modal, onPresent])

  return [handlePresent, onDismiss]
}

export default useModal
