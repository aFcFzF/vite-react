import React from 'react'
import IncentivePayment from './components/IncentivePayment'
import InvoiceRefund from './components/InvoiceRefund'
import PaymentConfirmation from './components/PaymentConfirmation'
import PaymentForm from './components/PaymentForm'
import PaymentOptions from './components/PaymentOptions'
import SubmitForm from './components/SubmitForm'

import styles from './index.module.less'

const MyPageComponent: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondarySection}>
        <IncentivePayment />
        <div className={styles.nestedWrapper}>
          <PaymentOptions />
          <div className={styles.contentArea}>
            <PaymentForm />
            <InvoiceRefund />
            <PaymentConfirmation />
            <SubmitForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPageComponent
