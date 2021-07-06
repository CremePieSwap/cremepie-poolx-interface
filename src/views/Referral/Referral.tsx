import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import cookie from 'js-cookie'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
// import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Icon_Tip from '../../assets/img/pro-tip-icon.svg'
import { START_REWARD_AT_BLOCK, LP_BALANCE_LV1, LP_BALANCE_LV2 } from '../../sushi/lib/constants'
import BscxLogo from '../../assets/img/logo-icon.svg'
import CopyIcon from '../../assets/img/copy.png'
import useStakeBSCX from '../../hooks/useStakeBSCX'
import useReferrals from '../../hooks/useReferrals'
import { getBalanceNumber } from '../../utils/formatBalance'

declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

const Referral: React.FC = () => {
  var block = 99999999999
  const launchBlock = START_REWARD_AT_BLOCK
  const [atDate, setDate] = useState<any>()

  const { account } = useWallet()
  const refers:any = useReferrals()

  return (
    <Page>
        {block >= launchBlock && <>
            <Spacer size="lg" />
            <div>
                <div style={{color: 'rgb(255,255,255,0.6)', textAlign: 'center', marginTop: 5, fontSize: '22px'}}>Launch PoolX Referral Management</div>
            </div>
            </>
        }
        <Box className="mt-4">
            <StyledTable>
              <StyledTR>
                <StyledTH>Wallet</StyledTH>
                <StyledTH>Level</StyledTH>
                <StyledTH>Reward</StyledTH>
                <StyledTH>UnLocked</StyledTH>
                <StyledTH>Locked</StyledTH>
              </StyledTR>
              {refers.length > 0 && refers.map((ref:any) => (
                  <StyledTR>
                    <StyledTD>{ref.user.substr(0, 6)}...{ref.user.substr(ref.user.length - 4, 4)}</StyledTD>
                    <StyledTD>LV1</StyledTD>
                    <StyledTD>{Number(ref.amount).toFixed(1)} <StyledSymbol>{ref.tokenSymbol}</StyledSymbol></StyledTD>
                    <StyledTD>{Number(ref.amount - ref.lockedAmount).toFixed(1)} <StyledSymbol>{ref.tokenSymbol}</StyledSymbol></StyledTD>
                    <StyledTD>{Number(ref.lockedAmount).toFixed(1)} <StyledSymbol>{ref.tokenSymbol}</StyledSymbol></StyledTD>
                  </StyledTR>
                ))
              }
            </StyledTable>
            {refers.length == 0 && <div style={{textAlign: 'center', marginTop: 5, color: '#fff', fontSize: '13px'}}>No Data</div>}
        </Box>
    </Page>
  )
}

const StyledTable = styled.table`
  min-width: 800px;
  color: #fff;
  font-size: 14px;

  @media (max-width: 767px) {
      min-width: 300px;
  }
`

const StyledTD = styled.td`
  text-align: center;
  border: 1px solid #736e6e;
`
const StyledSymbol = styled.span`
  font-size: 10px;
`
const StyledTH = styled.th`
  border: 1px solid #736e6e;
`

const StyledTR = styled.tr`
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  > img{
    width: 20px;
    margin-right: 3px;
  }
  b {
    color: ${(props) => props.theme.color.primary.main};
  }
`
const StyledHeading = styled.h2`
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
`

const StyledLogo = styled.div`
    .d-md-none {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`

const Box = styled.div`
    &.mt-4 {
        margin-top: 40px;
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }
`
const SpacerRes = styled.div`
    .sc-iCoHVE {
        @media (max-width: 1024px) {
            display: none;
        }
    }
    .d-lg-none {
        @media (min-width: 1025px) {
            display: none;
        }
    }
`
export default Referral
