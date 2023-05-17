import React, { useCallback } from 'react'
// import { useWallet } from '../../context'
// import { CONNECTION_TYPE_TO_CONNECTION, SELECTABLE_WALLETS } from '../../wallet'
import { Card } from '../atoms/Card'
import { Flex } from '../atoms/Flex'
import { Tdiv } from '../atoms/Text'
// import { getConnectionName } from '../../wallet'
// import { useWeb3React } from '@web3-react/core'
import { useAccount, useConnect } from 'wagmi'

export const WalletList = () => {
  const { connector } = useAccount()
  const { connect, connectors } = useConnect()

  return (
    <>
      <Flex col style={{ margin: 'auto' }} gap={10}>
        {connectors.map((_connector) => (
          <Card
            px={20}
            py={5}
            canHover
            key={_connector.id}
            onClick={() => connect({ connector: _connector })}
            info={_connector.id == connector?.id}
          >
            <Flex stretch between>
              <Card itemsCenter transparent p={5}>
                <Tdiv t4 bold lightPrimary={_connector.id == connector?.id}>
                  {_connector.name}
                </Tdiv>
              </Card>
            </Flex>
          </Card>
        ))}
        {/* <Card
          px={20}
          py={5}
          canHover
          onClick={() => connectWallet(SELECTABLE_WALLETS[0].type)}
          info={SELECTABLE_WALLETS[0].connector == connector}
        >
          <Flex stretch between>
            <Card transparent p={5}>
              <img
                src={SELECTABLE_WALLETS[0].logo}
                alt={SELECTABLE_WALLETS[0].name}
                height={32}
              />
            </Card>
            <Card itemsCenter transparent p={5}>
              <Tdiv
                t4
                bold
                lightPrimary={SELECTABLE_WALLETS[0].connector == connector}
              >
                {getConnectionName(SELECTABLE_WALLETS[0].type)}
              </Tdiv>
            </Card>
          </Flex>
        </Card>
        {SELECTABLE_WALLETS.filter((w) => w.type != 'INJECTED').map(
          (wallet) => (
            <Card
              px={20}
              py={5}
              canHover
              key={wallet.type}
              onClick={() => connectWallet(wallet.type)}
              info={wallet.connector == connector}
            >
              <Flex stretch between>
                <Card transparent p={5}>
                  <img src={wallet.logo} alt={wallet.name} height={32} />
                </Card>
                <Card itemsCenter transparent p={5}>
                  <Tdiv t4 bold lightPrimary={wallet.connector == connector}>
                    {wallet.name}
                  </Tdiv>
                </Card>
              </Flex>
            </Card>
          )
        )} */}
      </Flex>
    </>
  )
}
