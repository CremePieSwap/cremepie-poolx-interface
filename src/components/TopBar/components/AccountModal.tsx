import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Label from '../../Label'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import Value from '../../Value'
import qrCode from '../../../assets/img/qr-code.png'
import IconView from '../../../assets/img/icon-view.svg'
import useAllStakedFarms from '../../../hooks/useAllStakedFarms'
import { Link, useHistory } from 'react-router-dom'
import useCanUnlockAmount from '../../../hooks/useCanUnlockAmount'
import useLockBalance from '../../../hooks/useLockBalance'
import useUnlock from '../../../hooks/useUnlock'
import useTotalLocked from '../../../hooks/useTotalLocked'
import useTokenLocked from '../../../hooks/useTokenLocked'
import useToolsLocked from '../../../hooks/useToolsLocked'
import useReferralAmountLv1 from '../../../hooks/useReferralAmountLv1'
import useReferralAmountLv2 from '../../../hooks/useReferralAmountLv2'
import useStakeBSCX from '../../../hooks/useStakeBSCX'
import BigNumber from 'bignumber.js'
import { PROJECTS, ZSEED_TOKEN, ZD_TOKEN } from '../../../sushi/lib/constants'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
    localStorage.useWalletConnectStatus = 'disconnected'
    localStorage.useWalletConnectType = ''
    localStorage.removeItem('walletconnect')
  }, [onDismiss])

  const sushi = useSushi()
  // const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  // const canUnlock = useCanUnlockAmount()
  // const lockAmount = useLockBalance()
  const totalUserLocked = useTokenLocked()
  const stakedFarms = useAllStakedFarms();
  const history = useHistory();
  // const referAmountZSEEDLv1 = useReferralAmountLv1(ZSEED_TOKEN);
  // const referAmountZSEEDLv2 = useReferralAmountLv2(ZSEED_TOKEN);
  // const referAmountZDLv1 = useReferralAmountLv1(ZD_TOKEN);
  // const referAmountZDLv2 = useReferralAmountLv2(ZD_TOKEN);
  const stakeLPBalance = useStakeBSCX()
  const totalRewardLocked = useTotalLocked()
  const toolsRewardLocked = useToolsLocked()

  const [pendingTx, setPendingTx] = useState(false)
  const { onUnlock } = useUnlock()
  let cacheValue = localStorage.getItem('CACHE_usePrice_value')
  let prices = JSON.parse(cacheValue)

  const getAmountInUSD = (amount: any, project: string) => {
      let price = 0
      switch (project) {
          case "ZD":
              price = prices.zd
              break;
          case "ZDCASH":
              price = prices.zdcash
              break;
          case "TOOLS":
              price = prices.tools
              break;
          case "ZSEED":
              price = prices.zseed
              break;
          case "BSCX":
              price = prices.bscx
              break;
      }

      let usdAmount = amount.times(price)

      return usdAmount
  }

  let totalAmountInUsd = new BigNumber(0)
  let amountInUsdBSCX = getAmountInUSD(totalUserLocked, 'BSCX')
  totalAmountInUsd = totalAmountInUsd.plus(amountInUsdBSCX)

  return (
      <ModalLarge>
        <Modal>
            <ModalContent>
                <Box>
                    <Heading3>
                        My Wallet
                    </Heading3>
                    <BoxList>
                        <Row>
                            <Col className="col-12">
                                <BoxItem>
                                    <TextMin>
                                        Address
                                    </TextMin>
                                    <TextMedium>
                                        <a style={{ color: '#5B5A99', textDecoration: 'none' }}
                                        target="__blank"
                                        href={`https://bscscan.com/address/${account}`}>{account}</a>
                                    </TextMedium>
                                </BoxItem>
                                <BoxItem>
                                    <TextMin>
                                        BSCX-BUSD LP Balance
                                    </TextMin>
                                    <TextMedium>
                                       <div>{parseFloat(getBalanceNumber(stakeLPBalance).toFixed(4)).toLocaleString('en-US')} BSCX-BUSD LP</div>
                                    </TextMedium>
                                </BoxItem>
                                <BoxItem>
                                    <Row>
                                        <Col className="col-12">
                                            <TextMin>
                                                BSCX Locked
                                            </TextMin>
                                            <TextMedium>
                                                {totalUserLocked ? `${parseFloat(getBalanceNumber(totalUserLocked).toFixed(2)).toLocaleString('en-US')} BSCX` : '~'}
                                            </TextMedium>
                                        </Col>
                                        <ReleaseButton
                                            disabled={true}
                                        >{'Release'}</ReleaseButton>
                                    </Row>
                                    <Spacer size="sm" />
                                    <TextMin>
                                        Reward Tokens Locked
                                    </TextMin>
                                    {Object.entries(totalRewardLocked).map(([key, reward]) => {
                                        let rewardN = Number(reward)
                                        let amount = new BigNumber(rewardN || 0)
                                        let amountTools = new BigNumber(toolsRewardLocked || 0)
                                        let toFixed = key == 'ZD' ? 8 : 3
                                        let amountInUsd = getAmountInUSD(amount, key)
                                        totalAmountInUsd = totalAmountInUsd.plus(amountInUsd)

                                        if (key === 'TOOLS') {
                                            amount = amount.plus(amountTools)
                                        }

                                        return (
                                        <Row>
                                            <Col className="col-12">
                                                <TextMedium>
                                                    {amount ? `${parseFloat(getBalanceNumber(amount).toFixed(toFixed)).toLocaleString('en-US')} ${key}` : '~'}
                                                </TextMedium>
                                            </Col>
                                            <ReleaseButton
                                                disabled={true}
                                            >{'Release'}</ReleaseButton>
                                        </Row>
                                    )})}
                                    <BoxItem>
                                        <TextMin>
                                            Total Value Locked
                                        </TextMin>
                                        <TextMedium>
                                           <b>${totalAmountInUsd ? `${parseFloat(getBalanceNumber(totalAmountInUsd).toFixed(2)).toLocaleString('en-US')}` : '~'}</b>
                                        </TextMedium>
                                    </BoxItem>
                                </BoxItem>

                                {/*<BoxItem>
                                  <Row>
                                    <Col className="col-6">
                                        <TextMin>
                                            Direct Referral
                                        </TextMin>
                                        <TextMedium>
                                           <div>{parseFloat(getBalanceNumber(referAmountZSEEDLv1).toFixed(4)).toLocaleString('en-US')} zSEED</div>
                                           <div>{parseFloat(getBalanceNumber(referAmountZDLv1).toFixed(4)).toLocaleString('en-US')} ZD</div>
                                        </TextMedium>
                                    </Col>
                                    <Col className="col-6">
                                        <TextMin>
                                            2-tier Referral
                                        </TextMin>
                                        <TextMedium>
                                           <div>{parseFloat(getBalanceNumber(referAmountZSEEDLv2).toFixed(4)).toLocaleString('en-US')} zSEED</div>
                                           <div>{parseFloat(getBalanceNumber(referAmountZDLv2).toFixed(8)).toLocaleString('en-US')} ZD</div>
                                        </TextMedium>
                                    </Col>
                                  </Row>
                                </BoxItem>*/}
                                <BoxItem>


                                {/*Object.entries(PROJECTS).map(([key, project]) => (
                                    <Row>
                                        <Col className="col-5">
                                            <TextMin>
                                                Balance <img src={IconView} alt="View"/>
                                            </TextMin>
                                            <TextMedium>
                                                <strong>{parseFloat(getBalanceNumber(sushiBalance).toFixed(4)).toLocaleString('en-US')}</strong>
                                                <span>{key}</span>
                                            </TextMedium>
                                        </Col>
                                        <Col className="col-7">
                                            <TextMin>
                                                Released/Locked
                                            </TextMin>
                                            {!totalUserLocked.isGreaterThan(0) &&
                                                <TextMedium>
                                                    <div><i>no lock</i></div>
                                                </TextMedium>
                                            }
                                            {totalUserLocked.isGreaterThan(0) &&
                                                <TextMedium>
                                                    <strong>{parseFloat(getBalanceNumber(canUnlock).toFixed(4)).toLocaleString('en-US')}</strong>
                                                    <span>/{parseFloat(getBalanceNumber(totalUserLocked).toFixed(4)).toLocaleString('en-US')}</span>
                                                    <ReleaseButton
                                                        disabled={!canUnlock.isGreaterThan(0) || pendingTx}
                                                        onClick={async () => {
                                                            setPendingTx(true)
                                                            await onUnlock()
                                                            setPendingTx(false)
                                                        }}
                                                    >{pendingTx ? 'Releasing' : 'Release'}</ReleaseButton>
                                                </TextMedium>
                                            }
                                        </Col>
                                    </Row>
                                ))*/}
                                </BoxItem>
                            </Col>
                            {/* <Col className="col-4 text-right">
                                <img src={qrCode} alt="QR Code"/>
                            </Col> */}
                        </Row>
                    </BoxList>
                </Box>
                {stakedFarms && stakedFarms.length > 0 &&
                    <Box className="mt-3">
                        <Heading3>
                            My Fields
                        </Heading3>
                        <BoxList className="scr-auto">
                            {stakedFarms.map(e =>
                                <BoxItem key={e.id} onClick={() => {
                                    history.push(`/farms/${e.id}`)
                                    onDismiss()
                                }} style={{cursor: 'pointer'}}>
                                    <RowHighLight>
                                        <Col className="col-8 align-center">
                                            <BoxFlex>
                                                <div style={{display: 'flex', marginRight: 10}}>
                                                    <img src={e.icon} alt="BSCX" height={30} style={{position: 'relative', zIndex: 2}}/>
                                                    <img src={e.icon2} alt="BSCX" height={30} style={{position: 'relative', zIndex: 1, marginLeft: -10}}/>
                                                </div>
                                                <div>
                                                    <TextMedium>
                                                        {e.name}
                                                    </TextMedium>
                                                    <TextMin>
                                                        {parseFloat(getBalanceNumber(e.tokenAmount).toFixed(10)).toLocaleString('en-US')} {e.symbolShort}
                                                    </TextMin>
                                                </div>
                                            </BoxFlex>
                                        </Col>
                                        <Col className="col-4 text-green align-center justify-right font-size-14">
                                            + {parseFloat(getBalanceNumber(e.pendingReward).toFixed(10)).toLocaleString('en-US')} {e.rewardSymbolToken}
                                        </Col>
                                    </RowHighLight>
                                </BoxItem>
                            )}
                        </BoxList>
                    </Box>
                }
            </ModalContent>
            <ModalActions>
                <Row className="my-wallet-actions">
                    <Col className="col-6 align-center">
                        <Button
                            onClick={handleSignOutClick}
                            text="Sign out"
                            variant="secondary"
                        />
                    </Col>
                    <Col className="col-6 align-center">
                        <Button
                            onClick={onDismiss}
                            text="Close" />
                    </Col>
                </Row>
            </ModalActions>
        </Modal>
    </ModalLarge>
  )
}

const StyledBalance = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

const ReleaseButton = styled.button`
    color: #5d533f;
    background: #fabc450d;
    border: 1px solid #5d533f;
    font-weight: bold;
    cursor: no-drop;
    margin-right: 10px;
    border-radius: 2px;
    padding: 2px 10px;
    transition: 0.3s all;
    height: 20px;
    &:hover {
        background: #fabc450d
    }
`

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-left: -15px;
    margin-right: -15px;
    &.align-center {
        align-items: center;
    }
`

const Col = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    &.text-green {
        color: #00E8B5;
        font-weight: 600;
    }
    &.align-center {
        display: flex;
        align-items: center;
    }
    &.justify-right {
        display: flex;
        justify-content: flex-end;
    }
    &.font-size-14 {
        font-size: 12px;
    }
    &.text-right {
        text-align: right;
    }
    &.text-center {
        text-align: center;
    }
    &.col-12 {
        width: 100%;
    }
    &.col-11 {
        width: 91.6%;
    }
    &.col-10 {
        width: 83.3%;
    }
    &.col-9 {
        width: 75%;
    }
    &.col-8 {
        width: 66.6%;
    }
    &.col-8 {
        width: 66.6%;
    }
    &.col-7 {
        width: 58.3%;
    }
    &.col-6 {
        width: 50%;
    }
    &.col-5 {
        width: 41.6%;
    }
    &.col-4 {
        width: 33.3%;
    }
    &.col-3 {
        width: 25%;
    }
    &.col-2 {
        width: 16.6%;
    }
`

const Heading3 = styled.div`
    background: #50E2C2;
    font-size: 16px;
    font-weight: 800;
    color: #5B5A99;
    padding: 12px 20px;
    border-radius: 16px 16px 0 0;
`

const Box = styled.div`
    background: #F5F5FA;
    border-radius: 16px;
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    &.mt-3 {
        margin-top: 3px;
    }
`

const BoxList = styled.div`
    padding: 20px;
    &.scr-auto {
        height: 150px;
        overflow: auto;
    }
    img {
        max-width: 100%;
    }
`

const BoxItem = styled.div`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0px;
    }
`

const RowHighLight = styled(Row)`
    margin-bottom: 20px;
    transition: 0.3s all;
    &:last-child {
        margin-bottom: 0px;
    }

    &:hover {
        background: rgba(256, 256, 256, 0.1);
    }
`

const TextMin = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: #7A7F7F;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    img {
        margin-left: 5px;
    }
`

const TextMin2 = styled.div`
    font-weight: 600;
    font-size: 12px;
    color: #7A7F7F;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const TextMedium = styled.div`
    font-weight: 500;
    font-size: 12px;
    color: #5B5A99;
    word-break: break-word;
    strong {
        font-size: 12px;
    }
    span {
        font-size: 12px;
        margin-left: 5px;
    }
    .st-link {
        color: #5aa62b;
        text-decoration: none;
        font-size: 12px;
        margin-left: 10px;
    }
`

const Image = styled.div`
    width: 50px;
    img {
        max-width: 100%;
    }
`

const BoxFlex = styled.div`
    display: flex;
    align-items: center;
    &.justify-center {
        justify-content: center;
    }
`

const ModalLarge = styled.div`
    .khPbuj {
        max-width: 900px;
    }
`



export default AccountModal
