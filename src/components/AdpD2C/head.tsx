import React from 'react'
import { Avatar, Badge, Button, Menu } from 'antd'
import {
  MobileOutlined,
  BellOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'

const HeaderComponent: React.FC = () => {
  return (
    <div className="flex h-[60px] w-full flex-row items-center justify-between">
      {/* Left Section - Platform Name */}
      <div className="flex h-full w-[400px] flex-row items-center">
        <div className="flex items-center gap-0">
          {/* Tencent Ad Logo */}
          <div className="relative h-[20px] w-[36px]">
            <div className="relative h-[20px] w-[35.79px]">
              <div
                className="inline-flex h-[20px] w-[35.79px] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    'url(https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4746a7d-e4e8-4a41-a2f2-0afc8d7b1518)'
                }}
              />
            </div>
          </div>

          {/* Blue Rectangle */}
          <div className="relative bg-[#D4E1FC]"></div>
        </div>

        {/* Platform Title */}
        <div className="flex items-center pl-3">
          <div className="flex items-center gap-[6px] px-3 py-2">
            <span className="text-lg font-normal leading-[18px] tracking-[6%] text-[#002163]">
              客户工作台
            </span>
            <Badge
              count="New"
              className="flex h-5 items-center rounded-full px-1.5 py-1"
              style={{
                background:
                  'radial-gradient(ellipse 153.69% 229.07% at -8.54% 5.00%, #D7FFE3 0%, #00B2FF 26%, #3B7CFF 50%, #4C75FF 67%, #595FF8 79%, #DB79EB 100%), white'
              }}
            />
          </div>
        </div>
      </div>

      {/* Middle Section - Navigation Menu */}
      <div className="flex h-[60px] flex-row items-center justify-center gap-6">
        <Menu
          mode="horizontal"
          selectedKeys={['overview']}
          className="h-full border-b-0"
        >
          <Menu.Item key="overview" className="flex h-full items-center">
            <span className="text-lg font-semibold leading-[26px] text-[#17224E]">
              概览
            </span>
          </Menu.Item>
          <Menu.Item key="promotion" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              推广
            </span>
          </Menu.Item>
          <Menu.Item key="analysis" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              分析
            </span>
          </Menu.Item>
          <Menu.Item key="assets" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              资产
            </span>
          </Menu.Item>
          <Menu.Item key="optimization" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              优化
            </span>
          </Menu.Item>
          <Menu.Item key="finance" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              财务
            </span>
          </Menu.Item>
          <Menu.Item key="management" className="flex h-full items-center">
            <span className="text-base font-normal leading-[24px] text-[#323F72]">
              管理
            </span>
          </Menu.Item>
        </Menu>
      </div>

      {/* Right Section - User Controls */}
      <div className="flex w-[400px] flex-row items-center justify-end gap-2">
        <div className="flex items-center gap-0">
          <Button
            type="text"
            icon={<MobileOutlined />}
            className="size-[30px] rounded-full p-1.5"
          />
          <Button
            type="text"
            icon={<BellOutlined />}
            className="size-[30px] rounded-full p-1.5"
          />
          <Button
            type="text"
            icon={<QuestionCircleOutlined />}
            className="size-[30px] rounded-full p-1.5"
          />
        </div>

        <Avatar
          size={32}
          src="https://s3-alpha-sig.figma.com/img/8e20/b874/17c7a5c4453ae875f307aada1097454c?Expires=1747612800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i8LgOx~CS8ODYbGVYjQFy6fWcfZChV20MfSVENhZ6JwY-x8Mvh7T0StADr-GyxJxq60zR2ZYAHDecC-a4HGxyCD9a2OLDI9f~bZZy2j1Pc-PZzxeTI~qt5r~ShhXzaVHmT5Fs7h0GcPYsqPPL3p0g0Q2sQr8jVtvFMI-qJQxbcfbbZx62XKSuRsoT60tKupwrld6qSFEYWIROwMjOSpPGNBDqRQ1GTFlO5ycEV1GiLo-36daYK5VXmGbmBqaafCAqF8L0gHWbonKzTEWCBzcVACWVuWHWP2BRdFpU495-QQ3~12Aw3z~aQUmLAZotZyUxQT53G8T0L7SzRFCb1zlAA__"
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default HeaderComponent
