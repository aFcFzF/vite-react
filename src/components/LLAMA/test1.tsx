import React from 'react'
import { Select } from 'antd'
import ReactECharts from 'echarts-for-react'

const TrafficAnalysis = () => {
  // 示例数据
  const overallTrendData = {
    xData: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
    seriesData: [100, 200, 300, 400, 500, 600, 700]
  }

  const platformData = [
    {
      name: '微信视频号',
      xData: ['04:00', '10:00', '16:00', '22:00'],
      seriesData: [150, 250, 350, 450]
    },
    {
      name: '微信朋友圈',
      xData: ['04:00', '10:00', '16:00', '22:00'],
      seriesData: [200, 300, 400, 500]
    },
    {
      name: '微信公众号与小程序',
      xData: ['04:00', '10:00', '16:00', '22:00'],
      seriesData: [100, 200, 300, 400]
    },
    {
      name: '腾讯平台与内容媒体',
      xData: ['04:00', '10:00', '16:00', '22:00'],
      seriesData: [120, 220, 320, 420]
    },
    {
      name: '优量汇',
      xData: ['04:00', '10:00', '16:00', '22:00'],
      seriesData: [130, 230, 330, 430]
    }
  ]

  // ECharts 配置
  const overallTrendOptions = {
    xAxis: { type: 'category', data: overallTrendData.xData },
    yAxis: { type: 'value' },
    series: [{ data: overallTrendData.seriesData, type: 'line', smooth: true }]
  }

  const platformOptions = {
    xAxis: { type: 'category' },
    yAxis: { type: 'value' },
    series: [{ type: 'line', smooth: true }]
  }

  return (
    <div className="bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <Select placeholder="地域：请选择" className="w-40" />
          <Select placeholder="年龄：请选择" className="w-40" />
          <Select placeholder="性别：请选择" className="w-40" />
        </div>
        <div className="text-sm text-gray-600">
          流量分析能力对你是否有帮助？
          <span className="ml-2 cursor-pointer text-blue-500">有帮助</span>
          <span className="ml-2 cursor-pointer text-gray-400">无帮助</span>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <span>今日流量</span>
            <span className="cursor-pointer text-sm text-blue-500">
              查看详情
            </span>
          </div>
          <div>充足</div>
          <div className="text-sm text-gray-500">
            高峰流量时段: 10:00~11:00, 18:00~17:00, 22:00~23:00
          </div>
        </div>
        <div className="rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <span>未来7日流量</span>
            <span className="cursor-pointer text-sm text-blue-500">
              查看详情
            </span>
          </div>
          <div>高峰流量日期: 01-15, 01-18, 01-19</div>
        </div>
        <div className="rounded bg-white p-4 shadow">
          <div className="flex items-center justify-between">
            <span>重要节点流量</span>
            <span className="cursor-pointer text-sm text-blue-500">
              查看详情
            </span>
          </div>
          <div>
            节点高峰日期: 年货节: 01-15, 01-16, 01-17; 春节: 01-28, 02-05
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="mb-6 rounded bg-white p-4 shadow">
        <div className="mb-4 text-lg font-bold">今日流量分析</div>
        <ReactECharts
          option={overallTrendOptions}
          style={{ height: '300px' }}
        />
        <div className="mt-6 grid grid-cols-5 gap-4">
          {platformData.map((platform, index) => (
            <div key={index}>
              <div className="mb-2 text-sm font-bold">{platform.name}</div>
              <ReactECharts
                option={{
                  ...platformOptions,
                  xAxis: { data: platform.xData },
                  series: [{ data: platform.seriesData }]
                }}
                style={{ height: '150px' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-600">
        <div>
          重点关注 | 2025-01-16 有重要事件，建议广告主结合营销需求进行合理投放。
          <span className="cursor-pointer text-blue-500">查看营销指南</span>
        </div>
        <div>
          今日高峰时段「10:00~11:00, 18:00~17:00,
          22:00~23:00」，请重点关注「微信视频号, 微信朋友圈,
          微信公众号与小程序」
        </div>
      </div>
    </div>
  )
}

export default TrafficAnalysis
