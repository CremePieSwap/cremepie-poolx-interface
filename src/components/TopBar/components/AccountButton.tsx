import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import useSaveCountry from '../../../hooks/useSaveCountry'
import Button from '../../Button'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account, connect, error } = useWallet()
  const country = useSaveCountry()

  useEffect(() => {
      if (localStorage.useWalletConnectType && window.ethereum && localStorage.getItem('CACHE_BSC_TRY_CONNECT') != '1') {
        setTimeout(() => {
          if (!error) {
            tryConnect()
          }
        }, 1000)

        if (error) {
          setTimeout(() => {
            tryConnect()
          }, 1000)
        }
      }
  }, [error])

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  async function tryConnect() {
    console.log('error: ', error)
    console.log('useWalletConnectType: ', localStorage.useWalletConnectType)
    connect(localStorage.useWalletConnectType)
  }

  return (
    <StyledAccountButton>
      {!account ? (<StyleUnlock>
        <Button onClick={handleUnlockClick} size="sm" variant="secondary" text="Unlock Wallet" />
      </StyleUnlock>) : (
        <BoxWallet>
            <div>{account.substr(0, 7)}...</div>
            <Button onClick={onPresentAccountModal} size="sm" variant="secondary" text="My Wallet" />
        </BoxWallet>
      )}
    </StyledAccountButton>
  )
}

const StyleUnlock = styled.span`
  display: flex;
`

const StyleError = styled.span`
  color: red;
  white-space: pre;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  margin-right: 10px;
`

const StyledAccountButton = styled.div``

const BoxWallet = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    div {
        background: #4c5050;
        padding: 0 16px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        position: relative;
        &:before{
            position: absolute;
            content: '';
            background: #4c5050;
            height: 100%;
            width: 50%;
            z-index: -1;
            right: -25%;
        }
    }
`

export default AccountButton
