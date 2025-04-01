import React from 'react'
import { Button, Radio, Input, Table, Alert, Divider } from 'tdesign-react'
import {
  ChevronLeftIcon as ChevronLeft,
  InfoCircleIcon as InfoCircle,
  PlusIcon as Plus,
  DeleteIcon as Delete
} from 'tdesign-icons-react'
import 'tdesign-react/es/style/index.css'

const PaymentConfirmation = () => {
  // This is just UI code, no functionality

  const columns = [
    { colKey: 'invoiceNo', title: '发票编号', width: 100 },
    { colKey: 'startTime', title: '开票时间', width: 120 },
    { colKey: 'invoiceType', title: '开票类型', width: 100 },
    { colKey: 'amount', title: '可退票金额(元)', width: 120 },
    { colKey: 'refundAmount', title: '退票金额(元)', width: 120 }
  ]

  const data = [
    {
      invoiceNo: '票据号码_0',
      startTime: '2023-01-01 04:20:00',
      invoiceType: '信用证开票',
      amount: '824.83',
      refundAmount: '1'
    },
    {
      invoiceNo: '票据号码_1',
      startTime: '2023-01-01 04:20:01',
      invoiceType: '信用证开票',
      amount: '63.83',
      refundAmount: '0'
    },
    {
      invoiceNo: '票据号码_2',
      startTime: '2023-01-01 04:20:02',
      invoiceType: '信用证开票',
      amount: '1049.65',
      refundAmount: '0'
    },
    {
      invoiceNo: '票据号码_3',
      startTime: '2023-01-01 04:20:03',
      invoiceType: '信用证开票',
      amount: '918',
      refundAmount: '0'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center bg-white p-4 shadow-sm">
        <Button variant="text" icon={<ChevronLeft />} className="text-gray-500">
          返回查询
        </Button>
        <span className="ml-4 text-base font-medium">支付方式在线确认</span>
      </div>

      {/* Main Content */}
      <div className="flex gap-4 px-4 py-6">
        {/* Sidebar / Progress */}
        <div className="w-60 shrink-0">
          <div className="rounded bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between border-b py-3">
              <span className="text-gray-600">支付方式</span>
              <span className="text-blue-500">✓</span>
            </div>
            <div className="flex items-center justify-between border-b py-3">
              <span className="text-gray-600">选择关联发票</span>
              <span className="text-blue-500">✓</span>
            </div>
            <div className="flex items-center justify-between py-3 font-medium text-blue-600">
              <span>支付确认</span>
              <span className="text-blue-500">✓</span>
            </div>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="flex-1">
          {/* Payment Method Section */}
          <div className="mb-4 rounded bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">支付方式</h2>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">源账务 ID</div>
              <div className="col-span-10">0004-展示可以确认</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">返点激励金额</div>
              <div className="col-span-10">1 元</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-red-500">* 选择支付方式</div>
              <div className="col-span-10">
                <Radio.Group defaultValue="bank">
                  <Radio value="bank">
                    支付到银行卡 <InfoCircle className="text-gray-400" />
                  </Radio>
                  <Radio value="credit">
                    信用仅提现至现金红包{' '}
                    <InfoCircle className="text-gray-400" />
                  </Radio>
                </Radio.Group>
              </div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-red-500">* 支付信息</div>
              <div className="col-span-10">
                <Input
                  suffix={<i className="t-icon t-icon-chevron-down"></i>}
                  value="xxxxxxxxxxx-1"
                />
              </div>
            </div>
          </div>

          {/* Invoice Section */}
          <div className="mb-4 rounded bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">选择关联发票</h2>

            <Alert
              theme="warning"
              message="提示：退票金额之和需要等于可退点激励金额，每条关联发票的退票金额输入人小于等于可开具票金额"
              className="mb-4"
            />

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">返点激励金额</div>
              <div className="col-span-10">1 元</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-red-500">* 关联发票</div>
              <div className="col-span-10 text-gray-600">
                已关联发票4条，已填写退票金额: 1元，满足提票条件
              </div>
            </div>

            <div className="mt-2 pl-[16.7%] pr-0">
              <div className="mb-2 flex items-center justify-between">
                <Button theme="default" variant="outline" icon={<Plus />}>
                  添加发票
                </Button>
                <Button theme="danger" variant="outline" icon={<Delete />}>
                  删除发票
                </Button>
              </div>
              <Table
                data={data}
                columns={columns}
                rowKey="invoiceNo"
                bordered
                size="small"
                className="bg-white"
              />
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="mb-4 rounded bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">支付确认</h2>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">源账务 ID</div>
              <div className="col-span-10">0004-展示可以确认</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">返点激励金额</div>
              <div className="col-span-10">1 元</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">支付方式</div>
              <div className="col-span-10">支付到银行卡</div>
            </div>

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">支付方式</div>
              <div className="col-span-10">xxxxxxxxxxx-1</div>
            </div>

            <Divider />

            <div className="grid grid-cols-12 py-2">
              <div className="col-span-2 text-gray-500">关联发票</div>
              <div className="col-span-10">
                已关联发票1条，已填写退票金额: 1元
              </div>
            </div>

            <div className="mt-2 pl-[16.7%] pr-0">
              <Table
                data={[data[0]]}
                columns={columns}
                rowKey="invoiceNo"
                bordered
                size="small"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <Button theme="primary" size="large">
              提交
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmation
