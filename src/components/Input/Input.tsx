import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  placeholder?: string,
  startAdornment?: React.ReactNode,
  value: string,
}

const Input: React.FC<InputProps> = ({
  endAdornment,
  onChange,
  placeholder,
  startAdornment,
  value,
}) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: #F5F5FA;
  border-radius: ${props => props.theme.borderRadius}px;
  display: flex;
  height: 48px;
`

const StyledInput = styled.input`
  background: none;
  border: 0;
  color: #5B5A99;
  font-size: 18px;
  font-weight: 600;
  flex: 1;
  height: 48px;
  margin: 0;
  padding: 0;
  outline: none;
  max-width: 225px;
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #5B5A99;
    opacity: 1; /* Firefox */
  }
  
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #5B5A99;
  }
  
  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #5B5A99;
  }
`

export default Input