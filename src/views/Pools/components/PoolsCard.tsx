import BigNumber from 'bignumber.js'
import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import Card from '../../../components/Card'
import CardGray from '../../../components/CardGray'
import Loader from '../../../components/Loader'
import Value from '../../../components/Value'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import usePoolActive from '../../../hooks/usePoolActive'
import useEarnings from '../../../hooks/useEarnings'
import useSushi from '../../../hooks/useSushi'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useUnstake from '../../../hooks/useUnstake'
import useReward from '../../../hooks/useReward'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useStakedBalance from '../../../hooks/useStakedBalance'
import { NUMBER_BLOCKS_PER_YEAR, START_NEW_POOL_AT } from '../../../sushi/lib/constants'
import { getNewRewardPerBlock } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import { isMobile } from 'react-device-detect'

import CloseIcon from '../../../assets/img/close_icon.svg'
import OpenIcon from '../../../assets/img/open_icon.svg'

interface FarmWithStakedValue extends Farm {
  tokenAmount: BigNumber
  token2Amount: BigNumber
  totalToken2Value: BigNumber
  tokenPriceInToken2: BigNumber
  usdValue: BigNumber
  poolWeight: BigNumber
  rewardTokenPrice: BigNumber
  avaiableReward: BigNumber
}

const PoolsCard: React.FC = () => {
  const [farms] = useFarms()
  const [farmsValue, setFarmsValue] = useState('')
  const stakedValue = useAllStakedValue()

  const [searchText, setSearchText] = useState('')
  const [farmDisplay, setFarmDisplay] = useState([])
  
  useEffect(() => {
    const stake_token = Object.values(farms).filter((farm) => farm.addLiquidityLink === '')
    setFarmDisplay(stake_token)
  }, [farms])

  const rows = farmDisplay.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      var sv = (stakedValue || []).find(e => {
        return parseInt(e.pid) == farm.pid && e.version == farm.version
      })
      const farmWithStakedValue : FarmWithStakedValue = {
        ...farm,
        tokenAmount: (sv || {}).tokenAmount || new BigNumber(0),
        token2Amount: (sv || {}).token2Amount || new BigNumber(0),
        totalToken2Value: (sv || {}).totalToken2Value || new BigNumber(0),
        tokenPriceInToken2: (sv || {}).tokenPriceInToken2 || new BigNumber(0),
        poolWeight: (sv || {}).poolWeight || new BigNumber(0),
        usdValue: (sv || {}).usdValue || new BigNumber(0),
        rewardTokenPrice: (sv || {}).rewardTokenPrice || new BigNumber(0),
        avaiableReward: (sv || {}).avaiableReward || new BigNumber(0)
      }
      const newFarmRows = [...farmRows]
      // if (newFarmRows[newFarmRows.length - 1].length === 3) {
      //   newFarmRows.push([farmWithStakedValue])
      // } else {
      //   newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      // }
      newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      return newFarmRows
    },
    [[]],
  )

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : farms.filter(farm =>
      farm.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  const onChange = (event: any, data: any) => {
    setFarmsValue(data.value)
  }

  const inputProps = {
    placeholder: 'Search farm',
    value: farmsValue,
    onChange: onChange
  };

  const handleSearchFarm = (e:any) => {
    const stake_token = Object.values(farms).filter((farm) => farm.addLiquidityLink === '')
    if (e.target.value === '') {
      return setFarmDisplay(stake_token)
    }
    setSearchText(e.target.value)
    let searchResult = stake_token.filter((farm) => farm.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFarmDisplay(searchResult)
  }

  return (
    <FarmPageWrapper>
      <div className="actions-area">
        <div className='search-area'>
          <div className="label">Search</div>
          <input 
            type='text'
            placeholder='Search farm'
            onChange={handleSearchFarm}
          />
        </div>
      </div>
      <CardItem>
        <StyledCards>
          {!!rows[0].length ? (
            rows.map((farmRow, i) => (
              <StyledRow key={i}>
                {farmRow.map((farm, j) => (
                  <>
                    <PoolCard farm={farm} />
                  </>
                ))}
              </StyledRow>
            ))
          ) : (
            <StyledLoadingWrapper>
              <Loader text="Loading ..." />
            </StyledLoadingWrapper>
          )}
        </StyledCards>
      </CardItem>
    </FarmPageWrapper>
  )
}

const FarmPageWrapper = styled.div`
  .actions-area {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .search-area {
      .label {
        margin-left: 20px;
        color: #5B5A99;
        font-family: SF-500;
        font-size: 14px;
        font-weight: 500;
      }
      input {
        background: #BCB7F5;
        box-shadow: inset 1px 1px 1px rgba(35, 35, 35, 0.3);
        border-radius: 12px;
        color: #5B5A99;
        font-family: SF-500;
        font-size: 14px;
        font-weight: 500;
        padding: 5px 20px;
        &:focus {
          outline: none;
        }
      }
    }
  }
`

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const PoolCard: React.FC<FarmCardProps> = ({ farm }) => {
  let poolActive = usePoolActive(farm.pid)
  const sushi = useSushi()
  const [newReward, setNewRewad] = useState<BigNumber>()
  const [isShowDetail, setIsShowDetail] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const supply = await getNewRewardPerBlock(sushi, farm.pid, farm.version)
      setNewRewad(supply)
    }
    if (sushi && poolActive) {
      fetchData()
    }
  }, [sushi, setNewRewad, poolActive])

  const renderer = (countdownProps: CountdownRenderProps) => {
    var { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    // hours = days * 24 + hours
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {days}D:{hours}H:{minutes}M
      </span>
    )
  }

  const startTime = START_NEW_POOL_AT
  let apy:any = newReward && farm.poolWeight && farm.rewardTokenPrice && farm.usdValue ?
    parseFloat(farm.rewardTokenPrice
      .times(NUMBER_BLOCKS_PER_YEAR)
      .times(newReward.div(new BigNumber(10).pow(farm.decimalsReward)))
      .times(farm.poolWeight)
      .div(farm.usdValue)
      .times(100)
      .toFixed(2)) : 0
  const CardWrap = farm.old ? CardGray : Card
  const oldTile = farm.old ? 'OLD' : ''

  let earnings = useEarnings(farm.pid, farm.version)
  let earned = getBalanceNumber(earnings, farm.decimalsReward)
  // console.error('farm', farm);
  const allowance = useAllowance(farm.lpContract, farm.version)
  const { onApprove } = useApprove(farm.lpContract, farm.version)
  const handleApprove = useCallback(async () => {
    try {
      const txHash = await onApprove()
    } catch (e) {
      console.log(e)
    }
  }, [onApprove])
  const tokenBalance = useTokenBalance(farm.lpContract.options.address)
  const stakedBalance = useStakedBalance(farm.pid, farm.version)
  const { onStake } = useStake(farm.pid, farm.version, farm.decimals)
  const { onUnstake } = useUnstake(farm.pid, farm.version, farm.decimals)
  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={farm.lpToken.toUpperCase()}
      decimals={farm.decimals}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={farm.lpToken.toUpperCase()}
      decimals={farm.decimals}
    />,
  )

  const { onReward } = useReward(farm.pid, farm.version)
  const handleHarvest = useCallback(async () => {
    try {
      const txHash = await onReward()
    } catch (error) {
      console.log(error)
    }
  }, [onReward])

  if (isMobile) {
    return (
      <div></div>
    )
  }
  return (
    <>
    <FarmDetail 
      onClick={() => setIsShowDetail(!isShowDetail)}
    >
      <div className='farm-icon' style={{display: 'flex', alignItems: 'center'}}>
        <img style={{height:'32px', borderRadius: '50%'}} src={farm.icon} alt='token'/>
        <img style={{height:'19px', borderRadius: '50%'}} src={farm.icon2} alt='token2'/>
      </div>
      <div className='farm-name'>
        {farm.name}
      </div>
      <div className='farm-title farm-earned'>
        <div className='subtitle'>Earned</div>
        <div className='value'><Value value={earned}/></div>
      </div>
      <div className='farm-title farm-APR'>
        <div className='subtitle'>APR</div>
        <div className='value'>{apy ? `${apy.toLocaleString('en-US')}%` : '~'}</div>
      </div>
      <div className='farm-title farm-liquidity'>
        <div className='subtitle'>Liquidity</div>
        <div className='value'>
          {farm.usdValue &&
            <>${parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')}</>
          }
        </div>
      </div>
      <div className='farm-title farm-mutiplier'>
        <div className='subtitle'>Mutiplier</div>
        <div className='value'>{newReward ? `${getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)}x` : '~'}</div>
      </div>
      <div className='farm-detail'>
        <div className='text'>Detail</div>
        <img src={isShowDetail ? CloseIcon : OpenIcon} alt=''/>
      </div>
    </FarmDetail>
    {isShowDetail && 
      <MoreDetails>
        <div className='link-area'>
          <div className='item'>
            <a href='#'>Get token info</a>
          </div>
          <div className='item'>
            <a 
              href={`https://bscscan.com/address/${farm.lpTokenAddress}`}
              target="_blank"
            >View contract</a>
          </div>
        </div>
        <div className='enable-farm'>
          {
            !allowance.toNumber() ?
            <div className='btn' onClick={handleApprove} >Enable Farm</div> :
            <div>
              <div className='btn approved' onClick={onPresentDeposit}>Stake token</div>
              <div className='unstake' onClick={onPresentWithdraw}>Unstake</div>
            </div>
          }
        </div>
        <div className='harvest'>
          <div className='content'>
            <div className='label'><span>{farm.rewardToken.symbol}</span> Earned</div>
            <div className='value'><Value value={earned}/></div>
          </div>
          <div className='btn' onClick={handleHarvest}>Harvest</div>
        </div>
      </MoreDetails>
    }
    </>
  )
}

const MoreDetails = styled.div`
  padding: 15px 20px;
  background: rgba(245, 245, 250, 0.75);;
  width: 100%;
  z-index: 1;
  display: grid;
  grid-template-columns: 40% 30% 30%;
  .link-area {
    display: grid;
    .item {
      display: flex;
      align-items: center;
      a {
        font-family: SF-500;
        font-size: 12px;
        font-weight: 500;
        line-height: 23px;
        color: #50E3C2;
        cursor: pointer;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .enable-farm {
    display: flex;
    align-items: center;
    .btn {
      background: #50E2C2;
      box-shadow: 1px 1px 0px rgba(170, 170, 204, 0.5);
      border-radius: 10px;
      color: #5B5A99;
      font-family: SF-900;
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
      width: 180px;
      text-align: center;
      padding: 0 40px;
      cursor: pointer;
      &.approved {
        border: 1px solid #50E2C2;
        background: inherit;
      }
    }
    .unstake {
      text-align: center;
      color: #5B5A99;
      font-family: SF-900;
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .harvest {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #59588D;
    border-radius: 15px;
    .content {
      .label {
        color: #5B5A99;
        font-family: SF-900;
        font-size: 12px;
        font-weight: 600;
        line-height: 20px;
        span {
          color: #50E3C2;
        }
      }
      .value {
        color: #5B5A99;
        font-family: SF-900;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .btn {
      background: #50E2C2;
      box-shadow: 1px 1px 0px rgba(170, 170, 204, 0.5);
      border-radius: 10px;
      color: #5B5A99;
      font-family: SF-900;
      font-size: 14px;
      font-weight: 600;
      line-height: 30px;
      text-align: center;
      padding: 0 20px;
      cursor: pointer;
    }
  }
`

const FarmDetail = styled.div`
  padding: 15px 20px;
  width: 100%;
  background: #FFF;
  z-index: 1;
  display: grid;
  column-gap: 15px;
  grid-template-columns: 60px 200px 100px 100px 150px 100px 100px;
  border-bottom: 1px solid #DADADA;
  cursor: pointer;
  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 0;
  }
  .farm-name {
    display: flex;
    align-items: center;
    color: #5B5A99;
    font-size: 16px;
    line-height: 19px;
    font-family: SF-900;
    font-weight: 600;
  }
  .farm-title {
    .subtitle {
      color: #5B5A99;
      font-size: 10px;
      line-height: 12px;
      font-family: SF-400;
      font-weight: 400;
    }
    .value {
      color: #5B5A99;
      font-size: 14px;
      line-height: 17px;
      font-family: SF-500;
      font-weight: 600;
    }
    &.farm-earned{
      .value {
        font-weight: 400;
      }
    }
    &.farm-APR {
      .value {
        color: #50E3C2;
      }
    }
  }
  .farm-detail {
    display: flex;
    align-items: center;
    cursor: pointer;
    .text {
      font-family: SF-500;
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      padding-right: 30px;
      color: #89DBC4;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const StyledCards = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const NumberClock = styled.span`
  background: #40444F;
  border-radius: 10px;
  padding: 5px 10px;
`

const CardItem = styled.div`
  width: 940px;
  margin: 20px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

export default PoolsCard