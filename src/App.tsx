import React, { useCallback, useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Pools from './views/Pools'
import Farms from './views/Farms'
import Home from './views/Home'
import Referral from './views/Referral'
import config from './config'
import Menu from './components/Menu'

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true)
  localStorage.setItem('CACHE_BSC_TRY_CONNECT', '0')
  return (
    <Providers>
      <TopBar onClickMenu={() => setShowMenu(!showMenu)} showMenu={showMenu}/>
      <Menu visible={showMenu}/>
      <BodyWrapper showMenu={showMenu}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/pools">
            <Pools />
          </Route>
          <Route path="/referral">
            <Referral />
          </Route>
        </Switch>
      </BodyWrapper>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={config.chainId}
        connectors={{
          walletconnect: { rpcUrl: config.rpc },
        }}
      >
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <Router>
              <ModalsProvider>{children}</ModalsProvider>
              </Router>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

const BodyWrapper = styled.div<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ showMenu }) => isMobile ? '0' : showMenu ? '240px' : '56px'};
  max-width: ${({ showMenu }) => isMobile ? '100vw' : showMenu ? 'calc(100vw - 240px)' : 'calc(100vw - 56px)'};
  margin-top: 64px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default App
