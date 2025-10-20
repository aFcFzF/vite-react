import {
  BarChartOutlined,
  InfoCircleOutlined,
  LikeOutlined,
  DislikeOutlined
} from '@ant-design/icons'
import {
  Layout,
  Card,
  Select,
  Space,
  Typography,
  Tag,
  Button,
  Row,
  Col,
  Alert,
  List
} from 'antd'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'

const { Header, Content } = Layout
const { Title, Text, Link } = Typography

const TrafficAnalysisPage = () => {
  const mainChartOptions: EChartsOption = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '00:00',
        '04:00',
        '08:00',
        '12:00',
        '16:00',
        '20:00',
        '00:00',
        '04:00',
        '08:00',
        '12:00',
        '16:00',
        '20:00',
        '00:00'
      ]
    },
    yAxis: { type: 'value', show: false },
    series: [
      {
        name: '历史均值',
        type: 'line',
        smooth: true,
        lineStyle: { color: '#1890ff' },
        data: [30, 40, 50, 80, 70, 110, 130, 150, 180, 160, 150, 140, 130]
      },
      {
        name: '预估指数',
        type: 'line',
        smooth: true,
        lineStyle: { color: '#1890ff', type: 'dashed' },
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          150,
          180,
          160,
          200,
          180,
          150
        ]
      }
    ]
  }

  const smallChartOptions = (data: number[], peakCoord: [string, number]) => ({
    grid: {
      left: '5%',
      right: '5%',
      top: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['04:00', '10:00', '16:00', '22:00'],
      axisLabel: { fontSize: 10 }
    },
    yAxis: { type: 'value', show: false },
    series: [
      {
        type: 'line',
        smooth: true,
        lineStyle: { color: '#1890ff' },
        data,
        markPoint: {
          data: [
            {
              coord: peakCoord,
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: { color: '#ff4d4f' }
            }
          ]
        }
      }
    ]
  })

  return (
    <Layout className="min-h-screen bg-[#f0f2f5] p-0">
      <Header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <Space align="center">
          <BarChartOutlined className="mr-2 text-2xl text-blue-600" />
          <Title level={5} className="m-0">
            流量分析
          </Title>
          <Button type="text" icon={<InfoCircleOutlined />} />
        </Space>

        <Space align="center">
          <Text className="text-gray-600">流量分析能力对你是否有帮助?</Text>
          <Button type="text" icon={<LikeOutlined />}>
            有帮助
          </Button>
          <Button type="text" icon={<DislikeOutlined />}>
            无帮助
          </Button>
        </Space>
      </Header>

      <Content>
        <Card bordered={false} className="rounded-none border-x-0 border-t-0">
          <Space className="px-6 py-4">
            <Select className="w-28" placeholder="地域: 请选择" />
            <Select className="ml-3 w-28" placeholder="年龄: 请选择" />
            <Select className="ml-3 w-28" placeholder="性别: 请选择" />
          </Space>
        </Card>

        <div className="border-b border-gray-200 bg-white p-6">
          <Title level={5} className="my-6 font-medium">
            流量趋势概览
          </Title>

          <Row gutter={16} className="mb-6">
            {[
              {
                title: '今日流量',
                tag: '充足',
                data: [
                  '10:00-11:00、18:00-17:00、22:00-23:00',
                  '微信视频号、微信朋友圈、微信公众号与小程序'
                ]
              },
              {
                title: '未来 7 日流量',
                data: [
                  '01-15、01-18、01-19',
                  '微信视频号、微信朋友圈、微信公众号与小程序'
                ]
              },
              {
                title: '重要节点流量',
                data: [
                  '年货节高峰日期: 01-15、01-16、01-17',
                  '春节高峰日期: 01-28、02-05',
                  '微信视频号、微信朋友圈、腾讯平台与内容媒体'
                ]
              }
            ].map((card, idx) => (
              <Col span={8} key={idx}>
                <Card className="h-full rounded-lg border border-gray-200">
                  <Space className="mb-4 w-full justify-between">
                    <Text strong>{card.title}</Text>
                    {card.tag && <Tag color="success">{card.tag}</Tag>}
                    <Link className="text-blue-600">查看详情</Link>
                  </Space>
                  {card.data.map((text, i) => (
                    <div key={i} className="mb-4">
                      <Text type="secondary" className="mb-1 block">
                        {i === 0
                          ? '高峰流量时段'
                          : i === 1
                            ? '建议关注版位'
                            : ''}
                      </Text>
                      <Text className="block">{text}</Text>
                    </div>
                  ))}
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="mt-2 bg-white p-6">
          <Space className="mb-4 w-full items-center justify-between">
            <Space align="center">
              <Title level={5} className="m-0 font-medium">
                今日流量分析
              </Title>
              <Tag color="success" className="ml-2">
                充足
              </Tag>
            </Space>
            <Text type="secondary" className="text-xs">
              流量指数通过特定算法生成，反映流量的相对趋势...
            </Text>
          </Space>

          <Text strong className="mb-4 block">
            大盘
          </Text>
          <ReactECharts option={mainChartOptions} className="mb-6 h-48" />

          <Row gutter={16} className="mb-6">
            {[
              {
                title: '微信视频号',
                data: [20, 30, 90, 40],
                peak: ['16:00', 90]
              },
              {
                title: '微信朋友圈',
                data: [30, 70, 40, 30],
                peak: ['10:00', 70]
              },
              {
                title: '微信公众号与小程序',
                data: [20, 60, 30, 20],
                peak: ['10:00', 60]
              },
              {
                title: '腾讯平台与内容媒体',
                data: [30, 50, 80, 40],
                peak: ['16:00', 80]
              },
              { title: '优量汇', data: [20, 60, 40, 30], peak: ['10:00', 60] }
            ].map((item, i) => (
              <Col span={4} key={i}>
                <Text className="mb-2 block text-center">{item.title}</Text>
                <ReactECharts
                  option={
                    smallChartOptions(
                      item.data,
                      item.peak as [string, number]
                    ) as unknown as any
                  }
                  className="h-28"
                />
              </Col>
            ))}
          </Row>

          <Space className="mt-6 w-full justify-center">
            {['实际流量指数', '预估流量指数', '历史同日均值', '流量高峰值'].map(
              (text, i) => (
                <Space key={i} className="ml-6 first:ml-0">
                  <div
                    className={`size-3 rounded-full ${
                      i === 0
                        ? 'bg-blue-600'
                        : i === 1
                          ? 'bg-blue-600/30'
                          : i === 2
                            ? 'bg-gray-400'
                            : 'bg-red-500'
                    }`}
                  />
                  <Text className="text-xs">{text}</Text>
                </Space>
              )
            )}
          </Space>

          <Alert
            className="mt-6"
            type="info"
            showIcon
            message="重点关注 | 2025-01-16 有重要事件..."
            action={<Button type="link">查看营销指南</Button>}
          />

          <List
            className="mt-4"
            dataSource={[
              '今日高峰时段「10:00-11:00、18:00-17:00、22:00-23:00」...'
            ]}
            renderItem={(item) => <Text className="text-sm">{item}</Text>}
          />
        </div>
      </Content>
    </Layout>
  )
}

export default TrafficAnalysisPage
