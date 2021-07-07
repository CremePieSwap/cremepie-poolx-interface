import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import useSaveCountry from '../../../hooks/useSaveCountry'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import CremeToken from '../../../assets/img/creme_token.svg'

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
      {!account ? (
        <StyleUnlock>
          <ConnectWallet onClick={handleUnlockClick}>Connect Wallet</ConnectWallet>
        </StyleUnlock>) : (
        <BoxWallet>
          <div onClick={onPresentAccountModal}>{account.slice(0, 6)}...{account.slice(-4)}</div>
          <img src={CremeToken} alt="creme token" />
        </BoxWallet>
      )}
    </StyledAccountButton>
  )
}

const StyleUnlock = styled.div`
  background-color: #50E3C2;
  color: #5B5A99;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 12px;
`
  
const ConnectWallet = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 500;
  margin: 0 0.5rem 0 0.25rem;
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

const StyledAccountButton = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  margin-right: 20px;
  @media (max-width: 767px) {
    margin-right: 10px;
  }
`

const BoxWallet = styled.div`
  background-color: #E5E5E5;
  border: 1px solid #50E3C2;
  color: #89DBC4;
  border-radius: 40px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
    div {
      flex: 1 1 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0 0.5rem 0 0.25rem;
      font-size: 1rem;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      font-family: SF-500;
      margin-right: 25px;
    }
    img {
      position: absolute;
      right: 7px;
    }
  @media (max-width: 767px) {
    div {
      margin-right: 0;
    }
    img {
      display: none;
    }
  }
`

export default AccountButton
