/**
 * @file index.tsx
 * @author markJia(markjia@tencent.com)
 */

export const Main = (): JSX.Element => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--完整色彩-黑白-White00, white)',
        overflow: 'hidden',
        borderRadius: 12,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'inline-flex'
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          paddingTop: 16,
          paddingBottom: 12,
          paddingLeft: 20,
          paddingRight: 20,
          overflow: 'hidden',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: 10,
          display: 'inline-flex'
        }}
      >
        <div
          style={{
            color:
              'var(--功能语义色彩-文本色-color-primary_text, rgba(0, 0, 0, 0.95))',
            fontSize: 16,
            fontFamily: 'PingFang SC',
            fontWeight: '600',
            lineHeight: 24,
            wordWrap: 'break-word'
          }}
        >
          今日数据概览
        </div>
      </div>
      <div
        style={{
          alignSelf: 'stretch',
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 12,
          display: 'inline-flex'
        }}
      >
        <div
          style={{
            flex: '1 1 0',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 8,
            background: 'var(--完整色彩-冷灰色-coolGray02, #F2F4FA)',
            overflow: 'hidden',
            borderRadius: 8,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex'
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 4,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: 'var(--完整色彩-灰色-Black10-a, rgba(38, 38, 41, 0.72))',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                lineHeight: 22,
                wordWrap: 'break-word'
              }}
            >
              总余额 (元)
            </div>
            <div
              data-内容层级="主要"
              data-内容类型="常规"
              data-右图标="false"
              data-尺寸="XS"
              data-左图标="true"
              data-文本颜色="灰（常规）"
              data-状态="default"
              style={{
                width: 24,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: 'hidden',
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: 8.85,
                    height: 5.14,
                    left: 2.57,
                    top: 4.97,
                    position: 'absolute',
                    background:
                      'var(--功能语义色彩-图标色-Color-tertiary_icon, rgba(62, 69, 82, 0.36))'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color:
                'var(--功能语义色彩-文本色-color-primary_text, rgba(0, 0, 0, 0.95))',
              fontSize: 16,
              fontFamily: 'OD-number',
              fontWeight: '600',
              lineHeight: 24,
              wordWrap: 'break-word'
            }}
          >
            28,194.47
          </div>
        </div>
        <div
          style={{
            flex: '1 1 0',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 8,
            background: 'var(--完整色彩-冷灰色-coolGray02, #F2F4FA)',
            overflow: 'hidden',
            borderRadius: 8,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex'
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 4,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: 'var(--完整色彩-灰色-Black10-a, rgba(38, 38, 41, 0.72))',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                lineHeight: 22,
                wordWrap: 'break-word'
              }}
            >
              总花费 (元)
            </div>
            <div
              data-内容层级="主要"
              data-内容类型="常规"
              data-右图标="false"
              data-尺寸="XS"
              data-左图标="true"
              data-文本颜色="灰（常规）"
              data-状态="default"
              style={{
                width: 24,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: 'hidden',
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: 8.85,
                    height: 5.14,
                    left: 2.57,
                    top: 4.97,
                    position: 'absolute',
                    background:
                      'var(--功能语义色彩-图标色-Color-tertiary_icon, rgba(62, 69, 82, 0.36))'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color:
                'var(--功能语义色彩-文本色-color-primary_text, rgba(0, 0, 0, 0.95))',
              fontSize: 16,
              fontFamily: 'OD-number',
              fontWeight: '600',
              lineHeight: 24,
              wordWrap: 'break-word'
            }}
          >
            3,592.47
          </div>
        </div>
        <div
          style={{
            flex: '1 1 0',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 8,
            background: 'var(--完整色彩-冷灰色-coolGray02, #F2F4FA)',
            overflow: 'hidden',
            borderRadius: 8,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex'
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 4,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: 'var(--完整色彩-灰色-Black10-a, rgba(38, 38, 41, 0.72))',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                lineHeight: 22,
                wordWrap: 'break-word'
              }}
            >
              下单量
            </div>
            <div
              data-内容层级="主要"
              data-内容类型="常规"
              data-右图标="false"
              data-尺寸="XS"
              data-左图标="true"
              data-文本颜色="灰（常规）"
              data-状态="default"
              style={{
                width: 24,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: 'hidden',
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: 8.85,
                    height: 5.14,
                    left: 2.57,
                    top: 4.97,
                    position: 'absolute',
                    background:
                      'var(--功能语义色彩-图标色-Color-tertiary_icon, rgba(62, 69, 82, 0.36))'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color:
                'var(--功能语义色彩-文本色-color-primary_text, rgba(0, 0, 0, 0.95))',
              fontSize: 16,
              fontFamily: 'OD-number',
              fontWeight: '600',
              lineHeight: 24,
              wordWrap: 'break-word'
            }}
          >
            450
          </div>
        </div>
        <div
          style={{
            flex: '1 1 0',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 8,
            background: 'var(--完整色彩-冷灰色-coolGray02, #F2F4FA)',
            overflow: 'hidden',
            borderRadius: 8,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            display: 'inline-flex'
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              height: 22,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 4,
              display: 'inline-flex'
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: 'var(--完整色彩-灰色-Black10-a, rgba(38, 38, 41, 0.72))',
                fontSize: 14,
                fontFamily: 'PingFang SC',
                fontWeight: '400',
                lineHeight: 22,
                wordWrap: 'break-word'
              }}
            >
              转化量
            </div>
            <div
              data-内容层级="主要"
              data-内容类型="常规"
              data-右图标="false"
              data-尺寸="XS"
              data-左图标="true"
              data-文本颜色="灰（常规）"
              data-状态="default"
              style={{
                width: 24,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 5,
                paddingBottom: 5,
                overflow: 'hidden',
                borderRadius: 999,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: 8.85,
                    height: 5.14,
                    left: 2.57,
                    top: 4.97,
                    position: 'absolute',
                    background:
                      'var(--功能语义色彩-图标色-Color-tertiary_icon, rgba(62, 69, 82, 0.36))'
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              color:
                'var(--功能语义色彩-文本色-color-primary_text, rgba(0, 0, 0, 0.95))',
              fontSize: 16,
              fontFamily: 'OD-number',
              fontWeight: '600',
              lineHeight: 24,
              wordWrap: 'break-word'
            }}
          >
            37,290
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
