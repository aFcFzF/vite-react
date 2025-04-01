import { Layout, Menu, Dropdown, Card, Row, Col } from 'antd'
const { Header, Sider, Content } = Layout

import Chart from 'echarts-for-react'

export default function TrafficDashboard() {
  // 侧边栏导航项
  const sidebarItems = [
    { key: '1', label: '实时监控' },
    { key: '2', label: '历史分析' },
    { key: '3', label: '预测模型' }
  ]

  // 基础图表配置
  const lineOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line' }]
  }

  return (
    <Layout className="min-h-screen">
      {/* 左侧导航栏 */}
      <Sider
        width={200}
        className="!fixed !inset-y-0 !left-0 !h-screen shadow-lg"
        theme="light"
      >
        <div className="flex h-12 items-center justify-center bg-gray-100">
          <h2 className="text-lg font-bold">流量分析系统</h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sidebarItems}
          className="h-full border-r-0 pt-4"
        />
      </Sider>

      {/* 主内容区域 */}
      <Layout className="ml-[200px] bg-gray-50">
        {/* 顶部筛选栏 */}
        <Header className="flex items-center justify-between bg-white px-6 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-800">
            实时流量监控看板
          </h1>
          <div className="flex gap-6">
            {['地域', '年龄', '性别'].map((label) => (
              <Dropdown
                key={label}
                menu={{ items: [] }}
                trigger={['click']}
                className="cursor-pointer transition-colors hover:text-blue-600"
              >
                <span className="text-gray-600">{label}: 请选择</span>
              </Dropdown>
            ))}
          </div>
        </Header>

        {/* 数据可视化区域 */}
        <Content className="space-y-6 p-6">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="实时流量趋势" className="h-48">
                <Chart option={lineOption} style={{ height: '160px' }} />
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            {[
              { title: '访问时段分布', type: 'bar' },
              { title: '用户来源分布', type: 'pie' },
              { title: '设备类型分布', type: 'bar' }
            ].map(({ title, type }, idx) => (
              <Col key={idx} xs={24} md={12} lg={8}>
                <Card title={title} className="h-80">
                  <Chart
                    option={{
                      ...lineOption,
                      series: [{ ...lineOption.series[0], type }],
                      tooltip: { show: type === 'pie' }
                    }}
                    style={{ height: '280px' }}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {
            <Row>
              <Col span={24}>
                <Card title="历史趋势对比" className="h-96">
                  <Chart
                    option={{
                      ...lineOption,
                      series: [
                        { ...lineOption.series[0], name: '当前周期' },
                        {
                          ...lineOption.series[0],
                          name: '对比周期',
                          data: [720, 832, 801, 834, 1190, 1230, 1220]
                        }
                      ]
                    }}
                    style={{ height: '360px' }}
                  />
                </Card>
              </Col>
            </Row>
          }
        </Content>
      </Layout>
    </Layout>
  )
}
