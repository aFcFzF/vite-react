import React, { useState } from 'react'
import {
  Button,
  Switch,
  Input,
  Table,
  Card,
  Tag,
  Dropdown,
  Menu,
  Radio
} from 'antd'
import {
  FilterFilled,
  SearchOutlined,
  CalendarOutlined
} from '@ant-design/icons'

const AccountDashboard = () => {
  const [dateRange] = useState(['2023-10-01', '2023-10-30'])
  const [showImportantOnly, setShowImportantOnly] = useState(false)
  const [filterVisible, setFilterVisible] = useState(false)
  const [searchText, setSearchText] = useState('')

  // Sample data - you would replace this with your actual data
  const accountData = [
    {
      id: 1,
      accountName: '主要账户',
      balance: 12500.0,
      transactions: 25,
      lastActivity: '2023-10-28',
      status: 'active',
      isImportant: true,
      notes: '主要收入账户'
    },
    {
      id: 2,
      accountName: '储蓄账户',
      balance: 45000.0,
      transactions: 5,
      lastActivity: '2023-10-15',
      status: 'active',
      isImportant: true,
      notes: '长期储蓄'
    },
    {
      id: 3,
      accountName: '投资账户',
      balance: 78000.0,
      transactions: 12,
      lastActivity: '2023-10-20',
      status: 'active',
      isImportant: false,
      notes: '股票投资'
    }
  ]

  const columns = [
    {
      title: '账户名称',
      dataIndex: 'accountName',
      key: 'accountName',
      render: (text, record) => (
        <div className="font-medium">
          {text}
          {record.isImportant && (
            <Tag color="gold" className="ml-2">
              重点
            </Tag>
          )}
        </div>
      )
    },
    {
      title: '余额',
      dataIndex: 'balance',
      key: 'balance',
      render: (text) => <span>¥ {text.toFixed(2)}</span>,
      sorter: (a, b) => a.balance - b.balance
    },
    {
      title: '交易笔数',
      dataIndex: 'transactions',
      key: 'transactions',
      sorter: (a, b) => a.transactions - b.transactions
    },
    {
      title: '最后活动',
      dataIndex: 'lastActivity',
      key: 'lastActivity',
      sorter: (a, b) => new Date(a.lastActivity) - new Date(b.lastActivity)
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '活跃' : '冻结'}
        </Tag>
      )
    },
    {
      title: '备注',
      dataIndex: 'notes',
      key: 'notes'
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <div className="flex space-x-2">
          <Button type="link" size="small">
            查看
          </Button>
          <Button type="link" size="small">
            编辑
          </Button>
        </div>
      )
    }
  ]

  const filteredData = accountData.filter((item) => {
    if (showImportantOnly && !item.isImportant) {
      return false
    }
    if (
      searchText &&
      !item.accountName.includes(searchText) &&
      !item.notes.includes(searchText)
    ) {
      return false
    }
    return true
  })

  const filterMenu = (
    <Menu>
      <Menu.Item key="1">
        <div className="px-2 py-1">
          <p className="text-xs text-gray-500">备注：</p>
          <Input
            placeholder="请输入"
            size="small"
            className="mt-1 w-40"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div className="px-2 py-1">
          <p className="text-xs text-gray-500">状态：</p>
          <div className="mt-1">
            <Radio.Group size="small">
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="active">活跃</Radio.Button>
              <Radio.Button value="frozen">冻结</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <div className="flex justify-end px-2 py-1">
          <Button size="small" className="mr-2">
            重置
          </Button>
          <Button type="primary" size="small">
            确定
          </Button>
        </div>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <Card className="shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-semibold">账户</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-500">
              <CalendarOutlined />
              <span className="text-xs">
                {dateRange[0]} 至 {dateRange[1]}
              </span>
            </div>
            <div className="flex items-center">
              <Switch
                size="small"
                onChange={(checked) => setShowImportantOnly(checked)}
              />
              <span className="ml-1 text-xs">只看重点账户</span>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-between">
          <div className="flex items-center">
            <Input
              placeholder="搜索账户"
              prefix={<SearchOutlined />}
              className="mr-2 w-64"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Dropdown
              overlay={filterMenu}
              trigger={['click']}
              visible={filterVisible}
              onVisibleChange={setFilterVisible}
            >
              <Button
                icon={<FilterFilled />}
                className={`rounded-full ${
                  filterVisible ? 'bg-blue-50' : 'bg-gray-100'
                }`}
                onClick={() => setFilterVisible(!filterVisible)}
              />
            </Dropdown>
          </div>

          <div>
            <Button type="primary" className="mr-2">
              新增账户
            </Button>
            <Button>导出</Button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showTotal: (total) => `共 ${total} 项`,
            showSizeChanger: true,
            showQuickJumper: true
          }}
          className="bg-white"
          size="middle"
        />
      </Card>
    </div>
  )
}

export default AccountDashboard
