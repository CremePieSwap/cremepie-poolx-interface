import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import Button from '../../components/Button'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import WalletProviderModal from '../../components/WalletProviderModal'
import useFarm from '../../hooks/useFarm'
import useModal from '../../hooks/useModal'
import useRedeem from '../../hooks/useRedeem'
import useSushi from '../../hooks/useSushi'
import useBulkPairData from '../../hooks/useBulkPairData'
import { BigNumber } from '../../sushi'
import { getContract } from '../../utils/erc20'
import { getBalanceNumber } from '../../utils/formatBalance'
import Apy from './components/Apy'
import Harvest from './components/Harvest'
import Stake from './components/Stake'

const Farm: React.FC = () => {
  const { farmId } = (useParams() as any)
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    tokenSymbol,
    token2Symbol,
    earnToken,
    name,
    icon,
    icon2,
    description,
    symbolShort,
    protocal,
    iconProtocal,
    pairLink,
    addLiquidityLink,
    removeLiquidityLink,
    isHot,
    rewardToken,
    project,
    version,
    stake,
    decimals,
    decimalsReward
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    symbolShort: '',
    tokenSymbol: '',
    token2Symbol: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
    symbol: '',
    protocal: '',
    iconProtocal: '',
    pairLink: '',
    addLiquidityLink: '',
    removeLiquidityLink: '',
    isHot: false,
    project: '',
    version: '',
    stake: false,
    decimals: 18,
    decimalsReward: 18
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sushi = useSushi()
  // const pairs = useBulkPairData(['0xa32a983a64ce21834221aa0ad1f1533907553136'])
  // console.log('pairs', pairs)

  const { ethereum, account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  return (
    <>
      {stake && <PageHeader
        icon={
          <div style={{display: 'flex'}}>
            <img src={icon} height="50" />
          </div>
        }
        subtitle={isHot ? '' : description}
        title={name}
      />}
      {!stake && <PageHeader
        icon={
          <div style={{display: 'flex'}}>
            <img src={icon} height="50" />&nbsp;<img src={icon2} height="50" />
          </div>
        }
        subtitle={isHot ? '' : description}
        title={name}
      />}
      <StyledFarm>
        {/*isHot &&
          <StyledInfo style={{color: '#F44336'}}>
            👉 This pool has been rotated out from farming set of the week.<br/>
          You will no longer receive rewards when staking with it
          </StyledInfo>
        */}
        {/*<Spacer size="md"/>*/}
        <StyledApyWrap>
          <Apy
            pid={pid}
            lpTokenAddress={lpTokenAddress}
            symbolShort={symbolShort}
            rewardSymbolToken={rewardToken && rewardToken.symbol}
            tokenSymbol={tokenSymbol}
            token2Symbol={token2Symbol}
            version={version}
            stake={stake}
            decimals={decimals}
            decimalsReward={decimalsReward}
            project={project}/>
        </StyledApyWrap>
        <Spacer size="md"/>
        <StyledHeading>Your staking</StyledHeading>
        {account &&
          <StyledCardsWrapper>
            <StyledCardWrapper>
              <Harvest pid={pid} version={version} decimalsReward={decimalsReward} />
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>
              <Stake
                lpContract={lpContract}
                pid={pid}
                tokenName={lpToken.toUpperCase()}
                tokenSymbol={tokenSymbol}
                token2Symbol={token2Symbol}
                project={project}
                version={version}
                decimals={decimals}
                decimalsReward={decimalsReward}
              />
            </StyledCardWrapper>
          </StyledCardsWrapper>
        }
        {!account && <StyledCardsWrapper>
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Button variant="secondary"
                onClick={onPresentWalletProviderModal}
                text="🔓 Unlock Wallet To Continue"
              />
            </div>
        </StyledCardsWrapper>}
        <Spacer size="lg" />
        {!isHot &&
          <StyledInfo style={{color: '#ff9800'}}>
            👉 Every time you stake and unstake LP tokens, the contract will<br/>
            automatically harvest BSCX rewards for you!
          </StyledInfo>
        }
        <Spacer size="lg" />
        {!stake && <StyledCardsWrapper>
          <div>
            <div style={{color: '#ffffff', fontWeight: 'bold', fontSize: 14, marginBottom: 10}}>
              MAYBE YOU DON'T KNOW
            </div>
            <StyledInfoLP>
              <img src={iconProtocal} height="50" style={{marginTop: 5}} />
              <div style={{width: 'calc(100% - 70px', color: '#ffffff', fontSize: 16, marginLeft: 20, marginRight: 20}}>
                <div>Add/Remove liquidity to <a style={{color: '#f6b944', textDecoration: 'none'}} href={pairLink} target=""><b>{symbolShort} pair</b></a> on {protocal} to get <span style={{color: '#f6b944'}}>{lpToken}</span> tokens. Then deposit those LP tokens on swap.bscex.org to receive rewards</div>
                <Spacer size="sm" />
                <a style={{color: '#f6b944'}} target="" href={addLiquidityLink}>
                  <b>Add Liquidity on {protocal}</b>
                </a>&nbsp;&nbsp;
                <a style={{color: '#f6b944'}} target="" href={removeLiquidityLink}>
                  <b>Remove Liquidity on {protocal}</b>
                </a>
              </div>
            </StyledInfoLP>
          </div>
        </StyledCardsWrapper>}

        <Spacer size="md" />
      </StyledFarm>
    </>
  )
}

const StyledApyWrap = styled.div`
  width: 600px;
  @media (max-width: 767px) {
    width: 100%;
  }
`
const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    padding 0 15px;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 767px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (max-width: 767px) {
    text-align: left;
    br {
        display: none;
    }
  }
`

const StyledHeading = styled.h2`
  color: ${(props) => props.theme.color.white};
  opacity: 0.5;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
`

const StyledInfoLP = styled.div`
  display: flex;
  padding: 15px 10px;
  background: #00ff5d0f;
  border-radius: 12px;
`

export default Farm
