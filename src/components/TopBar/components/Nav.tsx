import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface NavProp {
    showMenu: boolean
}

const Nav: React.FC<NavProp> = ({showMenu}) => {
  return (
    <StyledNav showMenu={showMenu}>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact to="/referral">
        Referral
      </StyledLink>
      <StyledAbsoluteLink href="https://poolxv3.launchzone.org">
        PoolX V3
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://poolxv4.launchzone.org">
        PoolX V4
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://swapx.launchzone.org">
        SwapX
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://swapv1.launchzone.org/#/pool">
        Add Liquidity
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://govx.launchzone.org/#/">
        Governance
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav<{ showMenu: boolean }>`
  align-items: center;
  display: flex;

  @media (max-width: 767px) {
    transition: all .15s linear;
    flex-direction: column;
    align-items: flex-end;
    height: ${({ theme, showMenu }) => (showMenu ? '250px' : '0px')};
    overflow: hidden;
  }
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  margin-left: ${(props) => props.theme.spacing[4]}px;
  margin-right: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[4]}px;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  position: relative;
  &:after{
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  &:hover {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  &.active {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  @media (max-width: 767px) {
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 8px;
    padding-bottom: 6px;
  }
`

const StyledLink2 = styled(NavLink)`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  margin-left: ${(props) => props.theme.spacing[4]}px;
  margin-right: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[4]}px;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  position: relative;
  &:after{
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  &:hover {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  &.active {
    &:after{
      background-color: ${(props) => props.theme.color.primary.main};
    }
  }
  @media (max-width: 767px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`



const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
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
    padding-top: 12px;
  }
`
const StyledAbsoluteLink2 = styled.a`
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


  @media (max-width: 767px) {
    display: none;
  }
`

export default Nav
