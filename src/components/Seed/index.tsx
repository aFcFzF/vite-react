import Icon from '@ant-design/icons'
import {
  Layout,
  Menu,
  Badge,
  Statistic,
  Row,
  Col,
  Input,
  Button,
  Card,
  Select,
  DatePicker,
  Table,
  Pagination,
  Avatar,
  Tabs,
  List,
  Tag
} from 'antd'

import moment from 'moment'

const { Header, Content } = Layout
const { TabPane } = Tabs

const columns = [
  {
    title: '账户名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <Button type="link">进入平台</Button>
        <Button type="link">查看广告</Button>
        <Button type="link">···</Button>
      </span>
    )
  },
  {
    title: '花费',
    dataIndex: 'cost',
    key: 'cost'
  },
  {
    title: '目标转化率',
    dataIndex: 'conversionRate',
    key: 'conversionRate'
  },
  {
    title: '目标转化成本',
    dataIndex: 'conversionCost',
    key: 'conversionCost'
  },
  {
    title: '账户日预算 (元)',
    dataIndex: 'dailyBudget',
    key: 'dailyBudget'
  },
  {
    title: '所属组织',
    dataIndex: 'organization',
    key: 'organization'
  },
  {
    title: '所属业务',
    dataIndex: 'business',
    key: 'business'
  }
]

const dataSource = [
  {
    key: '1',
    name: '云锐国际文化传媒（深圳）有限公司<br/>ID: 127193',
    cost: '',
    conversionRate: '',
    conversionCost: '',
    dailyBudget: '',
    organization: '云锐国际集团',
    business: '-'
  },
  {
    key: '2',
    name: '云锐国际文化传媒（上海）有限公司<br/>ID: 11382910',
    cost: '',
    conversionRate: '',
    conversionCost: '',
    dailyBudget: '',
    organization: '云锐国际集团',
    business: '电商-大'
  },
  // 其他数据项...
  {
    key: '10',
    name: '云锐国际文化传媒（郑州）有限公司<br/>ID: 372927',
    cost: '62,815.17',
    conversionRate: '',
    conversionCost: '',
    dailyBudget: '',
    organization: '云锐国际集团',
    business: '-'
  }
]

const newFeatures = [
  {
    tag: 'New',
    tagColor: 'blue',
    title: '产品速递VOL.75：产品库支持...',
    date: '02-29'
  },
  {
    tag: 'Hot',
    tagColor: 'orange',
    title: '“全新广告投放模式”增加5个批...',
    date: '02-24'
  },
  {
    tag: '',
    tagColor: '',
    title: '视频号动态落地页统一至视频号推广目...',
    date: '01-12'
  },
  {
    tag: '',
    tagColor: '',
    title: '最大转化量投放如何效果更好？官方给...',
    date: '12-29'
  },
  {
    tag: '',
    tagColor: '',
    title: '产品速递VOL.69：投放平台支持批量授...',
    date: '12-16'
  }
]

export const Seed = () => {
  return (
    <Layout className="min-h-screen">
      <Header className="bg-white shadow-md">
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="flex items-center">
            {/* 替换为实际Logo */}
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="mr-2 h-8 w-auto"
            />
            <span className="text-xl font-bold">客户工作台</span>
            <Badge status="error" text="New" className="ml-2" />
          </div>
          <Menu mode="horizontal" className="mr-4">
            <Menu.Item key="概览">概览</Menu.Item>
            <Menu.Item key="推广">推广</Menu.Item>
            <Menu.Item key="分析">分析</Menu.Item>
            <Menu.Item key="资产">资产</Menu.Item>
            <Menu.Item key="优化">优化</Menu.Item>
            <Menu.Item key="财务">财务</Menu.Item>
            <Menu.Item key="管理">管理</Menu.Item>
          </Menu>
          <div className="flex items-center">
            <Icon type="download" className="mr-4" />
            <Icon type="notification" className="mr-4" />
            <Icon type="question-circle" className="mr-4" />
            <Avatar src="https://via.placeholder.com/32" />
          </div>
        </div>
      </Header>
      <Content className="container mx-auto mt-4 pb-8">
        <Row gutter={16}>
          <Col span={18}>
            {/* 今日数据概览 */}
            <Row gutter={16} className="mb-4">
              <Col span={6}>
                <Statistic title="总余额 (元)" value={28194.47} />
              </Col>
              <Col span={6}>
                <Statistic title="总花费 (元)" value={3592.47} />
              </Col>
              <Col span={6}>
                <Statistic title="下单量" value={450} />
              </Col>
              <Col span={6}>
                <Statistic title="转化量" value={37290} />
              </Col>
            </Row>

            <Card title="工作台助手" className="mb-4">
              <Input
                placeholder="你好，需要我的什么帮助？"
                className="mr-2 w-1/2"
              />
              <Button type="primary" className="mr-2">
                指令中心
              </Button>
              <Button className="mr-2">帮我创建</Button>
              <Button className="mr-2">整体效果分析</Button>
              <Button className="mr-2">异常数据分析</Button>
              <Button>违规情况查询</Button>
            </Card>

            {/* 账户筛选 */}
            <Row gutter={8} className="mb-4">
              <Col span={4}>
                <Select placeholder="备注: 请输入" />
              </Col>
              <Col span={4}>
                <Select placeholder="标签: 请输入" />
              </Col>
              <Col span={4}>
                <Select placeholder="所属组织: 请选择" />
              </Col>
              <Col span={4}>
                <Select placeholder="所属服务商: 请选择" />
              </Col>
              <Col span={4}>
                <Select placeholder="数据版本: 请选择" />
              </Col>
              <Col span={4}>
                <Select placeholder="过滤无数据: 请选择" />
              </Col>
              <Col span={4}>
                <Select placeholder="投放账户: 腾讯广告账户" />
              </Col>
              <Col span={4}>
                <DatePicker
                  type="range"
                  defaultValue={[moment('2023-10-01'), moment('2023-10-30')]}
                />
              </Col>
              <Col span={2}>
                <Button>只看重点账户</Button>
              </Col>
            </Row>

            {/* 账户表格 */}
            <Card title="账户" className="mb-4">
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                pagination={false}
              />
              <Pagination
                total={400}
                pageSize={10}
                current={1}
                className="mt-2"
              />
              <div className="mt-2 text-sm text-gray-500">
                数据最后更新时间：2023-10-30 09:00
              </div>
            </Card>
          </Col>
          <Col span={6}>
            {/* 用户信息 */}
            <Card title="快乐的小星球" className="mb-4">
              <div className="flex items-center">
                <Avatar src="https://via.placeholder.com/48" className="mr-2" />
                <div>
                  <p className="font-bold">微信号: kldxxq_820</p>
                  <div className="mt-1 flex">
                    <div className="mr-4">组织 4</div>
                    <div className="mr-4">成员 223</div>
                    <div>账户 212,930</div>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="mr-2">
                      组织概览
                    </a>
                    <a href="#">指南 ▾</a>
                  </div>
                </div>
              </div>
            </Card>

            {/* 营销课程 */}
            <Card title="客户工作台营销课程" className="mb-4">
              <p className="mb-2">快速了解新版工作台的核心能力变化</p>
              <Button type="primary">立即了解</Button>
            </Card>

            {/* 营销工具 */}
            <Card title="营销工具" className="mb-4">
              <div className="mb-2">
                应用自动化投放{' '}
                <span className="text-sm text-gray-500">
                  极简投放智能护航，投放更简单
                </span>
              </div>
              <div>
                自定义托管{' '}
                <span className="text-sm text-gray-500">
                  账户设置托管功能，管理更轻松
                </span>
              </div>
            </Card>

            {/* 常用工具 */}
            <Card title="常用工具" className="mb-4">
              <div className="flex flex-wrap">
                <a href="#" className="mb-1 mr-2">
                  创意中心
                </a>
                <a href="#" className="mb-1 mr-2">
                  蹊径建站
                </a>
                <a href="#" className="mb-1 mr-2">
                  如翼数据平台
                </a>
                <a href="#" className="mb-1 mr-2">
                  妙思AI
                </a>
                <a href="#" className="mb-1 mr-2">
                  枫页落地页
                </a>
                <a href="#" className="mb-1 mr-2">
                  互选广告
                </a>
                <a href="#" className="mb-1">
                  自定义托管
                </a>
              </div>
            </Card>

            {/* 新功能 */}
            <Card title="新功能" className="mb-4">
              <Tabs defaultActiveKey="新功能">
                <TabPane tab="新功能" key="新功能">
                  <List
                    dataSource={newFeatures}
                    renderItem={(item) => (
                      <List.Item>
                        {item.tag && (
                          <Tag color={item.tagColor}>{item.tag}</Tag>
                        )}
                        <span className="ml-1">{item.title}</span>
                        <span className="ml-auto text-sm text-gray-500">
                          {item.date}
                        </span>
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="新课程" key="新课程">
                  <p>新课程内容...</p>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
