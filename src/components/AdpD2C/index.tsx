import React from 'react'
import { Button } from 'antd'

const UserInfoCard = () => {
  return (
    <div className="relative box-border h-[134px] w-[342px]">
      {/* 外层卡片 */}
      <div className="relative box-border h-[134px] w-[342px] overflow-hidden rounded-xl bg-white px-5 pb-[16px] pt-5">
        {/* 用户信息区域 */}
        <div className="flex flex-col gap-[12px]">
          {/* 头像和用户名区域 */}
          <div className="flex items-center gap-[8px]">
            {/* 头像 */}
            <div
              className="relative box-border inline-flex size-[40px] flex-col items-center justify-center gap-[10px] overflow-hidden rounded-full"
              style={{
                background:
                  'url(https://s3-alpha-sig.figma.com/img/8e20/b874/17c7a5c4453ae875f307aada1097454c?Expires=1747612800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i8LgOx~CS8ODYbGVYjQFy6fWcfZChV20MfSVENhZ6JwY-x8Mvh7T0StADr-GyxJxq60zR2ZYAHDecC-a4HGxyCD9a2OLDI9f~bZZy2j1Pc-PZzxeTI~qt5r~ShhXzaVHmT5Fs7h0GcPYsqPPL3p0g0Q2sQr8jVtvFMI-qJQxbcfbbZx62XKSuRsoT60tKupwrld6qSFEYWIROwMjOSpPGNBDqRQ1GTFlO5ycEV1GiLo-36daYK5VXmGbmBqaafCAqF8L0gHWbonKzTEWCBzcVACWVuWHWP2BRdFpU495-QQ3~12Aw3z~aQUmLAZotZyUxQT53G8T0L7SzRFCb1zlAA__) center/contain no-repeat',
                padding: '1px 0'
              }}
            />

            {/* 用户名和微信号 */}
            <div className="flex flex-col gap-0">
              <span className="font-['PingFang SC'] relative text-[14px] font-semibold leading-[22px] text-[rgba(0,0,0,0.95)]">
                快乐的小星球
              </span>
              <div className="flex items-center gap-[6px]">
                <span className="font-['PingFang SC'] relative text-[12px] leading-[20px] text-[rgba(38,38,41,0.72)]">
                  微信号:
                </span>
                <span className="relative font-['OD-number'] text-[12px] leading-[20px] text-[rgba(38,38,41,0.72)]">
                  Kldxxq_820
                </span>
              </div>
            </div>
          </div>

          {/* 统计数据区域 */}
          <div className="flex items-center gap-[12px] rounded-xl bg-white p-0">
            {/* 组织 */}
            <div className="relative box-border flex w-[36px] flex-col gap-0 overflow-hidden rounded-lg">
              <span className="font-['PingFang SC'] relative text-[12px] leading-[20px] text-[rgba(38,38,41,0.72)]">
                组织
              </span>
              <span className="relative font-['OD-number'] text-[16px] font-semibold leading-[24px] text-[rgba(0,0,0,0.95)]">
                4
              </span>
            </div>

            {/* 成员 */}
            <div className="relative box-border flex w-[36px] flex-col gap-0 overflow-hidden rounded-lg">
              <span className="font-['PingFang SC'] relative text-[12px] leading-[20px] text-[rgba(38,38,41,0.72)]">
                成员
              </span>
              <span className="relative font-['OD-number'] text-[16px] font-semibold leading-[24px] text-[rgba(0,0,0,0.95)]">
                223
              </span>
            </div>

            {/* 账户 */}
            <div className="relative box-border flex w-[60px] flex-col gap-0 overflow-hidden rounded-lg">
              <span className="font-['PingFang SC'] relative text-[12px] leading-[20px] text-[rgba(38,38,41,0.72)]">
                账户
              </span>
              <span className="relative font-['OD-number'] text-[16px] font-semibold leading-[24px] text-[rgba(0,0,0,0.95)]">
                212,930
              </span>
            </div>

            {/* 组织概览链接 */}
            <Button
              type="link"
              className="font-['PingFang SC'] absolute left-[198px] top-[24px] text-[12px] leading-[20px] text-[#296BEF]"
            >
              组织概览
            </Button>

            {/* 指南按钮 */}
            <Button
              type="link"
              className="font-['PingFang SC'] absolute left-[258px] top-[25px] overflow-hidden rounded-full text-[12px] leading-[18px] text-[#296BEF]"
              icon={
                <span
                  className="inline-block size-[12px] bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url(https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40ef5bd1-17db-4692-8559-1bc445100799)'
                  }}
                />
              }
            >
              指南
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard
