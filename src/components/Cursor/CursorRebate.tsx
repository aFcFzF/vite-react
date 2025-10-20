import React, { useState } from 'react'
import {
  Radio,
  Select,
  Button,
  Table,
  Input,
  Form,
  message,
  Tabs,
  Typography
} from 'antd'
import {
  InfoCircleOutlined,
  PlusOutlined,
  DeleteOutlined,
  LeftOutlined
} from '@ant-design/icons'

const { Title, Text } = Typography
const { TabPane } = Tabs

// Mocked data
const invoices = [
  {
    id: '票据号码_0',
    timestamp: '2025-01-01 04:20:00',
    type: '信用金开票',
    amount: 824.83,
    refundAmount: 1
  },
  {
    id: '票据号码_1',
    timestamp: '2025-01-01 04:20:01',
    type: '信用金开票',
    amount: 63.83,
    refundAmount: 0
  },
  {
    id: '票据号码_2',
    timestamp: '2025-01-01 04:20:02',
    type: '信用金开票',
    amount: 1049.65,
    refundAmount: 0
  },
  {
    id: '票据号码_3',
    timestamp: '2025-01-01 04:20:03',
    type: '信用金开票',
    amount: 918,
    refundAmount: 0
  }
]

// Complete Payment Flow Component
const PaymentConfirmationFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<string>('bankCard')
  const [selectedCard, setSelectedCard] = useState<string>('xxxxxxxxxxxxx-1')
  const [invoiceList, setInvoiceList] = useState(invoices)

  // Navigation functions
  const goToNextStep = () => setCurrentStep((prev) => prev + 1)
  const goToPrevStep = () => setCurrentStep((prev) => prev - 1)

  // Common header for all steps
  const renderHeader = () => (
    <div className="flex w-full items-center space-x-2 border-b p-4">
      <Button
        type="text"
        icon={<LeftOutlined />}
        onClick={goToPrevStep}
        disabled={currentStep === 0}
        className="text-gray-500"
      />
      <Text className="text-blue-600">返点激励</Text>
      <Text>{'>'}</Text>
      <Text className="text-blue-600">支付方式在线确认</Text>
    </div>
  )

  // Step 1: Progress Steps Display
  const ProgressSteps = () => {
    return (
      <div className="flex w-full">
        <div className="min-h-screen w-48 bg-gray-50 p-4">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <div className="flex size-6 items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>
              <span className="ml-2">支付方式</span>
            </div>
            <div className="flex items-center">
              <div className="flex size-6 items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>
              <span className="ml-2">选择关联发票</span>
            </div>
            <div className="flex items-center">
              <div className="flex size-6 items-center justify-center rounded-full bg-green-500 text-white">
                ✓
              </div>
              <span className="ml-2">支付确认</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 2: Payment Method Selection
  const PaymentMethodSelection = () => {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Title level={4} className="mb-6">
            支付方式
          </Title>

          <Form layout="vertical">
            <div className="space-y-6">
              <div className="flex">
                <div className="w-1/3 text-gray-500">激励条目ID</div>
                <div>0004-展示可以确认</div>
              </div>

              <div className="flex">
                <div className="w-1/3 text-gray-500">返点激励金额</div>
                <div>1 元</div>
              </div>

              <Form.Item
                label={
                  <span>
                    <span className="text-red-500">*</span> 选择支付方式
                  </span>
                }
                name="paymentMethod"
              >
                <Radio.Group
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <Radio value="bankCard">
                    支付到银行卡
                    <InfoCircleOutlined className="ml-1 text-gray-400" />
                  </Radio>
                  <Radio value="credit">
                    信用仪账单支款抵扣
                    <InfoCircleOutlined className="ml-1 text-gray-400" />
                  </Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label={
                  <span>
                    <span className="text-red-500">*</span> 支付信息
                  </span>
                }
                name="paymentInfo"
              >
                <Select
                  value={selectedCard}
                  onChange={setSelectedCard}
                  style={{ width: '100%' }}
                >
                  <Select.Option value="xxxxxxxxxxxxx-1">
                    xxxxxxxxxxxxx-1
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    )
  }

  // Step 3: Payment Confirmation
  const PaymentConfirmation = () => {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Title level={4} className="mb-6">
            支付确认
          </Title>

          <div className="space-y-6">
            <div className="flex">
              <div className="w-1/3 text-gray-500">激励条目ID</div>
              <div>0004-展示可以确认</div>
            </div>

            <div className="flex">
              <div className="w-1/3 text-gray-500">返点激励金额</div>
              <div>1 元</div>
            </div>

            <div className="flex">
              <div className="w-1/3 text-gray-500">支付方式</div>
              <div>支付到银行卡</div>
            </div>

            <div className="flex">
              <div className="w-1/3 text-gray-500">支付方式</div>
              <div>xxxxxxxxxxxxx-1</div>
            </div>

            <div className="flex">
              <div className="w-1/3 text-gray-500">关联发票</div>
              <div>已关联发票1条，已填写退票金额: 1元</div>
            </div>

            <div className="rounded border">
              <Table
                dataSource={[invoiceList[0]]}
                columns={[
                  { dataIndex: 'id', title: '发票编号', key: 'id' },
                  {
                    dataIndex: 'timestamp',
                    title: '开票时间',
                    key: 'timestamp'
                  },
                  { dataIndex: 'type', title: '开票类型', key: 'type' },
                  {
                    dataIndex: 'amount',
                    title: '可退票金额(元)',
                    key: 'amount'
                  },
                  {
                    dataIndex: 'refundAmount',
                    title: '退票金额(元)',
                    key: 'refundAmount'
                  }
                ]}
                rowKey="id"
                bordered
                pagination={false}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-start">
          <Button type="primary" onClick={() => message.success('提交成功')}>
            提交
          </Button>
        </div>
      </div>
    )
  }

  // Step 4: Invoice Selection
  const InvoiceSelection = () => {
    const updateRefundAmount = (id: string, amount: number) => {
      setInvoiceList((prev) =>
        prev.map((invoice) =>
          invoice.id === id ? { ...invoice, refundAmount: amount } : invoice
        )
      )
    }

    const tableColumns = [
      { dataIndex: 'id', title: '发票编号', key: 'id' },
      { dataIndex: 'timestamp', title: '开票时间', key: 'timestamp' },
      { dataIndex: 'type', title: '开票类型', key: 'type' },
      { dataIndex: 'amount', title: '可退票金额(元)', key: 'amount' },
      {
        title: '退票金额(元)',
        key: 'refundAmount',
        render: (record: any) => (
          <Input
            type="number"
            value={record.refundAmount}
            onChange={(e) =>
              updateRefundAmount(record.id, Number(e.target.value))
            }
            style={{ width: '100px' }}
          />
        )
      }
    ]

    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <Title level={4} className="mb-6">
            选择关联发票
          </Title>

          <div className="mb-6 rounded border border-orange-200 bg-orange-50 p-4 text-orange-700">
            <span className="flex items-center">
              <InfoCircleOutlined className="mr-2" />
              提示：退票金额之和需完全等于返点激励金额；每条关联发票的退票金额须小于等于可开票金额
            </span>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex">
              <div className="w-1/5 text-gray-500">返点激励金额</div>
              <div>1 元</div>
            </div>

            <div className="flex">
              <div className="w-1/5 text-gray-500">
                <span className="text-red-500">*</span> 关联发票
              </div>
              <div>已关联发票4条，已填写退票金额: 1元，满足退票条件</div>
            </div>
          </div>

          <div className="mb-4 flex justify-between">
            <Button icon={<PlusOutlined />}>添加发票</Button>
            <Button danger icon={<DeleteOutlined />}>
              删除发票
            </Button>
          </div>

          <Table
            dataSource={invoiceList}
            columns={tableColumns}
            rowKey="id"
            bordered
            pagination={false}
          />
        </div>
      </div>
    )
  }

  // For demo purposes - tabs to show all screens
  const renderAllScreens = () => (
    <div className="flex">
      <div>
        <ProgressSteps />
      </div>
      <div className="flex-auto">
        <PaymentMethodSelection />
        <InvoiceSelection />
        <PaymentConfirmation />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}
      {/* You can use either the flow approach or display all screens */}
      {/* {renderCurrentStep()} */}
      {renderAllScreens()}
    </div>
  )
}

export default PaymentConfirmationFlow
