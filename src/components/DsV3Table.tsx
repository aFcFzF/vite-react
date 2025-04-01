import React from 'react'
import { Input, Select, Button, Table, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Option } = Select

const QualificationManagement = () => {
  // Mock data for the table
  const dataSource = [
    {
      key: '1',
      id: '36010880',
      productName: '小暖-太极养生课',
      industry: '日化-日化口腔 - 一般口腔护理',
      version: '第1版',
      status: '审核中',
      sharedScope: '业务单元：5'
    },
    {
      key: '2',
      id: '38202888',
      productName: '大师-气功养生课',
      industry: '美妆-护肤-男士护理',
      version: '第1版',
      status: '审核中',
      sharedScope: '业务单元：5'
    },
    {
      key: '3',
      id: '47292879',
      productName: '成人绘画体验课',
      industry: '美妆-美妆工具-其他美妆工具',
      version: '第3版',
      status: '已通过',
      sharedScope: '业务单元：5'
    },
    {
      key: '4',
      id: '37292973',
      productName: '进阶-太极养生课',
      industry: '日化-家庭护理品-暖虫用品',
      version: '第1版',
      status: '已取回',
      sharedScope: '业务单元：5、服务商'
    },
    {
      key: '5',
      id: '38292027',
      productName: '体验课-气功养生课',
      industry: '美妆-护肤-眼部护理',
      version: '第1版',
      status: '审核中',
      sharedScope: '业务单元：5'
    },
    {
      key: '6',
      id: '37292733',
      productName: '成人绘画基础课',
      industry: '医疗健康 - 医疗器械-家庭护理',
      version: '第1版',
      status: '已通过',
      sharedScope: '业务单元：5、服务商'
    },
    {
      key: '7',
      id: '972939779',
      productName: '师资培训-太极养生课',
      industry: '日化-日化用品电商',
      version: '第1版',
      status: '已通过',
      sharedScope: '业务单元：5'
    },
    {
      key: '8',
      id: '372937399',
      productName: '师资培训-气功养生课',
      industry: '医疗健康 - 保健品-跨境-辅助降血压',
      version: '第1版',
      status: '已失效',
      sharedScope: '业务单元：5'
    },
    {
      key: '9',
      id: '176282964',
      productName: '成人油画课',
      industry: '服装配饰 - 服装配饰电商',
      version: '第1版',
      status: '审核中',
      sharedScope: '业务单元：5'
    },
    {
      key: '10',
      id: '3729277972',
      productName: '体验课-太极养生课',
      industry: '医疗健康 - 保健品-国内-辅助降血压',
      version: '第1版',
      status: '审核中',
      sharedScope: '业务单元：5'
    }
  ]

  const columns = [
    {
      title: '资质 ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '推广产品名称',
      dataIndex: 'productName',
      key: 'productName'
    },
    {
      title: '行业',
      dataIndex: 'industry',
      key: 'industry'
    },
    {
      title: '资质版本',
      dataIndex: 'version',
      key: 'version'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => {
        let color = ''
        switch (text) {
          case '审核中':
            color = 'text-yellow-500'
            break
          case '已通过':
            color = 'text-green-500'
            break
          case '已取回':
            color = 'text-gray-500'
            break
          case '已失效':
            color = 'text-red-500'
            break
          default:
            color = 'text-black'
        }
        return <span className={color}>{text}</span>
      }
    },
    {
      title: '共享范围',
      dataIndex: 'sharedScope',
      key: 'sharedScope'
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button type="link" className="p-0">
            详情
          </Button>
          <Button type="link" className="p-0">
            更新
          </Button>
          <Button type="link" className="p-0">
            修改共享范围
          </Button>
        </Space>
      )
    }
  ]

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">资质管理</h1>
        <Button type="primary" className="bg-blue-500">
          + 新建资质
        </Button>
      </div>

      <div className="mb-6">
        <Input
          placeholder="请输入推广产品名称"
          className="mb-4 w-full max-w-md"
        />

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="mr-2">行业信息：</span>
            <Select
              placeholder="请选择"
              suffixIcon={<span>√</span>}
              className="w-40"
            >
              <Option value="all">全部</Option>
            </Select>
          </div>

          <div className="flex items-center">
            <span className="mr-2">审核状态：</span>
            <Select
              placeholder="请选择"
              suffixIcon={<span>√</span>}
              className="w-40"
            >
              <Option value="all">全部</Option>
            </Select>
          </div>

          <div className="flex items-center">
            <span className="mr-2">创建人：</span>
            <Select
              placeholder="请选择"
              suffixIcon={<span>√</span>}
              className="w-40"
            >
              <Option value="all">全部</Option>
            </Select>
          </div>

          <Button icon={<SearchOutlined />} type="primary" className="ml-auto">
            搜索
          </Button>
        </div>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true
        }}
      />
    </div>
  )
}

export default QualificationManagement
