import React from 'react'
import styled from 'styled-components'

import Button from '../Button'
import Input, { InputProps } from '../Input'

interface TokenInputProps extends InputProps {
  max: number | string,
  symbol: string,
  onSelectMax?: () => void,
}

const TokenInput: React.FC<TokenInputProps> = ({
  max,
  symbol,
  onChange,
  onSelectMax,
  value,
}) => {
  return (
    <StyledTokenInput>
        <Box>
            <StyleBox>
                <StyleLabel>Amount</StyleLabel>
                <StyledMaxText>Balance: {max.toLocaleString('en-US')}</StyledMaxText>
            </StyleBox>
            <BoxInput>
                <Input
                    endAdornment={(
                    <StyledTokenAdornmentWrapper>
                        <StyledTokenSymbol>{symbol}</StyledTokenSymbol>
                        <StyledSpacer />
                        <div className='max' onClick={onSelectMax}>MAX</div>
                    </StyledTokenAdornmentWrapper>
                    )}
                    onChange={onChange}
                    placeholder="0"
                    value={value}
                />
            </BoxInput>
        </Box>
    </StyledTokenInput>
  )
}

const StyleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyleLabel = styled.div`
  color: #5B5A99;
  font-weight: bold;
  width: 40%;
`
const StyledTokenInput = styled.div`
  padding: 24px;
`
const Box = styled.div`
  background-color: #F5F5FA;
  border-radius: 20px;
  padding: 10px 20px;
`
const StyledSpacer = styled.div`
  width: ${props => props.theme.spacing[3]}px;
`

const StyledTokenAdornmentWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 60%;
  .max {
    font-family: SF-500;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`

const StyledMaxText = styled.div`
  align-items: center;
  color: #5B5A99;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  height: 44px;
  width: 60%;
  justify-content: flex-end;
`

const StyledTokenSymbol = styled.span`
  color: ${props => props.theme.color.grey[100]};
  font-weight: 700;
`

const BoxInput = styled.div`
  input {
      width: 40%;
  }
`



export default TokenInput