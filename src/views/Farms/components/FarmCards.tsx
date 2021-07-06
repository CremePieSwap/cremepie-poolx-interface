import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardGray from '../../../components/CardGray'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import Status from '../../../components/Status'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import usePoolActive from '../../../hooks/usePoolActive'
import useRewardBalance from '../../../hooks/useRewardBalance'
import useSushi from '../../../hooks/useSushi'
import { NUMBER_BLOCKS_PER_YEAR, START_NEW_POOL_AT, PROJECTS, CONSTANT_APY, VERSIONS } from '../../../sushi/lib/constants'
import { getEarned, getNewRewardPerBlock } from '../../../sushi/utils'
import { bnToDec } from '../../../utils'
import { getBalanceNumber, getDisplayBalance } from '../../../utils/formatBalance'
import ReactTooltip from 'react-tooltip'
import Autosuggest from 'react-autosuggest'

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

const FarmCards: React.FC = () => {
  const [farms] = useFarms()
  const [farmsValue, setFarmsValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const stakedValue = useAllStakedValue()
  const zdcashRewardBalance = useRewardBalance('ZDCASH', VERSIONS.V1)
  const xpoRewardBalance = useRewardBalance('XPO', VERSIONS.V1)
  const twinRewardBalance = useRewardBalance('TWIN', VERSIONS.V1)

  const rows = farms.reduce<FarmWithStakedValue[][]>(
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

  const renderer = (countdownProps: CountdownRenderProps) => {
    var { days, hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    // hours = days * 24 + hours
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%', marginTop: '10px' }}>
        <NumberClock>{days}</NumberClock> D : <NumberClock>{hours}</NumberClock> H : <NumberClock>{minutes}</NumberClock> M
      </span>
    )
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : farms.filter(farm =>
      farm.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion: any) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion: any) => (
    <div className="suggestions-container">
      <span className="suggestions-image">
        <img width="22" src={suggestion.icon} /> <img width="22" src={suggestion.icon2} />
      </span>
      <StyledLink to={`/farms/${suggestion.symbol}`}>
        <span className="suggestions-name"> {suggestion.name} (reward {suggestion.rewardToken.symbol})</span>
      </StyledLink>
    </div>
  );

  const onSuggestionsFetchRequested = (data: any) => {
    setFarmsValue(data.value)
    const sugs = getSuggestions(data.value)
    setSuggestions(sugs)
  }

  const onSuggestionsClearRequested = () => {
    setFarmsValue('')
  }

  const onChange = (event: any, data: any) => {
    setFarmsValue(data.value)
  }

  const inputProps = {
    placeholder: 'Search your pool ex: ZD-BNB',
    value: farmsValue,
    onChange: onChange
  };

  return (
    <div>
      <div className="react-autosuggest-wrap">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
      {Object.entries(PROJECTS).map(([key, project]) => {
        let rewardBalance = zdcashRewardBalance

        if (key === 'XPO') {
          rewardBalance = xpoRewardBalance
        }
        if (key === 'TWIN') {
          rewardBalance = twinRewardBalance
        }

        let keys = ['BARMY', 'BSCX', 'MLTP', 'CORGIB']
        let isMultipleStake = keys.includes(key)

        return (<CardItem>
          <StyledSpacer />
          <CardHeader>
              <CardHeaderLeft>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={project.logo} height="35" style={{ marginRight: '10px' }} /> <ProjectName>{project.name}</ProjectName>
                </div>
                <StyledSpacer />
                <Status status={project.status} />
                <CardItemDescription>
                  {project.description}
                </CardItemDescription>
              </CardHeaderLeft>
              <CardHeaderRight>
                {!isMultipleStake && <CardTextShow>
                  <span>Reward Pool:</span> <span><b>{getDisplayBalance(new BigNumber(rewardBalance))} {key}</b></span>
                </CardTextShow>}
                {isMultipleStake && <CardTextShow>
                  <span>Reward Pool:</span> <span>~</span>
                </CardTextShow>}
                {/*<CardCountDown>
                  Time until farming ends <br /><br /> <Countdown
                  date={new Date(project.timeEnded)}
                  renderer={renderer}
                />
                </CardCountDown>*/}
              </CardHeaderRight>
          </CardHeader>
          <StyledCards>
            {!!rows[0].length ? (
              rows.map((farmRow, i) => (
                <StyledRow key={i}>
                  {farmRow.map((farm, j) => (<>
                    {farm.project === key && <React.Fragment key={j}>
                      <FarmCard farm={farm} />
                    </React.Fragment>}</>
                  ))}
                </StyledRow>
              ))
            ) : (
              <StyledLoadingWrapper>
                <Loader text="Cooking the rice ..." />
              </StyledLoadingWrapper>
            )}
          </StyledCards>
        </CardItem>
      )})}
    </div>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  let poolActive = usePoolActive(farm.pid)
  const sushi = useSushi()
  const [newReward, setNewRewad] = useState<BigNumber>()

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

  return (
    <StyledCardWrapper>
      {farm.tokenSymbol === 'BSCX' && <StyledCardAccent />}
      <CardWrap>
        <CardContent>
          <StyledContent>
            {farm.stake && <div style={{display: 'flex'}}>
              <CardIcon><img src={farm.icon} alt="" height="60"/></CardIcon>
              <span>&nbsp;&nbsp;</span>
              <CardIcon><img src={farm.icon2} alt="" height="60"/></CardIcon>
            </div>}
            {!farm.stake && <div style={{display: 'flex'}}>
              <CardIcon><img src={farm.icon} alt="" height="60"/></CardIcon>
              <span>&nbsp;&nbsp;</span>
              <CardIcon><img src={farm.icon2} alt=""  height="60"/></CardIcon>
            </div>}
            <StyledTitle>{farm.name} {oldTile}</StyledTitle>
            <StyledDetails>
              <StyledDetail>{farm.description}</StyledDetail>
            </StyledDetails>
            <Spacer />
            <Button
              disabled={!poolActive}
              text={poolActive ? 'Select' : undefined}
              to={`/farms/${farm.id}`}
            >
              {!poolActive && (
                <Countdown
                  date={new Date(startTime * 1000)}
                  renderer={renderer}
                />
              )}
            </Button>
            <br/>
            <StyledInsight>
              <span>Total Locked Value</span>
              <span>
                {farm.usdValue &&
                  <><b>{parseFloat(farm.usdValue.toFixed(0)).toLocaleString('en-US')} USD</b></>

                }
              </span>
            </StyledInsight>
            {farm.isHot && <>
              <StyledInsight>
                <span>Reward</span>
                <span>
                  {newReward && farm.rewardToken.symbol == 'ZD' &&
                    <><b>{getBalanceNumber(newReward, farm.decimalsReward).toFixed(6)} {farm.rewardToken.symbol}</b> / Block</>
                  }
                  {newReward && farm.rewardToken.symbol != 'ZD' &&
                    <><b>{getBalanceNumber(newReward, farm.decimalsReward).toFixed(2)} {farm.rewardToken.symbol}</b> / Block</>
                  }
                </span>
              </StyledInsight>
              <StyledInsight>
                <span data-tip={`APY is high. It is real. But please note that 80% of the farmed coins will be locked for 1 year. The locked coins will be released after the 1 year block by block. This solution is to prevent dumping the token and protect the tokenomics.`}>APY</span>
                <span style={{fontWeight: 'bold', color: '#4caf50'}}>
                  {apy ? `${apy.toLocaleString('en-US')}%` : '~'}
                </span>
              </StyledInsight>
            </>
            }
          </StyledContent>
        </CardContent>
      </CardWrap>
      <ReactTooltip place="right" className="tooltip-apy"/>
    </StyledCardWrapper>
  )
}

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

const CardHeader = styled.div`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;

  @media (max-width: 768px) {
    display: block;
    padding: 0px;
  }
`

const CardHeaderLeft = styled.div`

`

const CardTextShow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #CECDBA;
  font-weight: 500;
  padding: 5px 0px;
`

const CardHeaderRight = styled.div`
  min-width: 300px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

const CardCountDown = styled.div`
  text-align: center;
  color: #CECDBA;
  font-size: 14px;
  margin-top: 10px;
`

const CardStatus = styled.div`
  border: 1px solid #2FF37D;
  box-sizing: border-box;
  border-radius: 10px;
  color: #2FF37D;
  width: 100px;
  text-align: center;
  text-transform: capitalize;
`

const CardItemDescription = styled.div`
  max-width: 660px;
  color: #5aa62b;
  font-size: 14px;
  margin: 15px 0px;
  font-weight: 500;
`

const CardItem = styled.div`
  width: 1100px;
  border: 1px solid #252E44;
  border-radius: 30px;
  margin: 30px 0px;
  padding: 0px 30px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ProjectName = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #CECDBA;
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

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin: 20px 30px;

  @media (max-width: 768px) {
    margin: 10px 6px;
  }
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.white};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledTopIcon = styled.div`
  // position: relative;
`

const StyledHotIcon = styled.div`
  position: absolute;
  background-color: gray;
  padding: 8px 40px 8px;
  top: 12px;
  left: -40px;
  font-weight: bold;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #fff;
  font-size: 9px;
`

const StyledNewIcon = styled.div`
  position: absolute;
  padding: 8px 40px 8px;
  top: 12px;
  left: -40px;
  background-color: ${(props) => props.theme.color.primary.main};
  font-weight: bold;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  color: #fff;
  font-size: 9px;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
  min-height: 38px;
`

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.grey[100]};
  font-size: 14px;
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: transparent;
  color: #9E9E9E;
  width: 100%;
  line-height: 25px;
  font-size: 13px;
  border: 0px solid #e6dcd5;
  text-align: center;
`

export default FarmCards
