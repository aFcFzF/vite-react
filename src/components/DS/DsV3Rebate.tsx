import React from 'react'
import { Card, Table, Button, Input, Radio, Alert } from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

const RebatePaymentUI = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-2xl font-bold">支付方式</h1>

      <Card title="选择关联发票" className="mb-6">
        <div className="space-y-6">
          <Card title="支付确认" bordered>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  激活条目ID
                </label>
                <p className="mt-1">0004-展示可以确认</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  返点激励金额
                </label>
                <p className="mt-1">1元</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  * 选择支付方式
                </label>
                <div className="mt-2">
                  <Radio.Group value={0}>
                    <Radio value={0}>支付到银行卡</Radio>
                  </Radio.Group>
                </div>
                <p className="mt-1 text-sm text-gray-500">信用仅限单还款抵扣</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  * 支付信息
                </label>
                <p className="mt-1">xxxxxxxxxxx-1</p>
              </div>
            </div>
          </Card>

          <Card title="选择关联发票" bordered>
            <Alert
              message="提示：退票金额之和需完全等于返点激励金额；每条关联发票的退票金额填入需小于等于可开票金额"
              className="mb-4"
            />

            <div className="mb-4">
              <div className="flex justify-between">
                <span>返点激励金额</span>
                <span>1元</span>
              </div>

              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                  * 关联发票
                </label>
                <p className="text-sm">
                  已关联发票4条，已填写退票金额: 1元，满足退票条件
                </p>
              </div>
            </div>

            <div className="mb-4 flex justify-between">
              <Button variant="outline">+ 添加发票</Button>
              <Button variant="outline">删除发票</Button>
            </div>

            <Table
              rowKey="id"
              columns={[
                { title: '发票编号', colKey: 'invoiceNo' },
                { title: '开票时间', colKey: 'invoiceTime' },
                { title: '开票类型', colKey: 'invoiceType' },
                { title: '可退票金额(元)', colKey: 'refundableAmount' },
                { title: '退票金额(元)', colKey: 'refundAmount' }
              ]}
              data={[
                {
                  id: 0,
                  invoiceNo: '票据号码_0',
                  invoiceTime: '2025-01-01 04:20:00',
                  invoiceType: '信用金开票',
                  refundableAmount: '824.83',
                  refundAmount: '1'
                },
                {
                  id: 1,
                  invoiceNo: '票据号码_1',
                  invoiceTime: '2025-01-01 04:20:01',
                  invoiceType: '信用金开票',
                  refundableAmount: '63.93',
                  refundAmount: '0'
                },
                {
                  id: 2,
                  invoiceNo: '票据号码_2',
                  invoiceTime: '2025-01-01 04:20:02',
                  invoiceType: '信用金开票',
                  refundableAmount: '1049.55',
                  refundAmount: '0'
                },
                {
                  id: 3,
                  invoiceNo: '票据号码_3',
                  invoiceTime: '2025-01-01 04:20:03',
                  invoiceType: '信用金开票',
                  refundableAmount: '918',
                  refundAmount: '0'
                }
              ]}
            />
          </Card>
        </div>
      </Card>

      <Card title="支付确认" className="mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              激活条目ID
            </label>
            <p className="mt-1">0004-展示可以确认</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              返点激励金额
            </label>
            <p className="mt-1">1元</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              支付方式
            </label>
            <p className="mt-1">支付到银行卡</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              支付方式
            </label>
            <p className="mt-1">xxxxxxxxxxx-1</p>
          </div>
        </div>
      </Card>

      <Card title="关联发票">
        <div className="mb-4">
          <p>已关联发票1条，已填写退票金额: 1元</p>
        </div>

        <Table
          rowKey="id"
          columns={[
            { title: '发票编号', colKey: 'invoiceNo' },
            { title: '开票时间', colKey: 'invoiceTime' },
            { title: '开票类型', colKey: 'invoiceType' },
            { title: '可退票金额(元)', colKey: 'refundableAmount' },
            { title: '退票金额(元)', colKey: 'refundAmount' }
          ]}
          data={[
            {
              id: 0,
              invoiceNo: '票据号码_0',
              invoiceTime: '2025-01-01 04:20:00',
              invoiceType: '信用金开票',
              refundableAmount: '824.83',
              refundAmount: '1'
            }
          ]}
        />
      </Card>
    </div>
  )
}

export default RebatePaymentUI
