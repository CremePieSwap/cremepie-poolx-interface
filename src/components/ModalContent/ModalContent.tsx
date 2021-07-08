import React from 'react'
import styled from 'styled-components'

const ModalContent: React.FC = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>
}

const StyledModalContent = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    // flex: 1;
    // overflow: auto;
  }
`

export default ModalContent
