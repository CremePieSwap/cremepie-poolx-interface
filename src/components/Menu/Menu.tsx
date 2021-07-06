import React from 'react'
import styled, { keyframes } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { NavLink } from 'react-router-dom'

import Home from '../../assets/img/home_icon.svg'
import Trade from '../../assets/img/trade_icon.svg'
import Pools from '../../assets/img/pools_icon.svg'
import Active from '../../assets/img/active_menu.svg'
interface MenuProps {
  onDismiss?: () => void
  visible?: boolean
}

const Menu: React.FC<MenuProps> = ({ onDismiss, visible }) => {
  return (
    <StyledMenuWrapper className={isMobile ? visible ? 'show mobile': 'hide': visible ? 'show' : 'minimize'}>
      <StyledMenu>
        <StyledNavLink exact activeClassName="active" to="/" onClick={onDismiss}>
          <img className='active' src={Active} alt="active" />
          <img src={Home} alt="home" />
          Home
        </StyledNavLink>
        <StyledAbsoluteLink href="https://swap.bscex.org/#/swap">
          <img className='active' src={Active} alt="active" />
          <img src={Trade} alt="trade" />
          Trade
        </StyledAbsoluteLink>
        <StyledAbsoluteLink href="https://swap.bscex.org/#/swap">
          <img className='active' src={Active} alt="active" />
          <img src={Pools} alt="pools" />
          Pools
        </StyledAbsoluteLink>
      </StyledMenu>
    </StyledMenuWrapper>
  )
}

const StyledBackdrop = styled.div`
  background-color: ${(props) => props.theme.color.grey[600]}aa;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledMenuWrapper = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #323232;
  height: 100%;
  transition: padding-top 0.2s ease 0s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-right: 0px;
  overflow: hidden;
  transform: translate3d(0px, 0px, 0px);
  white-space: nowrap;
  display: block;
  &.show {
    display: block;
    width: 240px;
  }
  &.minimize {
    display: block;
    width: 56px;
  }
  &.hide {
    display: none;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%);
  }
`

const StyledMenu = styled.div`
`

const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  color: #FAE8BA;
  :hover {
    color: #50E3C2;
    background: #89DBC420;
    cursor: pointer;
  }
  > img {
    width: 25px;
    margin-right: 1rem;
    &.active {
      display: none;
    }
  }

  &.active {
    > img {
      &.active {
        display: block;
        position: absolute;
        left: 0;
        width: 18px;
      }
    }
`
const StyledAbsoluteLink = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  text-decoration: none;
  font-weight: 600;
  color: #FAE8BA;
  :hover {
    color: #50E3C2;
    background: #89DBC420;
    cursor: pointer;
  }
  > img {
    width: 25px;
    margin-right: 1rem;
    &.active {
      display: none;
    }
  }

  &.active {
    > img {
      &.active {
        display: block;
        position: absolute;
        left: 0;
        width: 18px;
      }
    }
`


export default Menu
