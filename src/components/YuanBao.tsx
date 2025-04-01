import React, { useEffect, useRef } from 'react'
import { Card, Select, Button, Radio } from 'antd'
import * as echarts from 'echarts'
import 'tailwindcss/tailwind.css'

const { Option } = Select

const TrafficAnalysisDashboard = () => {
  const trendChartRef = useRef(null)
  const todayChartRef = useRef(null)

  // 初始化趋势图表
  useEffect(() => {
    const trendChart = echarts.init(trendChartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: [
          '微信视频号',
          '微信朋友圈',
          '微信公众号与小程序',
          '腾讯平台与内容媒体',
          '优量汇'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '微信视频号',
          type: 'line',
          data: [120, 132, 101, 134, 90, 230]
        },
        {
          name: '微信朋友圈',
          type: 'line',
          data: [220, 182, 191, 234, 290, 330]
        },
        {
          name: '微信公众号与小程序',
          type: 'line',
          data: [150, 232, 201, 154, 190, 330]
        },
        {
          name: '腾讯平台与内容媒体',
          type: 'line',
          data: [320, 332, 301, 334, 390, 330]
        },
        {
          name: '优量汇',
          type: 'line',
          data: [82, 92, 91, 94, 129, 133]
        }
      ]
    }
    trendChart.setOption(option)

    return () => {
      trendChart.dispose()
    }
  }, [])

  // 初始化今日流量图表
  useEffect(() => {
    const todayChart = echarts.init(todayChartRef.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: [
          '微信视频号',
          '微信朋友圈',
          '微信公众号与小程序',
          '腾讯平台与内容媒体',
          '优量汇',
          '历史均值'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '23:59'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '微信视频号',
          type: 'line',
          data: [
            120, 132, 101, 134, 90, 230, 210, 180, 190, 200, 210, 220, 230, 240,
            250, 240, 230, 220, 210
          ]
        },
        {
          name: '微信朋友圈',
          type: 'line',
          data: [
            220, 182, 191, 234, 290, 330, 310, 320, 330, 340, 350, 360, 370,
            380, 390, 380, 370, 360, 350
          ]
        },
        {
          name: '微信公众号与小程序',
          type: 'line',
          data: [
            150, 232, 201, 154, 190, 330, 410, 420, 430, 440, 450, 460, 470,
            480, 490, 480, 470, 460, 450
          ]
        },
        {
          name: '腾讯平台与内容媒体',
          type: 'line',
          data: [
            320, 332, 301, 334, 390, 330, 320, 310, 320, 330, 340, 350, 360,
            370, 380, 370, 360, 350, 340
          ]
        },
        {
          name: '优量汇',
          type: 'line',
          data: [
            82, 92, 91, 94, 129, 133, 132, 131, 132, 133, 134, 135, 136, 137,
            138, 137, 136, 135, 134
          ]
        },
        {
          name: '历史均值',
          type: 'line',
          lineStyle: {
            type: 'dashed'
          },
          data: [
            200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
            200, 200, 200, 200, 200, 200
          ]
        }
      ]
    }
    todayChart.setOption(option)

    return () => {
      todayChart.dispose()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="mb-6 text-2xl font-bold">流量分析</h1>

      <div className="mb-6">
        <p className="mb-2">流量分析能力对你是否有帮助？</p>
        <Radio.Group defaultValue="有帮助">
          <Radio.Button value="有帮助">有帮助</Radio.Button>
          <Radio.Button value="无帮助">无帮助</Radio.Button>
        </Radio.Group>
      </div>

      <div className="mb-6 flex gap-4">
        <Select placeholder="地域：请选择" style={{ width: 200 }}>
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
          <Option value="guangzhou">广州</Option>
          <Option value="shenzhen">深圳</Option>
        </Select>

        <Select placeholder="年龄：请选择" style={{ width: 200 }}>
          <Option value="18-24">18-24岁</Option>
          <Option value="25-30">25-30岁</Option>
          <Option value="31-40">31-40岁</Option>
          <Option value="41-50">41-50岁</Option>
        </Select>

        <Select placeholder="性别：请选择" style={{ width: 200 }}>
          <Option value="male">男</Option>
          <Option value="female">女</Option>
        </Select>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">流量趋势概览</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card
            title="今日流量"
            extra={<Button type="link">查看详情</Button>}
            className="shadow-sm"
          >
            <div className="flex items-center">
              <span className="mr-2 text-2xl font-bold text-green-500">
                充足
              </span>
            </div>
          </Card>

          <Card
            title="未来7日流量"
            extra={<Button type="link">查看详情</Button>}
            className="shadow-sm"
          >
            <div ref={trendChartRef} style={{ height: '200px' }}></div>
          </Card>

          <Card
            title="重要节点流量"
            extra={<Button type="link">查看详情</Button>}
            className="shadow-sm"
          >
            <div className="space-y-2">
              <div>
                <p className="font-medium">高峰流量时段</p>
                <p className="text-gray-600">时间节点</p>
              </div>
              <div>
                <p className="font-medium">节点高峰日期</p>
                <p className="text-gray-600">01-15、01-18、01-18、01-19</p>
              </div>
              <div>
                <p className="font-medium">年货节高峰日期</p>
                <p className="text-gray-600">01-15、01-16、01-17</p>
              </div>
              <div>
                <p className="font-medium">春节高峰日期</p>
                <p className="text-gray-600">01-18、02-05</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-xl font-semibold">建议关注版位</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="shadow-sm">
            <p className="text-gray-600">建议关注版位</p>
            <p className="font-medium">
              微信视频号、微信朋友圈、微信公众号与小程序
            </p>
          </Card>

          <Card className="shadow-sm">
            <p className="text-gray-600">建议关注版位</p>
            <p className="font-medium">
              微信视频号、微信朋友圈、腾讯平台与内容媒体
            </p>
          </Card>

          <Card className="shadow-sm">
            <p className="text-gray-600">建议关注版位</p>
            <p className="font-medium">微信视频号、微信公众号与内容媒体</p>
          </Card>
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">今日流量分析</h2>
          <span className="font-bold text-green-500">充足</span>
        </div>

        <Card className="shadow-sm">
          <div ref={todayChartRef} style={{ height: '400px' }}></div>
          <p className="mt-4 text-sm text-gray-500">
            流量指数通过特定算法生成，反映流量的相对趋势，不代表绝对量，不同版位之间不具备可比性
          </p>
        </Card>
      </div>
    </div>
  )
}

export default TrafficAnalysisDashboard
