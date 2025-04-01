import React, { useState, useEffect } from 'react'
import { Select, Button, Card, Tooltip, Space, Tag, Divider } from 'antd'
import { InfoCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import * as echarts from 'echarts'

const TrafficAnalysis = () => {
  useEffect(() => {
    // 绘制主图表
    const mainChart = echarts.init(document.getElementById('mainChart'))
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: [
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00',
          '04:00',
          '08:00',
          '12:00',
          '16:00',
          '20:00',
          '00:00'
        ]
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [
        {
          name: '实际流量指数',
          type: 'line',
          smooth: true,
          data: [30, 40, 50, 80, 110, 120, 130, 140, 150, 145, 140, 150, 160],
          lineStyle: {
            color: '#4989F4'
          },
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 105, 0.2)'
            },
            data: [
              [{ xAxis: '08:00' }, { xAxis: '12:00' }],
              [{ xAxis: '16:00' }, { xAxis: '22:00' }]
            ]
          },
          markPoint: {
            data: [
              {
                coord: [21, 160],
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: { color: '#FF5A5A' }
              }
            ]
          }
        },
        {
          name: '预估流量指数',
          type: 'line',
          smooth: true,
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            140,
            165,
            155
          ],
          lineStyle: {
            color: '#4989F4',
            type: 'dashed'
          }
        }
      ]
    }
    mainChart.setOption(option)

    // 绘制小图表
    const channels = [
      'wechatVideo',
      'wechatFriends',
      'wechatPublic',
      'tencentMedia',
      'optimize'
    ]
    channels.forEach((channel, index) => {
      const smallChart = echarts.init(document.getElementById(channel))
      const smallOption = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['04:00', '10:00', '16:00', '22:00'],
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: '#999' }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        grid: {
          left: 0,
          right: 0,
          top: 5,
          bottom: 20
        },
        series: [
          {
            type: 'line',
            data: [30, 50, index % 2 === 0 ? 90 : 60, 40],
            smooth: true,
            showSymbol: false,
            lineStyle: {
              color: '#4989F4'
            }
          },
          {
            type: 'line',
            data: [null, index % 2 === 0 ? 90 : 60, 40, 60],
            smooth: true,
            showSymbol: false,
            lineStyle: {
              color: '#4989F4',
              type: 'dashed'
            },
            markPoint: {
              data: [
                {
                  coord: [1, index % 2 === 0 ? 90 : 60],
                  symbol: 'circle',
                  symbolSize: 6,
                  itemStyle: { color: '#FF5A5A' }
                }
              ]
            }
          }
        ]
      }
      smallChart.setOption(smallOption)
    })

    // 响应式调整
    window.addEventListener('resize', () => {
      mainChart.resize()
      channels.forEach((channel) => {
        echarts.getInstanceByDom(document.getElementById(channel))?.resize()
      })
    })

    return () => {
      window.removeEventListener('resize', () => {})
      mainChart.dispose()
      channels.forEach((channel) => {
        echarts.getInstanceByDom(document.getElementById(channel))?.dispose()
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between bg-white p-4 shadow">
        <div className="flex items-center">
          <div className="mr-2 rounded bg-blue-500 p-1 text-white">
            <InfoCircleOutlined />
          </div>
          <span className="text-lg font-medium">流量分析</span>
          <QuestionCircleOutlined className="ml-2 text-gray-400" />
        </div>
        <div className="text-sm text-gray-500">
          流量分析能力对你是否有帮助？
          <Button type="text" size="small" className="text-blue-500">
            有帮助
          </Button>
          <Button type="text" size="small" className="text-gray-500">
            无帮助
          </Button>
        </div>
      </div>

      {/* 筛选条件 */}
      <div className="mt-1 bg-white p-4">
        <Space size="large">
          <span>
            地域：
            <Select defaultValue="请选择" style={{ width: 120 }}>
              <Select.Option value="all">全部</Select.Option>
            </Select>
          </span>
          <span>
            年龄：
            <Select defaultValue="请选择" style={{ width: 120 }}>
              <Select.Option value="all">全部</Select.Option>
            </Select>
          </span>
          <span>
            性别：
            <Select defaultValue="请选择" style={{ width: 120 }}>
              <Select.Option value="all">全部</Select.Option>
            </Select>
          </span>
        </Space>
      </div>

      {/* 流量趋势概览 */}
      <div className="mt-4 bg-white p-4">
        <h2 className="mb-6 text-lg font-medium">流量趋势概览</h2>

        <div className="grid grid-cols-3 gap-6">
          {/* 今日流量 */}
          <div>
            <div className="mb-4 flex justify-between">
              <span className="font-medium">今日流量</span>
              <Tag color="green" className="rounded-full">
                充足
              </Tag>
              <a href="#" className="text-sm text-blue-500">
                查看详情
              </a>
            </div>
            <div>
              <div className="mb-1 text-sm text-gray-500">高峰流量时段</div>
              <div className="mb-4">10:00-11:00、18:00-17:00、22:00-23:00</div>
              <div className="mb-1 text-sm text-gray-500">建议关注版位</div>
              <div>微信视频号、微信朋友圈、微信公众号与小程序</div>
            </div>
          </div>

          {/* 未来7日流量 */}
          <div>
            <div className="mb-4 flex justify-between">
              <span className="font-medium">未来7日流量</span>
              <a href="#" className="text-sm text-blue-500">
                查看详情
              </a>
            </div>
            <div>
              <div className="mb-1 text-sm text-gray-500">高峰流量日期</div>
              <div className="mb-4">01-15、01-18、01-19</div>
              <div className="mb-1 text-sm text-gray-500">建议关注版位</div>
              <div>微信视频号、微信朋友圈、微信公众号与小程序</div>
            </div>
          </div>

          {/* 重要节点流量 */}
          <div>
            <div className="mb-4 flex justify-between">
              <span className="font-medium">重要节点流量</span>
              <a href="#" className="text-sm text-blue-500">
                查看详情
              </a>
            </div>
            <div>
              <div className="mb-1 text-sm text-gray-500">节点高峰日期</div>
              <div className="mb-1">年货节高峰日期: 01-15、01-16、01-17</div>
              <div className="mb-4">春节高峰日期: 01-28、02-05</div>
              <div className="mb-1 text-sm text-gray-500">建议关注版位</div>
              <div>微信视频号、微信朋友圈、腾讯平台与内容媒体</div>
            </div>
          </div>
        </div>
      </div>

      {/* 今日流量分析 */}
      <div className="mt-4 bg-white p-4">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center">
            <span className="mr-2 text-lg font-medium">今日流量分析</span>
            <Tag color="green" className="rounded-full">
              充足
            </Tag>
          </div>
          <div className="text-sm text-gray-500">
            流量指数通过特定算法生成，反映流量的相对趋势，不代表绝对量，不同版位之间不具备可比性
          </div>
        </div>

        {/* 主流量图表 */}
        <div className="mb-6">
          <div className="mb-2 font-medium">大盘</div>
          <div id="mainChart" style={{ height: '200px', width: '100%' }}></div>
        </div>

        {/* 小图表区域 */}
        <div className="grid grid-cols-5 gap-4">
          <div>
            <div className="mb-2 font-medium">微信视频号</div>
            <div
              id="wechatVideo"
              style={{ height: '100px', width: '100%' }}
            ></div>
          </div>
          <div>
            <div className="mb-2 font-medium">微信朋友圈</div>
            <div
              id="wechatFriends"
              style={{ height: '100px', width: '100%' }}
            ></div>
          </div>
          <div>
            <div className="mb-2 font-medium">微信公众号与小程序</div>
            <div
              id="wechatPublic"
              style={{ height: '100px', width: '100%' }}
            ></div>
          </div>
          <div>
            <div className="mb-2 font-medium">腾讯平台与内容媒体</div>
            <div
              id="tencentMedia"
              style={{ height: '100px', width: '100%' }}
            ></div>
          </div>
          <div>
            <div className="mb-2 font-medium">优量汇</div>
            <div id="optimize" style={{ height: '100px', width: '100%' }}></div>
          </div>
        </div>

        {/* 图例 */}
        <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
          <div className="mr-4 flex items-center">
            <span className="mr-1 inline-block h-0.5 w-6 bg-blue-500"></span>
            <span>实际流量指数</span>
          </div>
          <div className="mr-4 flex items-center">
            <span className="mr-1 inline-block h-0.5 w-6 border-b border-dashed bg-blue-500"></span>
            <span>预估流量指数</span>
          </div>
          <div className="mr-4 flex items-center">
            <span className="mr-1 inline-block size-3 bg-yellow-100"></span>
            <span>历史同日均值</span>
          </div>
          <div className="mr-4 flex items-center">
            <span className="mr-1 inline-block size-3 rounded-full bg-red-500"></span>
            <span>流量高峰值</span>
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="mt-4 bg-white p-4">
        <div className="flex items-start rounded bg-blue-50 p-4">
          <span className="mr-2 text-blue-500">"</span>
          <div>
            <div className="mb-2">
              重点关注 | 2025-01-16
              有重要事件，建议广告主结合营销需求进行合理投放，把握节点机会。
              <a href="#" className="ml-2 text-blue-500">
                查看营销指南
              </a>
            </div>
            <div className="text-gray-500">
              •
              今日高峰时段「10:00-11:00、18:00-17:00、22:00-23:00」，请重点关注版位「微信视频号、微信朋友圈、微信公众号与小程序」
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficAnalysis
