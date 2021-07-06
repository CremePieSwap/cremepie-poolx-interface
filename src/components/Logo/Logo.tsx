import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Bscx from '../../assets/img/logo.svg'
import CremePieLogo from '../../assets/img/cremepie.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img className="d-sm-none" src={CremePieLogo} width="160"/>
      <img className="d-md-none" src={CremePieLogo} width="160"/>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    text-decoration: none;
    .d-sm-none {
        @media (max-width: 767px) {
            display: none;
        }
    }
    .d-md-none {
        @media (min-width: 768px) {
            display: none;
        }
    }
`

export default Logo
