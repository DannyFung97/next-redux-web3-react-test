/*************************************************************************************

    Table of Contents:

    import packages
    import managers
    import components
    import constants
    import wallets

    WalletModal
      hooks
      local functions

  *************************************************************************************/

/* import packages */
import React, { useCallback, useEffect } from 'react'

/* import managers */
// import { useWallet } from '../../context'

/* import components */
import { Modal } from '../molecules/Modal'
// import { Button, ButtonWrapper } from '../../atoms/Button'
import { Scrollable } from '../atoms/Scroll'

/* import constants */
// import { Z_MODAL } from '../../../constants'

/* import wallets */
import { WalletList } from '../molecules/WalletList'
// import { useWeb3React } from '@web3-react/core'
import usePrevious from '../../hooks/internal/usePrevious'
import { Button } from '../atoms/Button'
import { Flex } from '../atoms/Flex'
import { Z_MODAL } from '../../constants'
import { ModalProps } from '../atoms/Modal'
import { useAccount, useDisconnect } from 'wagmi'

export const WalletModal: React.FC<ModalProps> = (props) => {
  /************************************************************************************* 
    
  hooks

  *************************************************************************************/
  const { connector, address: account, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const activePrevious = usePrevious(isConnected)
  const connectorPrevious = usePrevious(connector)

  // if the user is inactive, then became active
  // or if the connector is different, close modal
  useEffect(() => {
    if (
      (isConnected && !activePrevious) ||
      (connector && connector !== connectorPrevious)
    ) {
      props.handleClose()
    }
  }, [
    isConnected,
    activePrevious,
    props.handleClose,
    connector,
    connectorPrevious,
  ])

  return (
    <Modal {...props} zIndex={Z_MODAL + 1}>
      <Flex col gap={10}>
        <Scrollable maxMobileHeight={'60vh'}>
          <WalletList />
        </Scrollable>
        {account && (
          <Flex justifyCenter>
            <Button onClick={disconnect}>Disconnect Wallet</Button>
          </Flex>
        )}
      </Flex>
    </Modal>
  )
}
