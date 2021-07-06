import React, { useState } from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Logo from '../Logo'
import MenuOpen from '../../assets/img/menu_open.svg'
import MenuClose from '../../assets/img/menu_close.svg'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <StyledTopBar>
      {/* <Container size="lg"> */}
      <StyledTopBarInner>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledLogoWrapper>
            <WrapIconMenu>
              <img
                onClick={() => setShowMenu(!showMenu)}
                src={showMenu ? MenuOpen : MenuClose}
                width="25"
                style={{ cursor: 'pointer' }}
              />
            </WrapIconMenu>
            <Logo />
          </StyledLogoWrapper>
        </div>
        <StyledAccountButtonWrapper>
          <AccountButton />
        </StyledAccountButtonWrapper>
      </StyledTopBarInner>
      <WrapMenuMobile>
        <Nav showMenu={showMenu} />
      </WrapMenuMobile>
      {/* </Container> */}
    </StyledTopBar>
  )
}

const StyledLogoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  @media (max-width: 767px) {
    width: auto;
  }
`

const WrapMenuDesktop = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

const WrapMenuMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`

const WrapIconMenu = styled.div`
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTopBar = styled.div`
  background-color: ${(props) => props.theme.color.primary.light};
`

const StyledTopBarInner = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => props.theme.topBarSize}px;
  justify-content: space-between;
  padding-right: 16px;
  background: rgb(50, 50, 50);
  border-bottom: 2px solid rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0px, 0px, 0px);
`
const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  @media (max-width: 767px) {
    display: none;
  }
`

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
//   width: 156px;
  @media (max-width: 767px) {
    justify-content: center;
    width: auto;
  }
`

const StyledMenuButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0;
  display: none;
  @media (max-width: 767px) {
    align-items: center;
    display: flex;
    height: 44px;
    justify-content: center;
    width: 44px;
  }
`

export default TopBar
