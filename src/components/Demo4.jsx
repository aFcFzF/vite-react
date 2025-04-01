import React, { useState } from 'react'
import { Select, Card, Collapse, Button } from 'antd'
import * as echarts from 'echarts'

const { Option } = Select
const { Panel } = Collapse

const NavBar = () => (
  <div className="nav-bar flex h-16 items-center justify-between bg-gray-100 px-10">
    <div className="flex items-center">
      <Select defaultValue="region" style={{ width: 120 }}>
        <Option value="region">地域</Option>
        <Option value="age">年龄</Option>
        <Option value="gender">性别</Option>
      </Select>
      <h1 className="ml-10 text-2xl">流量分析</h1>
    </div>
    <Button type="link" icon={<i className="fas fa-question-circle"></i>} />
  </div>
)

const TrendOverview = () => (
  <div className="trend-overview grid grid-cols-3 gap-6 p-6">
    <Card title="今日流量卡牌" className="bg-white shadow">
      <p>核心指标数字</p>
      <p>趋势说明文字</p>
      <p>建议关注版位列表</p>
    </Card>
    <Card title="未来7日预测卡牌" className="bg-white shadow">
      <p>核心指标数字</p>
      <p>趋势说明文字</p>
      <p>建议关注版位列表</p>
    </Card>
    <Card title="重要节点提示卡牌" className="bg-white shadow">
      <p>核心指标数字</p>
      <p>趋势说明文字</p>
      <p>建议关注版位列表</p>
    </Card>
  </div>
)

const TodayAnalysis = () => {
  const [chart, setChart] = useState(null)

  const initChart = () => {
    if (!chart) {
      const chartDom = document.getElementById('main')
      const myChart = echarts.init(chartDom)
      setChart(myChart)
      const option = {
        // ECharts 配置项
      }
      myChart.setOption(option)
    }
  }

  return (
    <div className="today-analysis">
      <div id="main" style={{ width: '100%', height: 300 }}></div>
      <Collapse onChange={initChart}>
        <Panel header="平台流量矩阵" key="1">
          <div className="grid grid-cols-2 gap-6">
            <Card title="微信生态" className="bg-white shadow">
              {/* 微信生态数据 */}
            </Card>
            <Card title="腾讯媒体矩阵" className="bg-white shadow">
              {/* 腾讯媒体矩阵数据 */}
            </Card>
            <Card title="优量汇等第三方平台" className="bg-white shadow">
              {/* 优量汇等第三方平台数据 */}
            </Card>
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

const FocusTip = () => (
  <div className="focus-tip flex bg-yellow-100 p-6">
    <div className="w-1/2">
      <i className="fas fa-exclamation-triangle mr-2 text-red-500"></i>
      <span>重大事件预警</span>
    </div>
    <div className="w-1/2">
      <i className="fas fa-clock mr-2 text-blue-500"></i>
      <span>高峰时段建议</span>
    </div>
  </div>
)

const App = () => (
  <div className="App">
    <NavBar />
    <TrendOverview />
    <TodayAnalysis />
    <FocusTip />
  </div>
)

export default App
