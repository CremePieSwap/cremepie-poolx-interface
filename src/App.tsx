import React, { useCallback, useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Home from './views/Home'
import Referral from './views/Referral'
import config from './config'
import Menu from './components/Menu'

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true)

  // const handleMenu = useCallback(() => {
  //   setShowMenu(!showMenu)
  // }, [setShowMenu])
  localStorage.setItem('CACHE_BSC_TRY_CONNECT', '0')
  return (
    <Providers>
      <TopBar onClickMenu={() => setShowMenu(!showMenu)} showMenu={showMenu}/>
      <Menu visible={showMenu}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/farms">
          <Farms />
        </Route>
        <Route path="/referral">
          <Referral />
        </Route>
      </Switch>
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

export default App
