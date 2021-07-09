import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  overflow: hidden;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
  border: 1px solid #f5f5fa;
`

export default Card
