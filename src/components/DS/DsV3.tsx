import { Card, Radio } from 'antd'
import ReactECharts from 'echarts-for-react'

const TrafficAnalysisDashboard = () => {
  // Chart options
  const mainTrafficOptions = {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      axisLabel: {
        interval: 3,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: '流量指数'
    },
    series: [
      {
        data: Array.from({ length: 24 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(58, 77, 233, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(58, 77, 233, 0.1)'
              }
            ]
          }
        },
        lineStyle: {
          width: 3,
          color: '#3a4de9'
        },
        itemStyle: {
          color: '#3a4de9'
        }
      },
      {
        type: 'line',
        showSymbol: false,
        data: Array(24).fill(500),
        lineStyle: {
          color: '#ffa940',
          type: 'dashed',
          width: 1
        },
        markLine: {
          silent: true,
          label: {
            position: 'end',
            formatter: '历史均值'
          },
          data: [
            {
              type: 'average',
              name: '历史均值'
            }
          ]
        }
      }
    ]
  }

  const platformOptions = (name: string) => ({
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      axisLabel: {
        interval: 3,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: '流量指数'
    },
    series: [
      {
        data: Array.from({ length: 24 }, () =>
          Math.floor(Math.random() * 1000)
        ),
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(58, 77, 233, 0.8)'
              },
              {
                offset: 1,
                color: 'rgba(58, 77, 233, 0.1)'
              }
            ]
          }
        },
        lineStyle: {
          width: 2,
          color: '#3a4de9'
        },
        itemStyle: {
          color: '#3a4de9'
        }
      },
      {
        type: 'line',
        showSymbol: false,
        data: Array(24).fill(400),
        lineStyle: {
          color: '#ffa940',
          type: 'dashed',
          width: 1
        },
        markLine: {
          silent: true,
          label: {
            position: 'end',
            formatter: '历史均值'
          },
          data: [
            {
              type: 'average',
              name: '历史均值'
            }
          ]
        }
      }
    ],
    title: {
      text: name,
      left: 'center',
      top: 'top',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal'
      }
    }
  })

  const cardStyle = {
    borderRadius: 8,
    boxShadow:
      '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-bold">流量分析</h1>

      {/* Helpfulness question */}
      <Card style={cardStyle} className="mb-6">
        <div className="mb-4">
          <p className="mb-2 font-medium">流量分析能力对你是否有帮助？</p>
          <Radio.Group defaultValue="helpful">
            <Radio value="helpful">有帮助</Radio>
            <Radio value="notHelpful">无帮助</Radio>
          </Radio.Group>
        </div>
      </Card>

      {/* Traffic overview */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Today's traffic */}
        <Card title="流量趋势概览" style={cardStyle}>
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium">今日流量</span>
              <span className="text-green-500">充足</span>
            </div>
            <div className="mb-4">
              <p className="mb-1 font-medium">高峰流量时段</p>
              <p>10:00-11:00、18:00-17:00、22:00-23:00</p>
            </div>
            <div>
              <p className="mb-1 font-medium">建议关注版位</p>
              <p>微信视频号、微信朋友圈、微信公众号与小程序</p>
            </div>
          </div>
        </Card>

        {/* Next 7 days */}
        <Card title="未来7日流量" style={cardStyle}>
          <div className="mb-4">
            <p className="mb-1 font-medium">高峰流量日期</p>
            <p>01-15、01-18、01-19</p>
          </div>
          <div>
            <p className="mb-1 font-medium">建议关注版位</p>
            <p>微信视频号、微信朋友圈、微信公众号与小程序</p>
          </div>
        </Card>

        {/* Important nodes */}
        <Card title="重要节点流量" style={cardStyle}>
          <div className="mb-4">
            <p className="mb-1 font-medium">节点高峰日期</p>
            <p>年度节点峰日期：01-15、01-16、01-17</p>
            <p>春节高峰日期：01-28、02-05</p>
          </div>
          <div>
            <p className="mb-1 font-medium">建议关注版位</p>
            <p>微信视频号、微信朋友圈、腾讯平台与内容媒体</p>
          </div>
        </Card>
      </div>

      {/* Today's traffic analysis */}
      <Card style={cardStyle} className="mb-6" title="今日流量分析">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-green-500">充足</span>
          <span className="text-sm text-gray-500">
            流量指数通过特定算法生成，反映流量的相对趋势，不代表绝对值，不同版位之间不具备可比性
          </span>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 font-medium">流量指数</h3>
          <ReactECharts
            option={mainTrafficOptions}
            style={{ height: '400px', width: '100%' }}
          />
        </div>

        {/* Platform-specific traffic */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <ReactECharts
              option={platformOptions('微信视频号')}
              style={{ height: '300px', width: '100%' }}
            />
          </div>
          <div>
            <ReactECharts
              option={platformOptions('微信朋友圈')}
              style={{ height: '300px', width: '100%' }}
            />
          </div>
          <div>
            <ReactECharts
              option={platformOptions('微信公众号与小程序')}
              style={{ height: '300px', width: '100%' }}
            />
          </div>
        </div>
      </Card>

      {/* Footer note */}
      <div className="mt-4 text-sm text-gray-500">
        <p>
          数据来源：2025-01-16
          查看更多事件，建议广告主结合营销需求进行合理增设，把握节点机会。查看营销指南
        </p>
        <p className="mt-2 font-medium">
          *
          今日高峰时段「10:00-11:00、18:00-17:00、22:00-23:00」，请重点关注版位「微信视频号、微信朋友圈、微信公众号与小程序」
        </p>
      </div>
    </div>
  )
}

export default TrafficAnalysisDashboard
