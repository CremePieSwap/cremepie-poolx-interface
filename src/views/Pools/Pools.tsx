import React from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import PoolsCard from './components/PoolsCard'
import {isMobile} from 'react-device-detect'

declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

const Pools: React.FC = () => {
  return (
    <>
    <PageTitleContainer>
      <PageTitle>
        <div className='title'>Creme Pools</div>
        <div className='subtitle'>Just stake some tokens to earn.</div>
        <div className='subtitle'>High APR, low risk.</div>
      </PageTitle>
    </PageTitleContainer>
    <Page>
      <Box className="mt-4">
        <PoolsCard />
      </Box>
    </Page>
    </>
  )
}

const PageTitleContainer = styled.div`
  width: 100%;
  background: linear-gradient(247.99deg, #50E3C2 0%, #6F6C99 98.46%);
  backdrop-filter: blur(0.3px);
  display: flex;
  justify-content: center;
  padding: 40px 50px;
`

const PageTitle = styled.div`
  width: ${isMobile ? '100%': '940px'};
  text-align: left;
  color: #FFFFFF;
  position: relative;
  .title {
    font-family: SF-900;
    font-size: 40px;
    font-weight: 900;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .subtitle {
    font-family: SF-500;
    font-size: 24px;
    font-weight: 500;
  }
`
const Box = styled.div`
  width: 100%;
  z-index: 2;
  &.mt-4 {
      margin-top: 40px;
      @media (max-width: 767px) {
          margin-top: 30px;
      }
  }
`

export default Pools
