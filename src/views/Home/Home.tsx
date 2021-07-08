import React from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import FarmCards from '../Farms/components/FarmCards'
import 'react-toastify/dist/ReactToastify.css'
import { isMobile } from 'react-device-detect'

import BG_1 from '../../assets/img/farm_bg_1.svg'
import BG_2 from '../../assets/img/farm_bg_2.svg'
declare global {
  interface Window {
    ethereum: any,
    location: Location
  }
}

const Home: React.FC = () => {
  return (
    <Page>
      <PageTitle>
        <div className='title'>Farms</div>
        <div className='subtitle'>Stake LP tokens to earn.</div>
      </PageTitle>
      <Box className="mt-4">
        <FarmCards />
      </Box>
      { isMobile ? 
        <img
          className='bg-1'
          src={BG_1}
          alt='1'
          style={{
            position: 'fixed',
            opacity: 0.1,
            top: '74px',
            right: '-65px',
            zIndex: 0
          }}
        /> : 
        <>
          <img
            className='bg-1'
            src={BG_1}
            alt='1'
            style={{
              position: 'fixed',
              opacity: 0.1,
              top: '74px',
              right: '30px',
              zIndex: 0
            }}
          />
          <img
            className='bg-2'
            src={BG_2}
            alt='2'
            style={{
              position: 'fixed',
              opacity: 0.1,
              bottom: 0,
              right: 0,
              zIndex: 0
            }}
          />
        </>
      }
    </Page>
  )
}

const PageTitle = styled.div`
  padding-top: 64px;
  width: 100%;
  text-align: left;
  color: #89DBC4;
  position: relative;
  .title {
    font-family: SF-900;
    font-size: 40px;
    font-weight: 900;
    line-height: 40px;
  }
  .subtitle {
    font-family: SF-500;
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
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

export default Home
