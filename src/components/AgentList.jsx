import React, { useState } from 'react'
import {
  Layout,
  Menu,
  Input,
  Button,
  Table,
  Modal,
  Popover,
  Select
} from 'antd'
import { SearchOutlined, PlusOutlined } from '@ant-design/icons'

const App = () => {
  const [courses, setCourses] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  // 初始化测试数据
  const initCourses = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      name: `资质证书 ${i + 1}`,
      image: `https://via.placeholder.com/150x150?text=Cert${i + 1}`,
      industry: ['金融', '教育', '科技', '医疗', '制造'][i % 5],
      version: `V${i + 1}.0`,
      status: ['有效', '审核中', '已过期'][i % 3],
      sharedRange: ['全部', '部门内', '指定人员'][i % 3],
      createAt: new Date().toLocaleString()
    }))
  }

  // 表格列定义
  const columns = [
    {
      title: '资质ID',
      dataIndex: 'id',
      key: 'id',
      width: '100px',
      render: (text) => <span className="text-blue-600">{text}</span>
    },
    {
      title: '推广产品名称',
      dataIndex: 'name',
      key: 'name',
      width: '200px'
    },
    {
      title: '资质图片',
      dataIndex: 'image',
      key: 'image',
      width: '150px',
      render: (url) => (
        <img
          src={url}
          alt="资质证书"
          className="h-12 w-full rounded object-cover"
        />
      )
    },
    {
      title: '行业',
      dataIndex: 'industry',
      key: 'industry',
      width: '100px',
      render: (text) => <span className="text-blue-600">{text}</span>
    },
    {
      title: '资质版本',
      dataIndex: 'version',
      key: 'version',
      width: '100px'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '100px',
      render: (status) => (
        <span className={`text-${status === '有效' ? 'green-600' : 'red-600'}`}>
          {status}
        </span>
      )
    },
    {
      title: '共享范围',
      dataIndex: 'sharedRange',
      key: 'sharedRange',
      width: '120px'
    },
    {
      title: '操作',
      key: 'action',
      width: '150px',
      render: (_, record) => (
        <div className="flex gap-2">
          <Button type="primary" size="small" className=" hover:bg-blue-500">
            详情
          </Button>
          <Button
            type="success"
            size="small"
            onClick={() => alert(`更新资质 ${record.id}`)}
            className=" hover:bg-green-500"
          >
            更新
          </Button>
          <Popover
            content={
              <Menu>
                <Menu.Item onClick={() => alert(`修改共享范围 ${record.id}`)}>
                  修改范围
                </Menu.Item>
                <Menu.Item onClick={() => alert(`删除资质 ${record.id}`)}>
                  删除
                </Menu.Item>
              </Menu>
            }
            trigger="click"
          >
            <Button
              type="warning"
              size="small"
              className=" hover:bg-yellow-500"
            >
              共享设置
            </Button>
          </Popover>
        </div>
      )
    }
  ]

  // 初始化课程数据
  React.useEffect(() => {
    setCourses(initCourses())
  }, [])

  return (
    <Layout className="min-h-screen bg-gray-50">
      {/* 头部导航 */}
      <Layout.Header className="bg-white p-4 shadow-lg">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-4">
            <Input
              placeholder="搜索资质证书..."
              className="w-64 flex-1"
              icon={<SearchOutlined />}
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
              className=""
            >
              新增资质
            </Button>
          </div>
          <Popover
            content={
              <Menu>
                <Menu.Item onClick={() => alert('用户设置')}>
                  个人设置
                </Menu.Item>
                <Menu.Item onClick={() => alert('退出登录')}>退出</Menu.Item>
              </Menu>
            }
            trigger="click"
            placement="bottomRight"
          ></Popover>
        </div>
      </Layout.Header>

      {/* 主内容区 */}
      <Layout.Content className="flex-1 p-4">
        {/* ECharts图表 */}
        <div className="mb-8 w-full">
          <div className="w-900 h-400 rounded-lg bg-white shadow-lg" />
        </div>

        {/* 课程列表表格 */}
        <Table
          dataSource={courses}
          columns={columns}
          pagination={{ pageSize: 10 }}
          rowKey={(record) => record.id}
          className="w-900 h-600 overflow-auto rounded-lg bg-white shadow-lg"
        />
      </Layout.Content>

      {/* 新增资质模态框 */}
      <Modal
        title="新增资质证书"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        className="w-900"
      >
        <Input placeholder="证书名称" className="mb-4" />
        <Input placeholder="上传图片" className="mb-4" />
        <Select placeholder="选择行业">
          <Select.Option value="金融">金融</Select.Option>
          <Select.Option value="教育">教育</Select.Option>
        </Select>
        <Button
          type="primary"
          className="mt-4"
          onClick={() => setIsModalVisible(false)}
        >
          提交
        </Button>
      </Modal>
    </Layout>
  )
}

export default App
