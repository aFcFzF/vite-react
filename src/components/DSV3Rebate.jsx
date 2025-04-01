import React, { useState } from 'react'
import {
  Table,
  Card,
  Divider,
  Typography,
  InputNumber,
  Select,
  Button
} from 'antd'

const { Title, Text } = Typography
const { Option } = Select

const RebatePayment = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank')
  const [bankAccount] = useState('xxxxxxxxxxx-1')
  const [invoices, setInvoices] = useState([
    {
      key: '0',
      invoiceNumber: '票据号码_0',
      invoiceTime: '2025-01-01 04:20:00',
      invoiceType: '信用金开票',
      refundableAmount: 824.83,
      refundAmount: 1
    },
    {
      key: '1',
      invoiceNumber: '票据号码_1',
      invoiceTime: '2025-01-01 04:20:01',
      invoiceType: '信用金开票',
      refundableAmount: 63.93,
      refundAmount: 0
    },
    {
      key: '2',
      invoiceNumber: '票据号码_2',
      invoiceTime: '2025-01-01 04:20:02',
      invoiceType: '信用金开票',
      refundableAmount: 1049.55,
      refundAmount: 0
    },
    {
      key: '3',
      invoiceNumber: '票据号码_3',
      invoiceTime: '2025-01-01 04:20:03',
      invoiceType: '信用金开票',
      refundableAmount: 918,
      refundAmount: 0
    }
  ])

  const handleRefundAmountChange = (key, value) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.key === key) {
        return { ...invoice, refundAmount: value }
      }
      return invoice
    })
    setInvoices(updatedInvoices)
  }

  const columns = [
    {
      title: '发票编号',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber'
    },
    {
      title: '开票时间',
      dataIndex: 'invoiceTime',
      key: 'invoiceTime'
    },
    {
      title: '开票类型',
      dataIndex: 'invoiceType',
      key: 'invoiceType'
    },
    {
      title: '可退票金额(元)',
      dataIndex: 'refundableAmount',
      key: 'refundableAmount',
      render: (amount) => amount.toFixed(2)
    },
    {
      title: '退票金额(元)',
      dataIndex: 'refundAmount',
      key: 'refundAmount',
      render: (amount, record) => (
        <InputNumber
          min={0}
          max={record.refundableAmount}
          value={amount}
          onChange={(value) => handleRefundAmountChange(record.key, value)}
          precision={2}
        />
      )
    }
  ]

  const totalRefundAmount = invoices.reduce(
    (sum, invoice) => sum + invoice.refundAmount,
    0
  )
  const rebateAmount = 1 // 1元

  const pieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      data: ['已退票金额', '剩余可退金额']
    },
    series: [
      {
        name: '退票金额',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: totalRefundAmount, name: '已退票金额' },
          { value: rebateAmount - totalRefundAmount, name: '剩余可退金额' }
        ]
      }
    ]
  }

  return (
    <div className="container mx-auto p-4">
      <Title level={2}>支付方式</Title>

      <Card title="选择关联发票" className="mb-6">
        <div className="mb-4">
          <Title level={4}>
            提示：退票金额之和需完全等于返点激励金额；每条关联发票的退票金额填入需小于等于可开票金额
          </Title>
        </div>

        <div className="mb-4 flex justify-between">
          <Text strong>返点激励金额: {rebateAmount}元</Text>
          <Text strong>
            已关联发票{invoices.length}条，已填写退票金额: {totalRefundAmount}
            元，
            {totalRefundAmount === rebateAmount
              ? '满足退票条件'
              : '不满足退票条件'}
          </Text>
        </div>

        <div className="mb-4 flex gap-2">
          <Button type="primary" icon={<span>+</span>}>
            添加发票
          </Button>
          <Button danger icon={<span>-</span>}>
            删除发票
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={invoices}
          pagination={false}
          bordered
        />
      </Card>

      <Divider />

      <Card title="支付确认" className="mb-6">
        <div className="space-y-4">
          <div>
            <Text strong>激活条目ID</Text>
            <div>0004-展示可以确认</div>
          </div>

          <div>
            <Text strong>返点激励金额</Text>
            <div>{rebateAmount}元</div>
          </div>

          <div>
            <Text strong>选择支付方式</Text>
            <Select
              defaultValue="bank"
              style={{ width: 200 }}
              onChange={(value) => setPaymentMethod(value)}
            >
              <Option value="bank">支付到银行卡</Option>
              <Option value="credit">信用仅限单还款抵扣</Option>
            </Select>
          </div>

          <div>
            <Text strong>支付信息</Text>
            <div>{bankAccount}</div>
          </div>
        </div>
      </Card>

      <Divider />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card title="支付确认">
          <div className="space-y-4">
            <div>
              <Text strong>激活条目ID</Text>
              <div>0004-展示可以确认</div>
            </div>

            <div>
              <Text strong>返点激励金额</Text>
              <div>{rebateAmount}元</div>
            </div>

            <div>
              <Text strong>支付方式</Text>
              <div>
                {paymentMethod === 'bank'
                  ? '支付到银行卡'
                  : '信用仅限单还款抵扣'}
              </div>
            </div>

            <div>
              <Text strong>支付方式</Text>
              <div>{bankAccount}</div>
            </div>
          </div>
        </Card>

        <Card title="关联发票">
          <div className="mb-4">
            <Text strong>
              已关联发票{invoices.filter((i) => i.refundAmount > 0).length}
              条，已填写退票金额: {totalRefundAmount}元
            </Text>
          </div>
          <Table
            columns={columns.filter((col) => col.key !== 'refundAmount')}
            dataSource={invoices.filter((i) => i.refundAmount > 0)}
            pagination={false}
            size="small"
          />
        </Card>
      </div>

      <div className="mt-6 flex justify-end">
        <Button type="primary" size="large">
          确认支付
        </Button>
      </div>
    </div>
  )
}

export default RebatePayment
