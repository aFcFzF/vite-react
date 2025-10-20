import React from 'react'
import {
  Select,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Card,
  Tag,
  Divider,
  Tooltip // Added for icons with tooltips
} from 'antd'
import {
  QuestionCircleOutlined,
  LikeOutlined,
  DislikeOutlined,
  InfoCircleOutlined,
  LineChartOutlined // Placeholder for main icon
} from '@ant-design/icons'
// Assuming you use a library like 'react-echarts-for-react' or similar
import ReactECharts from 'echarts-for-react'

const { Title, Text, Link } = Typography
const { Option } = Select

// --- Placeholder ECharts Options ---
// These are basic structures. You'll need to customize them significantly
// with actual data, styling, markAreas, markPoints, etc., to match the image.

const mainChartOption = {
  tooltip: {
    trigger: 'axis'
  },
  grid: { top: 60, right: 40, bottom: 30, left: 50 },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'], // Simplified labels
    axisLabel: {
      interval: 0, // Adjust as needed
      formatter: (value) => value // Show all labels for now
    },
    axisTick: { alignWithLabel: true }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed', color: '#eee' } },
    axisLabel: { show: false }
  },
  series: [
    {
      name: '实际流量指数', // Matches legend
      type: 'line',
      smooth: true,
      data: [120, 132, 101, 134, 290, 230, 220], // Sample data
      lineStyle: { color: '#5470C6', width: 2 },
      itemStyle: { color: '#5470C6' },
      areaStyle: {}, // Add if needed
      // Example MarkArea for "高峰时段" - requires precise data points
      markArea: {
        silent: true,
        itemStyle: {
          color: 'rgba(254, 243, 226, 0.5)' // Light orange background
        },
        data: [
          [{ name: '高峰时段1', xAxis: '10:00' }, { xAxis: '11:00' }], // Adjust times based on actual data/axis
          [{ name: '高峰时段2', xAxis: '18:00' }, { xAxis: '22:00' }] // Adjust times
        ]
      }
    },
    {
      name: '预估流量指数', // Matches legend
      type: 'line',
      smooth: true,
      lineStyle: { type: 'dashed', color: '#5470C6', width: 2 },
      itemStyle: { color: '#5470C6' },
      data: [110, 142, 111, 154, 300, 240, 210] // Sample data (slightly different)
    },
    {
      name: '历史同日均值', // Matches legend
      type: 'line',
      smooth: true,
      symbol: 'none', // Hide points on the line itself
      lineStyle: { color: '#ccc', width: 1.5 },
      itemStyle: { color: '#ccc' },
      data: [80, 92, 71, 94, 190, 180, 150], // Sample data
      // Example MarkLabel for "历史均值" - requires positioning
      markLine: {
        // Can sometimes be used for labels, or use graphic elements
        silent: true,
        symbol: 'none',
        label: {
          position: 'insideStartTop', // Adjust position
          formatter: '历史均值',
          color: '#aaa',
          padding: [0, 0, 0, -50] // Adjust padding for positioning
        },
        data: [{ yAxis: 90 }] // Position based on Y value
      }
    }
  ]
}

const smallChartOption = {
  grid: { top: 15, right: 10, bottom: 25, left: 10 },
  xAxis: {
    type: 'category',
    data: ['04:00', '10:00', '16:00', '22:00'], // Simplified labels for small charts
    axisLabel: { fontSize: 10 },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed', color: '#eee' } },
    axisLabel: { show: false }
  },
  tooltip: { trigger: 'axis', textStyle: { fontSize: 10 } },
  series: [
    {
      name: '实际流量指数',
      type: 'line',
      smooth: true,
      symbol: 'none',
      data: [30, 80, 60, 70], // Sample data
      lineStyle: { color: '#5470C6', width: 2 }
    },
    {
      name: '预估流量指数',
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: { type: 'dashed', color: '#5470C6', width: 2 },
      data: [35, 85, 55, 75], // Sample data
      // Example MarkPoint for peak - needs specific data point
      markPoint: {
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          color: 'rgba(234, 88, 12, 0.8)',
          borderColor: 'rgba(234, 88, 12, 0.3)',
          borderWidth: 4
        },
        label: { show: false },
        data: [{ type: 'max', name: '高峰值' }] // Finds max value in this series
      }
    },
    {
      name: '历史同日均值',
      type: 'line',
      smooth: true,
      symbol: 'none',
      lineStyle: { color: '#ccc', width: 1.5 },
      data: [20, 60, 50, 55], // Sample data
      // Example MarkLabel for "历史均值"
      markLine: {
        silent: true,
        symbol: 'none',
        label: {
          position: 'insideStartTop',
          formatter: '历史均值',
          color: '#aaa',
          fontSize: 10,
          backgroundColor: '#f7f7f7', // Match background
          padding: [2, 4]
        },
        data: [{ yAxis: 40 }] // Position based on Y value
      }
    }
  ]
}

// --- React Component ---

const TrafficAnalysisDashboard = () => {
  const smallChartTitles = [
    '微信视频号',
    '微信朋友圈',
    '微信公众号与小程序',
    '腾讯平台与内容媒体',
    '优量汇'
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
        <div className="mb-3 flex items-center gap-2 md:mb-0">
          <LineChartOutlined className="rounded bg-blue-100 p-1 text-2xl text-blue-600" />
          <Title level={3} className="!mb-0">
            流量分析
          </Title>
          <Tooltip title="流量分析说明">
            <QuestionCircleOutlined className="cursor-pointer text-gray-400" />
          </Tooltip>
        </div>
        <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-center">
          <Space wrap size={[8, 8]}>
            <Select
              defaultValue="请选择"
              className="min-w-[120px] rounded-md bg-white"
            >
              <Option value="1">地域: 请选择</Option>
              {/* Add other options */}
            </Select>
            <Select
              defaultValue="请选择"
              className="min-w-[120px] rounded-md bg-white"
            >
              <Option value="1">年龄: 请选择</Option>
              {/* Add other options */}
            </Select>
            <Select
              defaultValue="请选择"
              className="min-w-[120px] rounded-md bg-white"
            >
              <Option value="1">性别: 请选择</Option>
              {/* Add other options */}
            </Select>
          </Space>
          <Space className="mt-2 text-sm text-gray-500 md:mt-0">
            <span>流量分析能力对你是否有帮助？</span>
            <Button type="text" size="small" icon={<LikeOutlined />}>
              有帮助
            </Button>
            <Button type="text" size="small" icon={<DislikeOutlined />}>
              无帮助
            </Button>
          </Space>
        </div>
      </div>

      <Divider className="!my-4" />

      {/* Traffic Trend Overview */}
      <div className="mb-6">
        <Title level={4} className="mb-4">
          流量趋势概览
        </Title>
        <Row gutter={[16, 16]}>
          {/* Card 1: Today */}
          <Col xs={24} md={8}>
            <Card bordered={false} className="shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <Space>
                  <Text strong>今日流量</Text>
                  <Tag color="success" className="!m-0">
                    充足
                  </Tag>
                </Space>
                <Link href="#" className="text-sm">
                  查看详情
                </Link>
              </div>
              <div className="space-y-2 text-sm">
                <p className="mb-1 text-gray-500">高峰流量时段</p>
                <p className="font-medium">
                  10:00~11:00、18:00~17:00、22:00~23:00
                </p>
                <p className="mb-1 mt-3 text-gray-500">建议关注版位</p>
                <p className="font-medium">
                  微信视频号、微信朋友圈、微信公众号与小程序
                </p>
              </div>
            </Card>
          </Col>
          {/* Card 2: Next 7 Days */}
          <Col xs={24} md={8}>
            <Card bordered={false} className="shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <Text strong>未来 7 日流量</Text>
                <Link href="#" className="text-sm">
                  查看详情
                </Link>
              </div>
              <div className="space-y-2 text-sm">
                <p className="mb-1 text-gray-500">高峰流量日期</p>
                <p className="font-medium">01-15、01-18、01-19</p>
                <p className="mb-1 mt-3 text-gray-500">建议关注版位</p>
                <p className="font-medium">
                  微信视频号、微信朋友圈、微信公众号与小程序
                </p>
              </div>
            </Card>
          </Col>
          {/* Card 3: Key Nodes */}
          <Col xs={24} md={8}>
            <Card bordered={false} className="shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <Text strong>重要节点流量</Text>
                <Link href="#" className="text-sm">
                  查看详情
                </Link>
              </div>
              <div className="space-y-2 text-sm">
                <p className="mb-1 text-gray-500">节点高峰日期</p>
                <p className="font-medium">
                  年货节高峰日期: 01-15、01-16、01-17
                </p>
                <p className="font-medium">春节高峰日期: 01-28、02-05</p>
                <p className="mb-1 mt-3 text-gray-500">建议关注版位</p>
                <p className="font-medium">
                  微信视频号、微信朋友圈、腾讯平台与内容媒体
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Today's Traffic Analysis */}
      <Card bordered={false} className="shadow-sm">
        <div className="mb-4 flex flex-col items-start justify-between md:flex-row md:items-center">
          <Space>
            <Title level={4} className="!mb-0">
              今日流量分析
            </Title>
            <Tag color="success">充足</Tag>
          </Space>
          <Text type="secondary" className="mt-2 text-xs md:mt-0">
            流量指数通过特定算法生成，反映流量的相对趋势，不代表绝对量，不同版位之间不具备可比性
          </Text>
        </div>

        {/* Main Chart */}
        <div className="mb-6">
          <Text className="mb-2 block font-medium">大盘</Text>
          {/* ECharts component */}
          <ReactECharts
            option={mainChartOption}
            style={{ height: '300px', width: '100%' }}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>

        {/* Small Charts */}
        <Row gutter={[16, 16]} className="mb-4">
          {smallChartTitles.map((title, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={4}
              className={index === 4 ? 'xl:!w-1/5' : 'xl:!w-1/5'}
            >
              {' '}
              {/* Adjust xl width for 5 columns */}
              <div className="text-center">
                <Text className="mb-1 block text-sm font-medium">{title}</Text>
                <ReactECharts
                  option={smallChartOption} // Use the specific small chart option
                  style={{ height: '120px', width: '100%' }}
                  notMerge={true}
                  lazyUpdate={true}
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Legend */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          <Space align="center">
            <span className="inline-block h-0.5 w-3 bg-[#5470C6]"></span>
            <span>实际流量指数</span>
          </Space>
          <Space align="center">
            <span className="inline-block h-0.5 w-3 border-b border-dashed border-[#5470C6]"></span>
            <span>预估流量指数</span>
          </Space>
          <Space align="center">
            <span className="inline-block h-0.5 w-3 bg-gray-300"></span>
            <span>历史同日均值</span>
            <Tooltip title="历史同日均值说明">
              <QuestionCircleOutlined className="cursor-pointer text-gray-400" />
            </Tooltip>
          </Space>
          <Space align="center">
            <span className="inline-block size-2 rounded-full bg-orange-600"></span>
            <span>流量高峰值</span>
          </Space>
        </div>

        {/* Summary Box */}
        <div className="flex items-start gap-3 rounded-r-md border-l-4 border-blue-500 bg-blue-50 p-4">
          <InfoCircleOutlined className="mt-1 text-lg text-blue-500" />
          <div className="text-sm">
            <p className="mb-2">
              <Text strong className="text-blue-800">
                重点关注 |
              </Text>
              <span className="ml-1">
                2025-01-16
                有重要事件，建议广告主结合营销需求进行合理增投，把握节点机会。
              </span>
              <Link href="#" className="ml-2 text-blue-600">
                查看营销指南
              </Link>
            </p>
            <ul className="list-inside list-disc text-gray-700">
              <li>
                今日高峰时段「10:00~11:00、18:00~17:00、22:00~23:00」，请重点关注版位「微信视频号、微信朋友圈、微信公众号与小程序」
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default TrafficAnalysisDashboard
