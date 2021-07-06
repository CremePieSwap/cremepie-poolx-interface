import React from 'react'
import styled, { keyframes } from 'styled-components'
import { isMobile } from 'react-device-detect'
import { NavLink } from 'react-router-dom'

interface MenuProps {
  onDismiss?: () => void
  visible?: boolean
}

const Menu: React.FC<MenuProps> = ({ onDismiss, visible }) => {
  return (
    <StyledMenuWrapper className={isMobile ? visible ? 'show mobile': 'hide': visible ? 'show' : 'minimize'}>
      <StyledMenu>
        <StyledLink exact activeClassName="active" to="/" onClick={onDismiss}>
          Home
        </StyledLink>

        <StyledAbsoluteLink href="https://swap.bscex.org/#/swap">
          Swap
        </StyledAbsoluteLink>
      </StyledMenu>
    </StyledMenuWrapper>
  )
}
const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #ffffff;
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`
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
  // animation: ${slideIn} 0.3s forwards ease-out;
  // background-color: ${(props) => props.theme.color.grey[200]};
  // display: flex;
  // flex: 1;
  // flex-direction: column;
  // justify-content: center;
  // position: absolute;
  // top: 0;
  // left: 100%;
  // bottom: 0;
  // width: calc(100% - 48px);
`

const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 24px;
  font-weight: 700;
  padding: ${(props) => props.theme.spacing[3]}px
    ${(props) => props.theme.spacing[4]}px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
`

const StyledLink2 = styled(NavLink)`
  box-sizing: border-box;
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 24px;
  font-weight: 700;
  padding: ${(props) => props.theme.spacing[3]}px
    ${(props) => props.theme.spacing[4]}px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
`

export default Menu
