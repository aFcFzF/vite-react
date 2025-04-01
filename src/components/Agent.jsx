import React, { useState } from 'react'
import { Select, Button, Card } from 'antd'
import { use } from 'echarts/core'
import { LineChart, BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import moment from 'moment'

use([LineChart, BarChart, CanvasRenderer])

const App = () => {
  const [filters, setFilters] = useState({
    region: ['广东省'],
    age: ['18-24'],
    gender: ['男']
  })

  const [timeRange, setTimeRange] = useState([
    moment().subtract(1, 'days'),
    moment()
  ])
  const [timeGranularity, setTimeGranularity] = useState('day')

  const [chartData, setChartData] = useState({
    line: [],
    bar: []
  })

  // 模拟数据
  const mockData = {
    regions: ['广东省', '浙江省', '江苏省'],
    ages: ['18-24', '25-30', '31-35'],
    genders: ['男', '女'],
    platformData: {
      wechat: { video: 1200, friend: 950, official: 800 },
      media: { news: 700, video: 650 },
      third: { ylhy: 500 }
    },
    trendData: {
      day: [
        [1200, 950, 800],
        [1300, 1050, 850],
        [1100, 900, 750]
      ],
      hour: [
        [200, 180, 150],
        [220, 200, 170],
        [250, 230, 190],
        [180, 160, 140]
      ]
    }
  }

  // 初始化图表
  const initChart = (element) => {
    // const chart = use(chartElement.current)
    // chart.setOption({
    //   title: { text: '大盘流量趋势' },
    //   xAxis: { type: 'category', data: ['09:00', '12:00', '15:00', '18:00'] },
    //   yAxis: { type: 'value' },
    //   series: [
    //     { type: 'line', data: [200, 220, 250, 180], smooth: true },
    //     { type: 'bar', data: [180, 200, 230, 160], barWidth: '30%' }
    //   ]
    // })
  }

  // 处理筛选变化
  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }))
  }

  // 处理时间选择
  const handleTimeChange = (dates) => {
    setTimeRange([dates[0], dates[1]])
  }

  // 处理图表交互
  const handleChartEvent = (params) => {
    console.log('图表交互:', params)
  }

  return (
    <div className="bg-f8f9fa min-h-screen p-4">
      {/* 顶部导航栏 */}
      <nav className="bg-f8f8f8 flex h-60 items-center justify-between px-20">
        <div className="flex space-x-8">
          <Select
            className="w-64"
            placeholder="选择省份"
            value={filters.region}
            onChange={(v) => handleFilterChange('region', v)}
            options={[
              { value: ['广东省'], label: '广东省' },
              { value: ['浙江省'], label: '浙江省' },
              { value: ['江苏省'], label: '江苏省' }
            ]}
          />
          <Select
            className="w-64"
            placeholder="选择年龄"
            value={filters.age}
            onChange={(v) => handleFilterChange('age', v)}
            options={[
              { value: ['18-24'], label: '18-24' },
              { value: ['25-30'], label: '25-30' },
              { value: ['31-35'], label: '31-35' }
            ]}
          />
          <Select
            className="w-64"
            placeholder="选择性别"
            value={filters.gender}
            onChange={(v) => handleFilterChange('gender', v)}
            options={[
              { value: ['男'], label: '男' },
              { value: ['女'], label: '女' }
            ]}
          />
        </div>
        <h1 className="text-2c7be5 text-3xl font-bold">流量分析</h1>
        <Button
          icon="图标"
          className="hover:bg-2c7be5 border-2c7be5 border-2 bg-white hover:text-white"
        />
      </nav>

      {/* 主要内容区域 */}
      <main className="flex flex-col gap-4 py-4 lg:flex-row">
        {/* 流量趋势概览 */}
        <div className="w-full lg:w-1/3">
          <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
            <h3 className="mb-2 text-xl font-bold">今日流量卡牌</h3>
            <p className="text-2c7be5 mb-2 text-2xl font-bold">3,250</p>
            <p className="text-gray-600">较昨日增长 12.5%</p>
            <ul className="list-disc space-y-1">
              <li className="flex items-center">
                <span className="bg-00d97e mr-2 size-4 rounded"></span>
                微信生态流量占比 45%
              </li>
              <li className="flex items-center">
                <span className="bg-ff5b5b mr-2 size-4 rounded"></span>
                腾讯媒体矩阵流量占比 30%
              </li>
            </ul>
          </div>
          {/* 其他两个卡牌类似结构 */}
        </div>

        {/* 可视化分析区 */}
        <div className="w-full lg:w-2/3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div id="chartElement" className="h-300" />
            <div className="grid-cols-auto-fit minmax(250px, 1fr) gap-15 mt-4 grid">
              <Card className="rounded-xl border bg-white p-4 shadow-sm">
                <h4 className="mb-2 text-xl font-bold">微信生态</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-00d97e mr-2 size-12 rounded"></span>
                    <p className="text-xl font-bold">视频号</p>
                  </div>
                  <p className="text-2xl font-bold">1,200</p>
                </div>
              </Card>
              {/* 其他平台卡片 */}
            </div>
          </div>
        </div>

        {/* 运营提示区 */}
        <div className="w-full lg:w-1/3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="bg-ff5b5b w-1/2 rounded-lg p-4 text-white">
                <h4 className="text-xl font-bold">重大事件预警</h4>
                <p className="mt-2">杭州地区流量异常下降 30%</p>
              </div>
              <div className="w-1/2 rounded-lg bg-yellow-500 p-4">
                <h4 className="text-xl font-bold">高峰时段建议</h4>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center">
                    <span className="bg-2c7be5 mr-2 size-4 rounded"></span>
                    <p>12:00-13:00</p>
                  </div>
                  {/* 其他时间段 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 图表初始化 */}
      <script>{`// ECharts 初始化代码
        const chartElement = document.getElementById('chartElement');
        initChart(chartElement);
      `}</script>
    </div>
  )
}

export default App
