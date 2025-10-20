// import Demo2 from './Demo2'
// import Demo4 from './Demo4'
// import CopyCode from './copyCode'
// import AIWoa from './AIWoa'
// import CursorRebate from './CursorRebate'
// import AIWoaRebate from './AIWoa/AIWOARebate'
// import DsRebate from './DS/DsV3Rebate'
// import YuanbaoRebateV3 from './Yuanbao/YuanbaoRebateV3'
// import Agent from './AgentList'
// import DsV3 from './DsV3'
// import Yuanbao from './YuanBao'
// import Agent from './AgentList'
// import HunyuanPx from './HunyuanPx'
// import DsV3Table from './DsV3Table'
// import DSV3Rebate from './DSV3Rebate'
// import HunyuanPx from './HunyuanPx'
// import WeavefoxV1 from './WeavefoxV1'
// import CursorRebate from './Cursor/CursorRebate'
// import CursorSlice from './Cursor/Slice'

// import CludeIRDS from './IR/CludeIRDS'
import LLMA4 from './LLAMA/test1'
import Gemini from './Gemini/index'
// import FigmaPlugin from './FigmaPlugin/index'
import AdpD2c from './AdpD2C/index'
import AdpD2cHead from './AdpD2C/head'
import AdpD2cHome from './AdpD2C/home'
import { Seed } from './Seed/index'
import { DeepseekCode } from './DeepseekCode'

import { Echarts } from '@tencent/spaui'
import EchartsForReact from 'echarts-for-react'

const TestChart = (): JSX.Element => {
  return (
    <>
      1111
      <EchartsForReact
        style={{ width: '100%', height: '100%' }}
        option={{
          radar: {
            indicator: [
              {
                name: '花费规模',
                max: 5
              },
              {
                name: '花费增长',
                max: 5
              },
              {
                name: '竞争潜力',
                max: 5
              },
              {
                name: '销量规模',
                max: 5
              }
            ],
            shape: 'diamond',
            splitNumber: 4
          },
          series: [
            {
              name: '系列1',
              type: 'radar',
              data: [
                {
                  value: [5, 3, 2, 3],
                  itemStyle: {
                    color: '#4A90E2'
                  },
                  lineStyle: {
                    color: '#4A90E2',
                    width: 2
                  },
                  areaStyle: {
                    color: '#4A90E2',
                    opacity: 0.1
                  }
                }
              ]
            },
            {
              name: '系列2',
              type: 'radar',
              data: [
                {
                  value: [4, 5, 3, 5],
                  itemStyle: {
                    color: '#F5A623'
                  },
                  lineStyle: {
                    color: '#F5A623',
                    width: 2
                  },
                  areaStyle: {
                    color: '#F5A623',
                    opacity: 0.1
                  }
                }
              ]
            }
          ]
        }}
      />
    </>
  )
}

function App() {
  // return <Yuanbao />
  // return <HunyuanPx />
  // return <CopyCode />
  // return <AIWoa />
  // return <CursorRebate />
  // return <DsRebate />
  // return <YuanbaoRebateV3 />
  // return <WeavefoxV1 />
  // return <CludeIRDS />
  // return <LLMA4 />
  // return <Seed />
  // return <CursorRebate />
  // return <CursorSlice />
  return <TestChart />
}

export default App
