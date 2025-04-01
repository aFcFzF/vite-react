import { Layout, Select, Button, Typography } from 'antd'
import ReactECharts from 'echarts-for-react'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Header, Content } = Layout
const { Text } = Typography

export default function TrafficAnalysis() {
  // 示例图表配置
  const mainChartOption = {
    xAxis: { data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'] },
    yAxis: {},
    series: [
      { name: '实际流量', type: 'line', data: [120, 200, 150, 80, 70, 110] },
      { name: '预估流量', type: 'line', data: [80, 150, 100, 200, 130, 90] },
      { name: '历史均值', type: 'line', data: [100, 130, 90, 150, 110, 80] }
    ]
  }

  const platformChartOption = {
    xAxis: { data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'] },
    yAxis: {},
    series: [
      { name: '微信视频号', type: 'line', data: [45, 60, 55, 70, 65, 80] },
      { name: '微信朋友圈', type: 'line', data: [30, 45, 40, 55, 50, 60] },
      { name: '公众号', type: 'line', data: [25, 30, 35, 40, 45, 50] },
      { name: '腾讯媒体', type: 'line', data: [20, 25, 30, 35, 40, 45] },
      { name: '优量汇', type: 'line', data: [15, 20, 25, 30, 35, 40] }
    ]
  }

  return (
    <div className="h-[800px] w-[1200px] bg-white">
      {/* 顶部导航栏 */}
      <Header className="flex h-[50px] items-center justify-between bg-gray-100 px-4">
        <div className="flex items-center">
          <QuestionCircleOutlined className="mr-2 text-lg" />
          <Text strong>流量分析</Text>
        </div>
        <Text>
          流量分析能力对你是否有帮助？
          <Button type="link" size="small">
            有帮助
          </Button>
          <Button type="link" size="small">
            无帮助
          </Button>
        </Text>
      </Header>

      {/* 筛选区域 */}
      <div className="flex h-[50px] items-center space-x-6 px-4">
        <Text>地域：</Text>
        <Select placeholder="请选择" style={{ width: 120 }} />
        <Text>年龄：</Text>
        <Select placeholder="请选择" style={{ width: 120 }} />
        <Text>性别：</Text>
        <Select placeholder="请选择" style={{ width: 120 }} />
      </div>

      {/* 流量趋势概览 */}
      <div className="flex h-[100px] items-center justify-around bg-gray-100 px-4">
        <div className="text-center">
          <Text className="block">今日流量</Text>
          <Text type="success" className="block">
            充足
          </Text>
          <Button type="link" size="small">
            查看详情
          </Button>
        </div>
        <div className="text-center">
          <Text className="block">未来7日流量</Text>
          <Button type="link" size="small">
            查看详情
          </Button>
        </div>
        <div className="text-center">
          <Text className="block">重要节点流量</Text>
          <Button type="link" size="small">
            查看详情
          </Button>
        </div>
      </div>

      {/* 今日流量分析 */}
      <div className="h-[400px]">
        <div className="h-[200px]">
          <ReactECharts option={mainChartOption} style={{ height: 200 }} />
        </div>
        <div className="h-[200px]">
          <ReactECharts option={platformChartOption} style={{ height: 200 }} />
        </div>
      </div>

      {/* 底部提示 */}
      <div className="h-[50px] bg-gray-100 p-2">
        <Text className="block">
          重点关注 | 2025-01-16 有重要事件，建议广告主结合营销需求进行合理增投，
          把握节点机会，
          <Button type="link" size="small">
            查看营销指南
          </Button>
        </Text>
        <Text className="block">
          今日高峰时段 10:00~11:00、18:00~17:00、22:00~23:00， 请重点关注版位
          微信视频号、微信朋友圈、微信公众号与小程序
        </Text>
      </div>
    </div>
  )
}
