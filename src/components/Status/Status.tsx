import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface StatusProps {
  status?: string
}

const Status: React.FC<StatusProps> = ({ status = 'active' }) => {
  const { spacing } = useContext(ThemeContext)

  let c: string
  switch (status) {
    case 'active':
      c = '#2FF37D'
      break
    case 'finished':
      c = '#CECDBA'
      break
    case 'upcoming':
      c = '#F3BA2F'
      break
    default:
      c = '#2FF37D'
  }

  return (
    <StyledStatus colorData={c}>
      {status}
    </StyledStatus>
  )
}

interface StyledStatusProps {
  colorData: string,
}

const StyledStatus = styled.div<StyledStatusProps>`
  border: 1px solid ${props => props.colorData};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${props => props.colorData};
  width: 100px;
  text-align: center;
  text-transform: capitalize;
`

export default Status
