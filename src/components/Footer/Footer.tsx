import React from 'react'
import styled from 'styled-components'
import cookie from 'js-cookie'

import Nav from './components/Nav'

const Footer: React.FC = () => {
  const localRef = localStorage.getItem('CACHE_BSCX_LAUNCHPOOLX_REFERRAL') || cookie.get('_ezdnewref') || cookie.get('_ezdref')

  return (
  <StyledFooter>
    {localRef && <StyledRef>Invited by: {localRef.substr(0, 6)}...{localRef.substr(localRef.length - 4, 4)}</StyledRef>}
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)
}

const StyledFooter = styled.footer`
  align-items: center;
  justify-content: center;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${props => props.theme.topBarSize}px;
  width: 100%;
`

const StyledRef = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 12px;
  color: #9e9e9e;
`

export default Footer
