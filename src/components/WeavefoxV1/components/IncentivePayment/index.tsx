import React from 'react'
import { LineOutlined, RightOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const IncentivePayment: React.FC = () => {
  return (
    <div className={styles.incentiveContainer}>
      <LineOutlined className={styles.iconLine} />
      <div className={styles.incentiveSection} />
      <span className={styles.paymentMethod}>
        返点激励
        <RightOutlined className={styles.iconRight} />
        支付方式在线确认
      </span>
    </div>
  )
}

export default IncentivePayment
