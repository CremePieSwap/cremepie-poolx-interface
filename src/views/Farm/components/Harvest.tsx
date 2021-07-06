import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useEarnings from '../../../hooks/useEarnings'
import usePercentLockReward from '../../../hooks/usePercentLockReward'
import useReward from '../../../hooks/useReward'
import usePoolInfo from '../../../hooks/usePoolInfo'
import { getBalanceNumber } from '../../../utils/formatBalance'

interface HarvestProps {
  pid: number
  version: string,
  decimalsReward: number
}

const Harvest: React.FC<HarvestProps> = ({ pid, version, decimalsReward }) => {
  let earnings = useEarnings(pid, version)
  let percentLockReward = usePercentLockReward(pid, version)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid, version)
  const poolInfo:any = usePoolInfo(pid, version)
  let reward = getBalanceNumber(earnings, decimalsReward)
  percentLockReward = percentLockReward / 100

  let symbol = poolInfo && poolInfo.rewardToken && poolInfo.rewardToken.symbol
  let toFixed = symbol == 'ZD' ? 8 : 3

  let lockReward = reward * percentLockReward
  let avaiableReward = reward * (1 - percentLockReward)

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <StyledValue>
              <Label text={'Reward ' + symbol} />
              <br/>
              <Value value={getBalanceNumber(earnings, decimalsReward)}/>
              <br/>
              {earnings &&
                <div style={{marginTop: 0}}>
                  <span style={{color: '#fff'}}>Available: {avaiableReward && avaiableReward.toFixed(toFixed)} <br /> Locked: {lockReward && lockReward.toFixed(toFixed)}
                  </span>
                </div>
              }
            </StyledValue>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? 'Collecting...' : 'Harvest'}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledValue = styled.div`
  text-align: center;
  span{
    color: ${(props) => props.theme.color.white};
  }
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
