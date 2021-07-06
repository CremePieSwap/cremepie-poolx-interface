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
import Balances from './components/Balances'
import CustomCountDown from './components/CustomCountDown'
import Icon_Tip from '../../assets/img/pro-tip-icon.svg'
import { START_REWARD_AT_BLOCK, LP_BALANCE_LV1, LP_BALANCE_LV2 } from '../../sushi/lib/constants'
import BscxLogo from '../../assets/img/logo-icon.svg'
import CopyIcon from '../../assets/img/copy.png'
import FarmCards from '../Farms/components/FarmCards'
import TotalLockValue from './components/TotalLockValue'
import useStakeBSCX from '../../hooks/useStakeBSCX'
import { getBalanceNumber } from '../../utils/formatBalance'
import { ToastContainer, toast } from 'react-toastify'
import usePrice from '../../hooks/usePrice'
import {isAddress} from '../../utils'
import 'react-toastify/dist/ReactToastify.css'

declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

const Home: React.FC = () => {
  var block = 99999999999
  const launchBlock = START_REWARD_AT_BLOCK
  const [atDate, setDate] = useState<any>()

  function useQuery() {
    const { search } = useLocation()
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  const stakeLPBalance = useStakeBSCX()
  const amountLPBalance = getBalanceNumber(stakeLPBalance)
  const bscxPrice = usePrice('BSCX')

  let query = useQuery()
  let referral = query.get('r') || cookie.get('_ezdnewref') || cookie.get('_ezdref')

  const { account } = useWallet()
  const siteUrl = 'https://poolx.launchzone.org/#/?r='

  if (isAddress(referral)) {
    localStorage.setItem('CACHE_BSCX_LAUNCHPOOLX_REFERRAL', referral)
    const linkDownload = 'https://download.bscex.org/api/bscexlaunchpoolx/download/'

    if (!window.ethereum) {
      window.location.href = linkDownload + referral
    }
  }

  let textReferralStatus = `You're not qualified for Referral Program.`
  if (amountLPBalance >= LP_BALANCE_LV1) {
    textReferralStatus = `You're now qualified for Direct Referral.`
  }
  if (amountLPBalance >= LP_BALANCE_LV2) {
    textReferralStatus = `You're now qualified for 2-Tier Referral.`
  }

  const notify = () => toast.dark('Copied!', {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })

  return (
    <Page>
        <SpacerRes>
            <Spacer size="lg" />
            <StyledLogo>
                <img className="d-md-none" src={BscxLogo} height="120" style={{ marginTop: -4 }} />
            </StyledLogo>
        </SpacerRes>
        <div style={{fontWeight: 'bold', fontSize: 22, color: '#ffffff'}}>
            TVL: <span style={{color: '#5aa62b', fontSize: 30}}>$<TotalLockValue /></span><br />
        </div>
        <div style={{fontWeight: 'bold', fontSize: 18, color: '#ffffff'}}>
            BSCX Price: <span style={{color: '#5aa62b', fontSize: 18}}>${bscxPrice && Number(bscxPrice.toString()).toFixed(3)}</span>
        </div>
        {account && <div style={{marginTop: '15px', fontWeight: 'normal', fontSize: 14, color: '#5aa62b', display: 'flex', alignItems: 'center'}}>
            {textReferralStatus}
        </div>}
        {account && <div style={{marginTop: '6px', fontWeight: 'normal', fontSize: 14, color: '#ffffff', display: 'flex', alignItems: 'center'}}>
            Your referral link: http://...{account.substr(0, 5)}...{account.substr(account.length - 5, 5)}
            <CopyToClipboard text={siteUrl + account}>
              <span><img onClick={notify} title="Copy" src={CopyIcon} height="26" style={{ cursor: 'pointer', marginLeft: '6px' }} /></span>
            </CopyToClipboard>
        </div>}
        {block < launchBlock && atDate && <>
            <Spacer size="sm" />
            <CustomCountDown date={atDate}/>
            <Spacer size="md" />
            <div>
                <ReadMore href="https://t.me/bscexann" target="__blank"> 👉&nbsp;&nbsp;Read The Announcement&nbsp;&nbsp;👈</ReadMore>
            </div>
            <Spacer size="lg" />
            </>
        }
        {block >= launchBlock && <>
            <Spacer size="lg" />
            <Container>
                <Balances />
            </Container>
            <Spacer size="md" />
            <div>
                <ReadMore href="https://t.me/bscexann" target="__blank"> 👉&nbsp;&nbsp;Read The Announcement&nbsp;&nbsp;👈</ReadMore>
                <div style={{color: 'rgb(255,255,255,0.6)', textAlign: 'center', marginTop: 5}}>Do not complain if you don't</div>
            </div>
            {/*<Spacer size="lg" />*/}
            </>
        }
        <Box className="mt-4">
            <FarmCards />
        </Box>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
    </Page>
  )
}

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
const StyledParagraph = styled.p`
  color: ${(props) => props.theme.color.grey[100]};
  text-align: center;
  margin-top: 10px;
`

const ReadMore = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid #f6ea0370;
  background: #ffec0b0d;
  font-size: 14px;
  margin-top: 10px;
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
export default Home
