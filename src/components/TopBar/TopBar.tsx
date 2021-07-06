import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from '../Logo'
import MenuOpen from '../../assets/img/menu_open.svg'
import MenuClose from '../../assets/img/menu_close.svg'

import AccountButton from './components/AccountButton'
import Nav from './components/Nav'

interface TopBarProps {
  showMenu: boolean,
  onClickMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ showMenu, onClickMenu }) => {
  return (
    <StyledTopBar>
      <StyledTopBarInner>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StyledLogoWrapper>
            <WrapIconMenu>
              <img
                onClick={() => onClickMenu()}
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
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 2;
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
  width: 100%;
  @media (max-width: 767px) {
    padding: 0;
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

export default TopBar
