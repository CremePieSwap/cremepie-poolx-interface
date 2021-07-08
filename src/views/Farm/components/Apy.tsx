import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { StringLiteral } from 'typescript'
import { useWallet } from 'use-wallet'
import useSushi from '../../../hooks/useSushi'
import { BigNumber } from '../../../sushi'
import { getLPTokenStaked, getNewRewardPerBlock } from '../../../sushi/utils'
import { getContract } from '../../../utils/erc20'
import { provider } from 'web3-core'
import { getBalanceNumber } from '../../../utils/formatBalance'
import useBlock from '../../../hooks/useBlock'
import useStakedValue from '../../../hooks/useStakedValue'
import { NUMBER_BLOCKS_PER_YEAR } from '../../../sushi/lib/constants'
import usePrice from '../../../hooks/usePrice'
import useNewReward from '../../../hooks/useNewReward'
import useStakedBalance from '../../../hooks/useStakedBalance'

interface ApyProps {
    pid: number
    lpTokenAddress: string
    symbolShort: string
    tokenSymbol: string
    token2Symbol: string,
    rewardSymbolToken: string,
    project: string,
    version: string
    stake: boolean,
    decimals: number,
    decimalsReward: number
}

const Apy: React.FC<ApyProps> = ({ pid, lpTokenAddress, symbolShort, tokenSymbol, token2Symbol, rewardSymbolToken, project, version, stake, decimals, decimalsReward }) => {
    const sushi = useSushi()
    const { ethereum } = useWallet()
    const tokenPrice = usePrice(project)
    const stakedValue = useStakedValue(pid, project, version)
    const stakedBalance = useStakedBalance(pid, version)

    const lpContract = useMemo(() => {
      return getContract(ethereum as provider, lpTokenAddress)
    }, [ethereum, lpTokenAddress])

    const newReward = useNewReward(pid, version)

    const [totalStake, setTotalStake] = useState<BigNumber>()

    useEffect(() => {
        async function fetchData() {
            const data = await getLPTokenStaked(sushi, lpContract, version)
            setTotalStake(data)
        }
        if (sushi && lpContract) {
            fetchData()
        }
    }, [sushi, setTotalStake, lpContract])

    let apy:any = newReward && stakedValue && stakedValue.usdValue && stakedValue.rewardTokenPrice && stakedValue.poolWeight ?
      parseFloat(stakedValue.rewardTokenPrice
          .times(NUMBER_BLOCKS_PER_YEAR)
          .times(newReward.div(new BigNumber(10).pow(decimalsReward)))
          .times(stakedValue.poolWeight)
          .div(stakedValue.usdValue)
          .times(100)
          .toFixed(2)) : 0

    let toFixed = rewardSymbolToken == 'ZD' ? 6 : 2
    return (
        <StyledApy>
            <StyledBox className="col-3">
                <StyledLabel>APY</StyledLabel>
                <StyledContent>{apy ? `${apy.toLocaleString('en-US')}%` : '~'}</StyledContent>
            </StyledBox>
            {!stake && <StyledBox className="col-7">
                <StyledLabel>Total Staked LP Token</StyledLabel>
                <StyledContent>
                    {stakedValue && stakedValue.tokenAmount ? (stakedValue.tokenAmount as any).toFixed(2).toLocaleString('en-US'): '~'} <span style={{fontSize: 10}}>{tokenSymbol}</span>
                    &nbsp; + &nbsp;
                    {stakedValue && stakedValue.token2Amount ? (stakedValue.token2Amount as any).toFixed(2).toLocaleString('en-US'): '~'} <span style={{fontSize: 10}}>{token2Symbol}</span></StyledContent>
                <StyledEquility>{totalStake  ? getBalanceNumber(totalStake, decimalsReward) : '~'} <span style={{fontSize: 10}}>{symbolShort} LP</span></StyledEquility>
            </StyledBox>}
            {stake && <StyledBox className="col-7">
                <StyledLabel>Total Staked Token</StyledLabel>
                <StyledContent>{stakedValue && stakedValue.totalPoolSupply ? getBalanceNumber(stakedValue.totalPoolSupply, decimals).toFixed(toFixed) : '~'} {tokenSymbol}</StyledContent>
            </StyledBox>}
            <StyledBox className="col-5">
                <StyledLabel>Reward per block</StyledLabel>
                <StyledContent>{newReward ? getBalanceNumber(newReward, decimalsReward).toFixed(toFixed) : '~'} {rewardSymbolToken}</StyledContent>
                {/*<StyledEquility>≈ {stakedValue && newReward && tokenPrice && tokenPrice.times(newReward).div(10 ** 18).toFixed(2)} USD</StyledEquility>*/}
                {stake && <StyledEquility>Reward Pool: {stakedValue && stakedValue.avaiableReward ? getBalanceNumber(stakedValue.avaiableReward, decimalsReward).toFixed(toFixed) : '~'}</StyledEquility>}
            </StyledBox>
        </StyledApy>
    )
}
const StyledApy = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: ${(props) => props.theme.spacing[3]}px;
    border: 2px solid ${(props) => props.theme.color.grey[200]};
    border-radius: 12px;
    @media (max-width: 767px) {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: block;
    }
`
const StyledBox = styled.div`
    &.col-2 {
        width: 20%;
    }
    &.col-4 {
        width: 40%;
    }
    &.col-8 {
        width: 60%;
    }
`
const StyledLabel = styled.span`
    color: ${(props) => props.theme.color.primary.main};
    font-size: 14px;
    display: block;
`

const StyledContent = styled.span`
    color: ${(props) => props.theme.color.white};
    font-weight: bold;
    display: block;
    padding: 10px 0;
    @media (max-width: 767px) {
        font-size: 14px;
    }
`

const StyledEquility = styled.span`
    color: ${(props) => props.theme.color.grey[100]};
    font-size: 14px;
    display: block;
    @media (max-width: 767px) {
        font-size: 13px;
    }
`

export default Apy
