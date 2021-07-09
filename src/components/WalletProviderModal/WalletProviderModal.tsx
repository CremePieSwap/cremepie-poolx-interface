import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'
import coin98Logo from '../../assets/img/coin98.png'
import trustWalletLogo from '../../assets/img/trustwallet.png'
import ontoLogo from '../../assets/img/onto.svg'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

const linkDownload = 'https://download.bscex.org/api/bscexlaunchpoolx/download/'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect, error: errorWallet } = useWallet()
  const wallet = useWallet()
  const referral = localStorage.getItem('CACHE_BSCX_LAUNCHPOOLX_REFERRAL')

  useEffect(() => {
    if (account) {
      onDismiss()
      if (localStorage.useWalletConnectType && localStorage.useWalletConnectType === 'injected') {
        localStorage.useWalletConnectStatus = 'connected'
      }
    }
  }, [account, onDismiss])

  async function tryConnect(type: any, wallet: string) {
    localStorage.setItem('CACHE_BSC_TRY_CONNECT', '1')
    if (!window.ethereum && wallet === 'ezdefi') {
      window.location.href = linkDownload + referral
    }
    if (type == 'injected') {
      localStorage.useWalletConnectType = type
      localStorage.useWalletConnectStatus = 'pending'
    }

    try {
      await connect(type)
    } catch(e) {
    }
  }

  return (
    <Modal>
      <StyledModalTitle>
        Select a wallet provider.
      </StyledModalTitle>

      <ModalContent>
        {errorWallet && <StyleError>{'Error: Unsupported chain, please select Binance Smart Chain network'}</StyleError>}
        <StyledWalletsWrapper>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={metamaskLogo} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected', 'metamask')}
              title="Metamask"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={'https://nextyezpay.s3-ap-southeast-1.amazonaws.com/zd.svg'} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected', 'ezdefi')}
              title="ezDeFi"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={trustWalletLogo} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected', 'trust')}
              title="Trust Wallet"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={coin98Logo} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected', 'coin98')}
              title="Coin98 Wallet"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={ontoLogo} style={{ height: 32 }} />}
              onConnect={() => tryConnect('injected', 'metamask')}
              title="Onto Wallet"
            />
          </StyledWalletCard>
          <StyledWalletCard>
            <WalletCard
              icon={<img src={walletConnectLogo} style={{ height: 24 }} />}
              onConnect={() => tryConnect('walletconnect', 'walletconnect')}
              title="WalletConnect"
            />
          </StyledWalletCard>
        </StyledWalletsWrapper>
      </ModalContent>

      <ModalActions>
        <Button text="Cancel" variant="tertiary" onClick={onDismiss} />
      </ModalActions>
    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyleError = styled.div`
  color: red;
  text-align: center;
  padding: 10px 0;
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

const StyledModalTitle = styled.div`
  align-items: center;
  color: #5B5A99;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 6px;
  justify-content: center;
`

export default WalletProviderModal
