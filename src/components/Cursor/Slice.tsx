import React from 'react'
import { Table, Button, Descriptions, Card, Typography } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const PaymentConfirmation = () => {
  // Sample data based on the image
  const paymentInfo = {
    incentiveId: '0004-展示可以确认',
    rebateAmount: '1 元',
    paymentMethod: '支付到银行卡',
    accountInfo: 'xxxxxxxxxxxx-1',
    invoiceStatus: '已关联发票1条，已捆绑退票金额: 1元'
  }

  const invoiceColumns = [
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
      key: 'refundableAmount'
    },
    {
      title: '退票金额(元)',
      dataIndex: 'refundAmount',
      key: 'refundAmount'
    }
  ]

  const invoiceData = [
    {
      key: '1',
      invoiceNumber: '票据号码_0',
      invoiceTime: '2025-01-01 04:20:00',
      invoiceType: '信用卡开票',
      refundableAmount: '824.83',
      refundAmount: '1'
    }
  ]

  return (
    <div className="mx-auto max-w-4xl rounded-md bg-white p-6 shadow-sm">
      <Title level={4} className="mb-6">
        支付确认
      </Title>

      <Card className="mb-6">
        <Descriptions bordered column={1} className="w-full">
          <Descriptions.Item label="激励条目ID">
            {paymentInfo.incentiveId}
          </Descriptions.Item>
          <Descriptions.Item label="返点激励金额">
            {paymentInfo.rebateAmount}
          </Descriptions.Item>
          <Descriptions.Item label="支付方式">
            {paymentInfo.paymentMethod}
          </Descriptions.Item>
          <Descriptions.Item label="支付方式">
            {paymentInfo.accountInfo}
          </Descriptions.Item>
          <Descriptions.Item label="关联发票">
            <div className="flex items-center">
              <CheckCircleOutlined className="mr-2 text-green-500" />
              <Text>{paymentInfo.invoiceStatus}</Text>
            </div>
          </Descriptions.Item>
        </Descriptions>
      </Card>

      <Table
        dataSource={invoiceData}
        columns={invoiceColumns}
        pagination={false}
        className="mb-6"
        size="middle"
        bordered
      />

      <div className="mt-4 flex justify-start">
        <Button type="primary" size="large" className="px-8">
          提交
        </Button>
      </div>
    </div>
  )
}

export default PaymentConfirmation
