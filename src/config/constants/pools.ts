import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 11,
    stakingToken: serializedTokens.gol,
    earningToken: serializedTokens.gol,
    contractAddress: {
      97: '',
      56: '0x65FE214382fD9e0d6cF054EeD65C150C88ed6834', // masterchef gol
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2', // x8 (8*0.579/100)=0.046386
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
