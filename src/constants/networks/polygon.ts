import EthereumLogo from '../../assets/svg/networks/ethereum-logo.svg'
import { polygon } from 'wagmi/chains'
import { Network } from '../types'

export const Polygon: Network = {
  ...polygon,
  supportedTxTypes: [0, 2],
  logo: EthereumLogo,
  isTestnet: false,
  explorer: {
    name: 'Polygonscan',
    key: '',
    url: 'https://polygonscan.com',
    apiUrl: 'https://api.polygonscan.com',
    excludedContractAddrs: [],
  },
  config: {
    generalContracts: {},
    specialContracts: {},
    generalFeatures: {},
    specialFeatures: {},
  },
}
