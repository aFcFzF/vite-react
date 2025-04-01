import React, { useState } from 'react'
import {
  Breadcrumb,
  Radio,
  Input,
  Button,
  Table,
  Tooltip,
  Alert,
  Card
} from 'tdesign-react'
import 'tdesign-react/es/style/index.css'

const PaymentConfirmation = () => {
  const [selectedPayment, setSelectedPayment] = useState('bankCard')
  const [invoiceCount, setInvoiceCount] = useState(4)
  const [confirmedInvoiceCount, setConfirmedInvoiceCount] = useState(1)

  const invoiceColumns = [
    { colKey: 'invoiceNumber', title: '发票编号', width: '18%' },
    { colKey: 'openTime', title: '开票时间', width: '18%' },
    { colKey: 'openType', title: '开票类型', width: '18%' },
    { colKey: 'amount', title: '可退票金额(元)', width: '22%' },
    { colKey: 'refundAmount', title: '退票金额(元)', width: '24%' }
  ]

  const invoiceData = [
    {
      id: 1,
      invoiceNumber: '票据号码_0',
      openTime: '2022-01-01 04:20:00',
      openType: '信用卡开票',
      amount: '824.83',
      refundAmount: 1
    },
    {
      id: 2,
      invoiceNumber: '票据号码_1',
      openTime: '2022-01-01 04:20:01',
      openType: '信用卡开票',
      amount: '63.83',
      refundAmount: 0
    },
    {
      id: 3,
      invoiceNumber: '票据号码_2',
      openTime: '2022-01-01 04:20:02',
      openType: '信用卡开票',
      amount: '1049.65',
      refundAmount: 0
    },
    {
      id: 4,
      invoiceNumber: '票据号码_3',
      openTime: '2022-01-01 04:20:03',
      openType: '信用卡开票',
      amount: '918',
      refundAmount: 0
    }
  ]

  const confirmedInvoiceData = [
    {
      id: 1,
      invoiceNumber: '票据号码_0',
      openTime: '2022-01-01 04:20:00',
      openType: '信用卡开票',
      amount: '824.83',
      refundAmount: 1
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mx-auto max-w-5xl">
        {/* 面包屑导航 */}
        <div className="mb-4 flex items-center">
          <button className="mr-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="text-gray-500">返点费用</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="font-medium">支付方式在线确认</span>
        </div>

        {/* 左侧步骤导航 */}
        <div className="flex">
          <div className="mr-4 w-48">
            <div className="rounded-lg bg-white shadow-sm">
              <div className="flex items-center border-l-4 border-transparent p-4 text-gray-600">
                <svg
                  className="mr-2 size-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>支付方式</span>
              </div>
              <div className="flex items-center border-l-4 border-transparent p-4 text-gray-600">
                <svg
                  className="mr-2 size-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>选择关联发票</span>
              </div>
              <div className="flex items-center border-l-4 border-blue-500 bg-blue-50 p-4 font-medium text-blue-700">
                <svg
                  className="mr-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
                <span>支付确认</span>
              </div>
            </div>
          </div>

          {/* 右侧主要内容 */}
          <div className="flex-1">
            {/* 支付方式部分 */}
            <Card title="支付方式" className="mb-4">
              <div className="p-4">
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">源旅费单ID</span>
                  <span>0004-展示可以确认</span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">返点费用金额</span>
                  <span>1 元</span>
                </div>
                <div className="mb-4">
                  <div className="mb-2 flex items-center">
                    <span className="text-red-500">*</span>
                    <span className="text-gray-500">选择支付方式</span>
                  </div>
                  <div className="flex items-center">
                    <Radio.Group
                      value={selectedPayment}
                      onChange={(val) => setSelectedPayment(val)}
                    >
                      <Radio value="bankCard">
                        支付到银行卡
                        <Tooltip content="支付到银行卡的说明" placement="top">
                          <span className="ml-1 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline size-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                      </Radio>
                      <Radio value="wechat" className="ml-4">
                        信用汉斯单击收款凭证
                        <Tooltip
                          content="信用汉斯单击收款凭证的说明"
                          placement="top"
                        >
                          <span className="ml-1 text-gray-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="inline size-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </span>
                        </Tooltip>
                      </Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-2 flex items-center">
                    <span className="text-red-500">*</span>
                    <span className="text-gray-500">支付信息</span>
                  </div>
                  <div className="w-full">
                    <Input
                      placeholder="请选择"
                      value="xxxxxxxxxxxx-1"
                      readOnly
                      suffix={<i className="t-icon t-icon-chevron-down"></i>}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* 选择关联发票部分 */}
            <Card title="选择关联发票" className="mb-4">
              <div className="p-4">
                <Alert
                  type="warning"
                  message="提示：退票金额之和和需要支付金额一致时，才会关联入确认。如果关联发票的可退票金额入为小于手中确认票金额"
                  className="mb-4"
                />

                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">返点费用金额</span>
                  <span>1 元</span>
                </div>

                <div className="mb-4">
                  <div className="mb-2 flex items-center">
                    <span className="text-red-500">*</span>
                    <span className="text-gray-500">关联发票</span>
                  </div>
                  <div className="mb-2 text-sm text-gray-500">
                    已关联发票{invoiceCount}条，已确定退票金额:
                    1元，满足退票条件
                  </div>

                  <div className="rounded-md border bg-white">
                    <div className="flex items-center justify-between border-b px-4 py-3">
                      <button className="flex items-center text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        添加发票
                      </button>
                      <button className="flex items-center text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 size-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        删除发票
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <Table
                        data={invoiceData}
                        columns={invoiceColumns}
                        rowKey="id"
                        size="small"
                        bordered
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* 支付确认部分 */}
            <Card title="支付确认" className="mb-4">
              <div className="p-4">
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">源旅费单ID</span>
                  <span>0004-展示可以确认</span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">返点费用金额</span>
                  <span>1 元</span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">支付方式</span>
                  <span>支付到银行卡</span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="w-24 text-gray-500">支付方式</span>
                  <span>xxxxxxxxxxxx-1</span>
                </div>
                <div className="mb-4">
                  <div className="mb-2">
                    <span className="text-gray-500">关联发票</span>
                  </div>
                  <div className="mb-2 text-sm text-gray-500">
                    已关联发票{confirmedInvoiceCount}条，已确定退票金额: 1元
                  </div>
                  <div className="overflow-x-auto">
                    <Table
                      data={confirmedInvoiceData}
                      columns={invoiceColumns.filter(
                        (col) => col.colKey !== 'operation'
                      )}
                      rowKey="id"
                      size="small"
                      bordered
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* 底部按钮 */}
            <div className="text-right">
              <Button theme="primary" className="px-8">
                提交
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmation
