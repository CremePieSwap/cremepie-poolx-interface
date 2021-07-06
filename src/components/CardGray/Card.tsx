import React from 'react'
import styled from 'styled-components'

const CardGray: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: #38393b;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default CardGray
