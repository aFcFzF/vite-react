import React from 'react'
import { Form, Input, Button, Table, Modal } from 'antd'

const App = () => {
  return (
    <div className="container">
      <Form layout="vertical">
        <Form.Item label="支付方式">
          <Input placeholder="支付方式" />
        </Form.Item>
        <Form.Item label="选择关联发票">
          <Input placeholder="激励条目ID" />
        </Form.Item>
        <Form.Item label="支付确认">
          <Input placeholder="返点激励金额" />
        </Form.Item>
        <Form.Item label="选择支付方式">
          <Input placeholder="支付到银行卡" />
        </Form.Item>
        <Form.Item label="支付信息">
          <Input placeholder="支付信息" />
        </Form.Item>
        <Form.Item label="选择关联发票">
          <Modal>
            <Table
              columns={[
                { title: '发票编号', dataIndex: 'invoiceNumber' },
                { title: '开票时间', dataIndex: 'invoiceDate' },
                { title: '开票类型', dataIndex: 'invoiceType' },
                { title: '可退票金额(元)', dataIndex: 'refundableAmount' },
                { title: '退票金额(元)', dataIndex: 'returnedAmount' }
              ]}
              dataSource={[
                {
                  invoiceNumber: '票据号码_0',
                  invoiceDate: '2025-01-01 04:20:00',
                  invoiceType: '信用金开票',
                  refundableAmount: 824.83,
                  returnedAmount: 1
                },
                {
                  invoiceNumber: '票据号码_1',
                  invoiceDate: '2025-01-01 04:20:01',
                  invoiceType: '信用金开票',
                  refundableAmount: 63.83,
                  returnedAmount: 0
                },
                {
                  invoiceNumber: '票据号码_2',
                  invoiceDate: '2025-01-01 04:20:02',
                  invoiceType: '信用金开票',
                  refundableAmount: 1040.85,
                  returnedAmount: 0
                },
                {
                  invoiceNumber: '票据号码_3',
                  invoiceDate: '2025-01-01 04:20:03',
                  invoiceType: '信用金开票',
                  refundableAmount: 918,
                  returnedAmount: 0
                }
              ]}
            />
          </Modal>
        </Form.Item>
        <Form.Item>
          <Button type="primary">提交</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
